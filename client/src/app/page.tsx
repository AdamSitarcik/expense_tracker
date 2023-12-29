'use client';

import type { NextPage } from 'next';
import { useState } from 'react';

type ExpenseType = {
    price: string;
};

const Page: NextPage = () => {
    const [prices, setPrices] = useState<string[]>([]);

    const handleSubmit = async () => {
        const data = await fetch('/api/expense', { method: 'GET' });

        const { expenses } = await data.json();

        expenses.map((expense: ExpenseType) => {
            setPrices((prevPrices) => [...prevPrices, expense.price]);
        });
    };

    return (
        <div>
            {/* <form
                onSubmit={() => {
                    handleSubmit();
                }}
            >

            </form> */}
            <div>
                Prices:
                <ul>
                    {prices.map((expense, index) => {

                        return <li key={index}>{expense}</li>;
                    })}
                </ul>
            </div>
            <button onClick={() => handleSubmit()}>Get expenses</button>
        </div>
    );
};

export default Page;
