export const siteConfig = {
    warningDelay: 1000, // in ms
    passwordLength: 8,
    passwordRegex: (length: number) => {
        return `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{${length},}$`;
    },
    emailRegex: () => '^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9._-]+.[a-zA-Z]{2,5}$',
};
