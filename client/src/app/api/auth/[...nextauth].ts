import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, getServerSession } from 'next-auth';
import { hash } from 'bcrypt';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'jsmith',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                try {
                    const res = await fetch('/api/user', {
                        method: 'POST',
                        body: JSON.stringify({
                            email,
                            passwordHash: await hash(password, 12),
                        }),
                    });

                    const user = await res.json();
                    
                    if (res.ok && user) {
                        return user;
                    } else return null;
                } catch (error) {
                    console.log(error);
                    throw new Error('Something went wrong');
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
};
