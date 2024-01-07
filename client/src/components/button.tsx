import { cva } from 'class-variance-authority';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-accent/70 hover:border-accent border',
                outline:
                    'border border-accent hover:bg-accent/60 text-accent-foreground',
            },
            size: {
                default: 'h-10 py-2 px-4 w-32 h-10',
                sm: 'h-9 px-3 rounded-md w-26 h-9',
                lg: 'h-11 px-8 rounded-md w-36 h-11',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export { buttonVariants };
