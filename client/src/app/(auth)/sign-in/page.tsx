import { buttonVariants } from '@/components/button';
import { HomeBtn } from '@/components/homeBtn';
import { Logo } from '@/components/icons';
import { getCurrentUser } from '@/lib/session';
import { cn } from '@/lib/utils';
import type { NextPage } from 'next';
import { redirect } from 'next/navigation';

const Page: NextPage = async () => {
    const user = await getCurrentUser();

    console.log(user);

    if (user?.email) {
        redirect('/');
    }

    return (
        <div className='container w-full h-screen flex flex-col justify-center items-center'>
            <HomeBtn />
            <div className='mx-auto w-full sm:w-[400px] flex flex-col justify-center'>
                <Logo className='mx-auto' />
                <h1 className='mt-4 font-bold text-3xl sm:text-4xl text-center'>
                    Welcome back
                </h1>
                <form className='flex flex-col justify-center mt-4 gap-1'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        placeholder='name@example.com'
                    />
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' />
                    <button
                        className={cn(
                            buttonVariants(),
                            'w-full text-xl py-6 mt-1'
                        )}
                    >
                        Sign in with email
                    </button>
                </form>
                <a
                    href='/register'
                    className='text-center mt-1.5 text-muted underline'
                >
                    Don't have an account yet? Sign up
                </a>
            </div>
        </div>
    );
};

export default Page;
