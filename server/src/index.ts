import express from 'express';
import { PrismaClient } from '@prisma/client';

const PORT = 8080;

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Test
app.get('/api', (req, res) => {
    res.json({ message: 'Hello world' });
});

app.post('/api/user');
app.patch('/api/user');
app.delete('/api/user');

// Expenses API
app.get('/api/expense');
app.post('/api/expense', async (req, res) => {
    const { price, categoryId } = req.body;

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
