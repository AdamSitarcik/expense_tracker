import { PrismaClient } from '@prisma/client';
import express from 'express';

const PORT = 8080;

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// user
app.get('/api/user', (req, res) => {
    console.log(req.body);
});
app.post('/api/user');
app.patch('/api/user');
app.delete('/api/user');

// Expenses API
app.get('/api/expense', async (req, res) => {
    console.log(req.body);

    const expenses = await prisma.expense.findMany();

    res.json({ expenses });
});

app.post('/api/expense', async (req, res) => {
    const { price } = req.body;

    await prisma.expense.create({ data: { price: price } });

    res.json({ message: 'OK' });
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
