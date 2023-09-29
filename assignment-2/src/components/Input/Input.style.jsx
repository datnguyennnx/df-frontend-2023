// export const baseStyle = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export const styles = { 
    base: 'h-auto focus:outline-none bg-transparent border rounded-md appearance-none bg-white placeholder-gray-700 text-md appearance-none relative inline-flex focus:border-2 focus:border-pink-600',
    state: {
        normal: 'placeholder-gray-400 border-gray-300 focus:ring-gray-400',
        error: 'border-pink-600 focus:ring-pink-600',
        valid: 'border-yellow-600 focus:ring-yellow-600',
        disabled: 'cursor-not-allowed bg-gray-100 shadow-inner text-gray-400'
    },
    fullWidth: {
        full: "w-full",
        auto: "w-auto",
        fit: "w-fit"
    }, 
    size: {
        small: 'px-2 py-1',
        normal: 'px-4 py-2',
        large: 'px-8 py-3'
    },
    rounded: {
        none: null,
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
    }
}