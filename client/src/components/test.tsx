import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const Test = () => {
    const router = useRouter();

    return (
        <button
            onClick={() => {
                toast.success('Huraa');
                router.push('/');
            }}
        >
            Click me
        </button>
    );
};
