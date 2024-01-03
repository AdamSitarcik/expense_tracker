'use client';

import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

type ExpenseType = {
    price: string;
};

const Page: NextPage = () => {
    return (
        <div>
            <button onClick={() => signIn()}>Log in</button>
        </div>
    );
};

export default Page;
