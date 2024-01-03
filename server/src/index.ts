import { PrismaClient } from '@prisma/client';
import express from 'express';

const PORT = 8080;

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// user
app.get('/api/user', async (req, res) => {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
        include: { expenses: true },
        where: { email: email },
    });
    res.json({ user });
});

app.post('/api/user', async (req, res) => {
    const { email } = req.body;

    try {
        const userExists = await prisma.user.findUnique({ where: { email } });

        if (userExists) {
            res.json({
                message: 'User with this email already exists',
                userExists,
                existingUser: true,
            }).status(200);
        } else {
            const newUser = await prisma.user.create({
                data: { email },
            });
            res.json({
                message: 'New user created',
                newUser,
                existingUser: false,
            }).status(201);
        }
    } catch (error) {
        console.log(error);
        throw new Error('Something went wrong');
    }
});

app.patch('/api/user');
app.delete('/api/user');

// Expenses API
app.get('/api/expense', async (req, res) => {
    const expenses = await prisma.expense.findMany();
    res.json({ expenses });
});

app.post('/api/expense', async (req, res) => {
    const { price, email } = req.body;

    let userId;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        userId = user?.id;
    } catch (error) {
        console.log(error);
        throw new Error('User not found');
    }

    try {
        if (userId) {
            await prisma.expense.create({
                data: { price: price, userId: userId },
            });
            res.json({ message: 'OK' }).status(200);
        }
    } catch (error) {
        console.log(error);
        throw new Error('Something went wrong');
    }
});
app.patch('/api/expense');
app.delete('/api/expense');

// Categories API
app.get('/api/category');
app.post('/api/category');
app.delete('/api/category');

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
