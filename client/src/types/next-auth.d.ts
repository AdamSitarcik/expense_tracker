import { User } from 'next-auth/next';

declare module 'next-auth' {
    interface Session {
        user: User & {
            id: string;
            email: string;
        };
    }
}
