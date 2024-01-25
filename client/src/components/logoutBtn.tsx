'use client';

import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';
import toast from 'react-hot-toast';
import { buttonVariants } from './button';

export const LogoutBtn = () => {
    return (
        <button
            className={cn(
                buttonVariants({ variant: 'default', size: 'default' }),
                'hidden sm:block w-26'
            )}
            onClick={() => {
                toast.success('Logging out!');
                setTimeout(() => {
                    signOut();
                }, 2000);
            }}
        >
            Logout
        </button>
    );
};
