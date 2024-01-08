import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './button';
import { ChevronLeft } from './icons';

export const HomeBtn = () => {
    return (
            <Link
                href='/'
                className={cn(
                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                    'absolute top-4 left-4'
                )}
            >
            <ChevronLeft className='h-2 mr-2' />
            Home
        </Link>
    );
};
