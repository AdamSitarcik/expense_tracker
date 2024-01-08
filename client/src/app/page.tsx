import { buttonVariants } from '@/components/button';
import { GithubIcon } from '@/components/icons';
import { Navbar } from '@/components/navbar';
import { getCurrentUser } from '@/lib/session';
import { cn } from '@/lib/utils';
import type { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = async () => {
    const user = await getCurrentUser();

    return (
        <div className='overflow-hidden'>
            <Navbar />
            <div className='absolute flex flex-col items-center gap-4 text-center  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h1 className='font-bold text-5xl sm:text-6xl  lg:text-7xl text-center'>
                    Welcome to <br />
                    Expenser
                </h1>
                <p className='text-muted text-lg'>
                    An app to track your expenses
                    <br />
                    and analyse them
                </p>
                <div className='flex gap-3'>
                    <Link
                        href='/sign-in'
                        className={cn(buttonVariants({ size: 'lg' }), 'w-36')}
                    >
                        Get started
                    </Link>
                    <Link
                        href='https://github.com/AdamSitarcik/expense_tracker'
                        className={cn(
                            buttonVariants({
                                variant: 'secondary',
                                size: 'lg',
                            }),
                            'w-36'
                        )}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <GithubIcon className='w-6 h-6 fill-primary mr-2' />
                        GitHub
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
