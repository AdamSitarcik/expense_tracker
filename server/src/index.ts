import express from 'express';
import { PrismaClient } from '@prisma/client';

const PORT = 8080;

const app = express();
const prisma = new PrismaClient();

app.use(express.json())

app.get('/api', (req, res) => {
    res.json({ message: 'Hello world' });
});

app.post('/api/expense', async (req, res) => {
    const { name, email } = req.body;

    await prisma.user.create({
        data: {
            name: name,
            email: email,
        },
    });

    res.json({ message: 'OK' });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
