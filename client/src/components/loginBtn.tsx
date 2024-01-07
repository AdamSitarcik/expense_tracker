'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from './button';
import { signIn } from 'next-auth/react';

export const LoginBtn = () => {
    return (
        <button
            className={cn(
                buttonVariants({ variant: 'outline', size: 'default' }),
                'hidden sm:block w-26'
            )}
            onClick={() => {
                signIn();
            }}
        >
            Login
        </button>
    );
};
