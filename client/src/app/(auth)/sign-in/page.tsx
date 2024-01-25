'use client';

import { buttonVariants } from '@/components/button';
import { HomeBtn } from '@/components/homeBtn';
import { Logo } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { cn, showWarning } from '@/lib/utils';
import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

const Page: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [showEmailWarning, setShowEmailWarning] = useState(false);

    const validateEmail = (email: string) => {
        let regex = new RegExp(siteConfig.emailRegex());
        if (email.length > 0) {
            setValidEmail(regex.test(email));
        } else setValidEmail(false);
    };

    const showWarningMemo = useCallback(showWarning(), []);

    useEffect(() => {
        showWarningMemo(
            emailValue.length == 0,
            emailValue.length > 0 && !validEmail,
            setShowEmailWarning
        );
    }, [emailValue]);

    const handleSubmit = async () => {
        setIsLoading(true);
        if (validEmail) {
            const res = await signIn('credentials', {
                email: emailValue,
                password: passwordValue,
                redirect: false,
            });
        }
        setIsLoading(false);
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
                            showEmailWarning
                                ? 'border-red-600 focus-visible:outline-red-600 focus-visible:ring-red-300'
                                : ''
                        }
                        required
                    />
                    <p className='text-red-500 mb-1'>
                        {showEmailWarning ? 'Invalid email address' : ''}
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
                        onClick={() => handleSubmit()}
                        className={cn(
                            buttonVariants(),
                            'w-full text-xl py-6 mt-1'
                        )}
                        disabled={
                            !(
                                (passwordValue.length > 0 && validEmail) ||
                                isLoading
                            )
                        }
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
