export const styles = {
    base: 'focus:outline-none transition ease-in-out duration-300 whitespace-nowrap',
    disabled: 'opacity-70 cursor-not-allowed',
    rounded: 'rounded-md',
    text: { 
        small: 'text-base',
        normal: 'text-md',
        large: 'text-lg'
    },
    fontweight: { 
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold'
    },
    size: {
        small: 'px-2 py-1',
        normal: 'px-4 py-2',
        large: 'px-8 py-3'
    },
    variant: {
        primary: 'border-transparent text-white bg-pink-600 hover:bg-pink-700 focus:ring-2 focus:ring-pink-500',
        secondary: 'border-transparent text-white bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-gray-400',
    }, 
    fullWidth: {
        full: "w-full",
        auto: "w-auto",
        fit: "min-w-fit"
    }
}