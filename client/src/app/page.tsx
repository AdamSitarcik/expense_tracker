import { buttonVariants } from '@/components/button';
import { getCurrentUser } from '@/lib/session';
import { cn } from '@/lib/utils';
import type { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = async () => {
    const user = getCurrentUser();

    return (
        <>
            <h1 className='font-bold text-5xl sm:text-6xl  lg:text-7xl text-center'>
                Welcome to <br />
                Expenser
            </h1>
            <p className=""></p>
            <Link
                href='/sign-in'
                className={cn(buttonVariants({ size: 'lg' }))}
            >
                Sign in
            </Link>
        </>
    );
};

export default Page;
