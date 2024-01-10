import { siteConfig } from '@/config/site';
import clsx, { ClassValue } from 'clsx';
import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function debounce(func: any, wait: number) {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: any) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, wait);
    };
}

export function showWarning() {
    return debounce(
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
    );
}
