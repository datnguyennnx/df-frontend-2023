export const styles = {
    base: 'relative font-medium duration-200 whitespace-nowrap px-4',
    disabled: 'text-gray-800 opacity-80 cursor-not-allowed focus:ring-0',
    size: { 
        xl: 'text-lg',
        lg: 'text-base',
        md: 'text-sm',
        sm: 'text-xs'
    },
    loading: {
        true: 'cursor-default',
    },
    font: { 
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold'
    },
    appearance: {
        primary: ' rounded-md p-2 border focus:outline-none focus:ring-2 focus:ring-offset-2 border-transparent text-white bg-pink-600 hover:bg-pink-700 focus:ring-pink-500',
        secondary: 'rounded-md p-2 border focus:outline-none focus:ring-2 focus:ring-offset-2 border-transparent text-white bg-gray-500 hover:bg-gray-60 focus:ring-gray-400',
        link: 'text-pink-600 hover:text-pink-700 focus:ring-pink-500',
        default: ' rounded-md p-2 border focus:outline-none focus:ring-2 focus:ring-offset-2 border-gray-400 text-gray-700 bg-white hover:bg-gray-50 focus:ring-pink-500'
    }, 
    fullWidth: {
        true: "flex w-full",
    }
}