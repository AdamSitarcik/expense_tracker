'use client';

import { buttonVariants } from '@/components/button';
import { HomeBtn } from '@/components/homeBtn';
import { Logo } from '@/components/icons';
import { cn } from '@/lib/utils';
import type { NextPage } from 'next';
import { useState } from 'react';

const Page: NextPage = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    const validateEmail = (email: string) => {
        if (email.length > 0)
            setValidEmail(
                /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,5}$/.test(
                    email
                )
            );
        else setValidEmail(false);
    };

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
                        value={emailValue}
                        onChange={(e) => {
                            setEmailValue(e.target.value);
                            validateEmail(e.target.value);
                        }}
                        className={
                            emailValue.length > 0 && !validEmail
                                ? 'border-red-600 focus-visible:outline-red-600 focus-visible:ring-red-300'
                                : ''
                        }
                        required
                    />
                    <p className='text-red-500 mb-1'>
                        {emailValue.length > 0 && !validEmail
                            ? 'Invalid email address'
                            : ''}
                    </p>

                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        required
                    />
                    <button
                        className={cn(
                            buttonVariants(),
                            'w-full text-xl py-6 mt-1'
                        )}
                        disabled={!(passwordValue.length > 0 && validEmail)}
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
