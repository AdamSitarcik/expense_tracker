import toast from 'react-hot-toast';

export const Test = () => {
    return (
        <button
            onClick={() => {
                toast.success('Huraa');
            }}
        >
            Click me
        </button>
    );
};
