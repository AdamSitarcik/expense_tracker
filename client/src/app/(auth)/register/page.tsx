'use client';

import { buttonVariants } from '@/components/button';
import { HomeBtn } from '@/components/homeBtn';
import { Logo } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { cn, debounce } from '@/lib/utils';
import type { NextPage } from 'next';
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
} from 'react';

const Page: NextPage = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [validPassword, setValidPassword] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [showEmailWarning, setShowEmailWarning] = useState(false);
    const [showPasswordWarning, setShowPasswordWarning] = useState(false);

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
    const showWarning = useCallback(
        debounce(
            (
                defaultCond: boolean,
                mainCondition: boolean,
                setter: Dispatch<SetStateAction<boolean>>
            ) => {
                if (defaultCond) {
                    setter(false);
                } else {
                    setter(mainCondition);
                }
            },
            siteConfig.warningDelay
        ),
        []
    );

    useEffect(() => {
        showWarning(
            emailValue.length == 0,
            emailValue.length > 0 && !validEmail,
            setShowEmailWarning
        );
    }, [emailValue]);

    useEffect(() => {
        showWarning(
            passwordValue.length == 0,
            !validPassword && passwordValue.length > 0,
            setShowPasswordWarning
        );
    }, [passwordValue]);

    return (
        <div className='container w-full h-screen flex flex-col justify-center items-center'>
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
                            ? 'Password must contain at least one uppercase, one lowercase and one numeric character and be at least 8 characters long'
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
                        className={cn(
                            buttonVariants(),
                            'w-full text-xl py-6 mt-1'
                        )}
                        disabled={
                            !(validEmail && validPassword && passwordsMatch)
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
            </div>
        </div>
    );
};

export default Page;
