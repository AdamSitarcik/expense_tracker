'use client';

import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='90px'
            height='90px'
            viewBox='0 0 90 90'
        >
            <path
                fill='#FCCC86'
                d='M56.261,66.431c-1.47-2.563-3.696-5.233-7.968-4.5l-12.684,2.297c-4.405,0.36-7.489-3.472-11.775-3.092
	l-7.873,0.699l2.234,25.177l8.675-0.77c6.011-0.533,11.616,4.215,17.193,3.72c6.093-0.532,22.329-11.095,39.189-21.613
	c1.094-0.682,1.495-2.124,0.829-3.228c-3.434-5.7-8.861-7.436-13.304-5.439L56.261,66.431z'
            />
            <path
                fill='#EFAA65'
                d='M39.218,74.325c3.074-0.254,6.209-0.949,9.303-1.896c3.098-0.949,6.164-2.148,9.187-3.473l-0.131,0.484
	l-1.317-3.008l1.932,2.655c0.102,0.14,0.071,0.337-0.069,0.439l-0.061,0.045c-2.685,1.954-5.462,3.815-8.409,5.479
	c-2.947,1.659-6.069,3.129-9.454,4.179l-0.028,0.009c-1.327,0.411-2.737-0.331-3.149-1.659c-0.411-1.327,0.331-2.737,1.659-3.149
	C38.855,74.375,39.043,74.341,39.218,74.325z'
            />
            <path
                fill='#3886C6'
                d='M18.526,90H7.936c-1.293,0-2.341-1.048-2.341-2.341V58.905c0-1.293,1.048-2.341,2.341-2.341h10.59
	c1.293,0,2.341,1.048,2.341,2.341v28.753C20.867,88.952,19.819,90,18.526,90z'
            />
            <circle fill='#FFC843' cx='52.055' cy='26.458' r='26.458' />
            <circle fill='#D38700' cx='52.055' cy='26.458' r='20.578' />
            <path
                fill='#FFC843'
                d='M57.104,34.044c-1.106,0.481-2.283,0.725-3.497,0.725c-2.967,0-5.59-1.482-7.182-3.739h6.889
	c1.104,0,2-0.896,2-2s-0.896-2-2-2h-8.428c-0.041-0.345-0.069-0.695-0.069-1.051s0.028-0.706,0.069-1.051h8.428c1.104,0,2-0.896,2-2
	s-0.896-2-2-2h-6.889c1.593-2.258,4.216-3.739,7.182-3.739c1.214,0,2.391,0.244,3.497,0.725c1.01,0.442,2.19-0.023,2.631-1.037
	s-0.023-2.191-1.037-2.631c-1.612-0.701-3.325-1.057-5.091-1.057c-5.259,0-9.783,3.192-11.746,7.739h-1.65c-1.104,0-2,0.896-2,2
	s0.896,2,2,2h0.66c-0.029,0.348-0.053,0.696-0.053,1.051s0.025,0.704,0.053,1.051h-0.66c-1.104,0-2,0.896-2,2s0.896,2,2,2h1.65
	c1.963,4.547,6.487,7.739,11.746,7.739c1.766,0,3.479-0.355,5.091-1.057c1.014-0.44,1.478-1.618,1.037-2.631
	S58.112,33.601,57.104,34.044z'
            />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
        </svg>
    );
};

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
        >
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
        </svg>
    );
};

export const ChevronLeft = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 8 14'
        >
            <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13'
            />
        </svg>
    );
};
