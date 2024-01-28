'use client';

import { buttonVariants } from '@/components/button';
import { HomeBtn } from '@/components/homeBtn';
import { Logo } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { cn, showWarning } from '@/lib/utils';
import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface ResponseType extends Response {
    status: number;
    message?: string;
    user?: {
        id: string;
        email: string;
        password: string;
    };
    existingUser?: boolean;
}

const Page: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [validPassword, setValidPassword] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [showEmailWarning, setShowEmailWarning] = useState(false);
    const [showPasswordWarning, setShowPasswordWarning] = useState(false);
    const router = useRouter();
    const [test, setTest] = useState('default');

    const validatePassword = (password: string) => {
        let regex = new RegExp(
            siteConfig.passwordRegex(siteConfig.passwordLength)
        );

        if (password.length > 0) {
            setValidPassword(regex.test(password));
        } else setValidPassword(false);
    };

    const validateEmail = (email: string) => {
        let regex = new RegExp(siteConfig.emailRegex());
        if (email.length > 0) {
            setValidEmail(regex.test(email));
        } else setValidEmail(false);
    };

    useEffect(() => {
        setPasswordsMatch(passwordValue == confirmPasswordValue);
    }, [passwordValue, confirmPasswordValue]);

    //function to delay displaying of warnings
    const showWarningMemo = useCallback(showWarning(), []);

    useEffect(() => {
        showWarningMemo(
            emailValue.length == 0,
            emailValue.length > 0 && !validEmail,
            setShowEmailWarning
        );
    }, [emailValue]);

    useEffect(() => {
        showWarningMemo(
            passwordValue.length == 0,
            !validPassword && passwordValue.length > 0,
            setShowPasswordWarning
        );
    }, [passwordValue]);

    const handleSubmit = async () => {
        setIsLoading(true);
        if (validEmail && validPassword && passwordsMatch) {
            const res: ResponseType = await fetch(
                process.env.SERVER_URL + '/api/user',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: emailValue,
                    }),
                }
            );
            setTimeout(() => {
                setTest(res.status.toString());
                // router.push('/sign-in');
            }, 2000);

            if (res.existingUser) {
                setTest(res.existingUser.toString());

                toast.success(
                    'Account with this email already exists. Redirecting...'
                );

                setTimeout(() => {
                    setTest(res.existingUser.toString());
                    // router.push('/sign-in');
                }, 2000);
                return;
            }

            // await signIn('credentials', {
            //     email: emailValue,
            //     password: passwordValue,
            //     redirect: true,
            // });
        }
        setIsLoading(false);
    };

    return (
        <div
            className='container w-full h-screen flex flex-col justify-center items-center'
            suppressHydrationWarning
        >
            <HomeBtn />
            <div className='mx-auto w-full sm:w-[400px] flex flex-col justify-center'>
                <Logo className='mx-auto' />
                <h1 className='mt-4 font-bold text-3xl sm:text-4xl text-center'>
                    New user
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
                        onChange={(e) => {
                            setPasswordValue(e.target.value);
                            validatePassword(e.target.value);
                        }}
                        className={
                            showPasswordWarning
                                ? 'border-red-600 focus-visible:outline-red-600 focus-visible:ring-red-300'
                                : ''
                        }
                        required
                    />
                    <p className='text-red-500 mb-1'>
                        {showPasswordWarning
                            ? `Password must contain at least one uppercase, one lowercase and one numeric character and be at least ${siteConfig.passwordLength} characters long`
                            : ''}
                    </p>

                    <label htmlFor='confirm-password'>Confirm password</label>
                    <input
                        type='password'
                        id='confirm-password'
                        value={confirmPasswordValue}
                        onChange={(e) => {
                            setConfirmPasswordValue(e.target.value);
                        }}
                        className={
                            confirmPasswordValue.length > 0 && !passwordsMatch
                                ? 'border-red-600 focus-visible:outline-red-600 focus-visible:ring-red-300'
                                : ''
                        }
                        required
                    />
                    <p className='text-red-500 mb-1'>
                        {confirmPasswordValue.length > 0 && !passwordsMatch
                            ? 'Passwords do not match'
                            : ''}
                    </p>

                    <button
                        onClick={() => handleSubmit()}
                        className={cn(
                            buttonVariants(),
                            'w-full text-xl py-6 mt-1'
                        )}
                        disabled={
                            !(validEmail && validPassword && passwordsMatch) ||
                            isLoading
                        }
                    >
                        Create new account
                    </button>
                </form>

                <a
                    href='/sign-in'
                    className='text-center mt-1.5 text-muted underline'
                >
                    Already have an account? Sign in
                </a>
                <p>{test}</p>
            </div>
        </div>
    );
};

export default Page;
