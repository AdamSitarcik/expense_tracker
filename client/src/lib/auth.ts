import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'email',
                    type: 'text',
                    placeholder: 'jsmith',
                },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials, req) {
                const { email, password, action } = credentials as {
                    email: string;
                    password: string;
                    action: 'register' | 'sign-in';
                };

                console.log('FE AUTHORIZE', action);

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${action}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                    }
                );

                const data = await res.json()

                if (res.ok && data.user) {
                    return data.user;
                } else return null;
            },
        }),
    ],
    callbacks: {
        async redirect() {
            return '/';
        },
        async jwt({ token, user }) {
            const data = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${token.email}`,
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            const { user: dbUser } = await data.json();

            if (!dbUser) {
                token.id = user.id;
                token.email = user.email;

                return token;
            }

            token.id = dbUser.id;
            token.email = dbUser.email;

            return token;
        },
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id;
                session.user.email = token.email;
            }

            return session;
        },
    },
    pages: {
        signIn: '/sign-in',
    },
};
