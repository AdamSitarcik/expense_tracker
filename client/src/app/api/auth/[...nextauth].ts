import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions, getServerSession } from 'next-auth';

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: '/sign-in',
    },
    callbacks: {
        session({ token, session }) {
            if (token) {
                session.user.id = token.id;
                session.user.email = token.email;
                // session.user?.name = token.name;
                // session.user?.username = token.username;
            }

            return session;
        },
        async jwt({ token, user }) {
            const dbUser = await fetch('/api/user', {
                method: 'GET',
                body: user.id,
            });

            if (!dbUser) {
                if (user) {
                    token.id = user.id;
                }
                return token;
            }

            return {
                id: dbUser.id,
                email: dbUser.email,
                name: dbUser?.name,
                username: dbUser?.username,
            };
        },
        signIn({ user }) {
            console.log(user.id);
            //put a post request to the API with user data -> there find it in DB; if it exist just return, else save it to DB
            fetch('/api/sign-in', {
                method: 'POST',
                body: JSON.stringify({ user }),
            });

            return true;
        },
        redirect() {
            return '/';
        },
    },
    session: {
        strategy: 'jwt',
    },
};

// export async function getCurrentSession() {
//     const session = await getServerSession(authOptions);
//     return session;
// }
