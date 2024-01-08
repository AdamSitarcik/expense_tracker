'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from './button';
import { signIn, signOut } from 'next-auth/react';

export const LoginBtn = () => {
    return (
        <button
            className={cn(
                buttonVariants({ variant: 'secondary', size: 'default' }),
                'hidden sm:block w-26'
            )}
            onClick={() => {
                signOut();
            }}
        >
            Logout
        </button>
    );
};
