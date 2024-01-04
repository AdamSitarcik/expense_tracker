'use client';

import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';

const Page: NextPage = () => {
    return (
        <button onClick={() => signIn()} className=''>
            Log in
        </button>
    );
};

export default Page;
