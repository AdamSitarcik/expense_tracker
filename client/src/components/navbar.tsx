import { getCurrentUser } from '@/lib/session';
import Link from 'next/link';
import { Logo } from './icons';
import { buttonVariants } from './button';
import { cn } from '@/lib/utils';

export const Navbar = async () => {
    const user = await getCurrentUser();

    return (
        <div className='top-0 inset-x-0 h-18 z-10 py-2 bg-background text-foreground px-8 '>
            <div className='container w-full h-full flex items-center justify-center  sm:justify-between gap-2'>
                <Link href='/' className='flex gap-2 items-center flex-col sm:flex-row'>
                    <Logo className='h-16 w-16' />
                    <p className=' text-zinc-700 text-md font-medium  text-2xl'>
                        Expenser
                    </p>
                </Link>
                <button
                    className={cn(
                        buttonVariants({ variant: 'secondary', size: 'lg' }),
                        'hidden sm:block'
                    )}
                >
                    Login
                </button>
            </div>
        </div>
    );
};
