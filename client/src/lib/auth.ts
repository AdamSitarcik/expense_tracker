import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
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
                    const res = await fetch(
                        process.env.SERVER_URL + '/api/user',
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                email,
                                password: await bcrypt.hash(
                                    password,
                                    await bcrypt.genSalt(12)
                                ),
                            }),
                        }
                    );

                    const user = await res.json();

                    if (res.ok && user) {
                        return user;
                    } else return null;
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async redirect() {
            return '/';
        },
    },
    // pages: {
    //     signIn: '/sign-in',
    // },
};