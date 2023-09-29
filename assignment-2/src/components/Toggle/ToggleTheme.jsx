import { useEffect, useState } from "react"


export const ToggleTheme = () => { 
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark")
    
    useEffect(() => { 
        switch (theme) {
            case 'dark': 
                document.documentElement.classList.add("dark")
                localStorage.setItem("theme", "dark")
                break
            case 'light': 
                document.documentElement.classList.remove("dark")
                localStorage.setItem("theme", "light")
                break
            default:
                localStorage.removeItem("theme")
                break
        }
    }, [theme])

    function handleToggle() { 
        setTheme(theme === "dark" ? "light" : "dark")
    }
 
    return ( 
        <div className="flex">
            <label className="relative inline-flex items-center cursor-pointer mx-4">
            <input type="checkbox" value="" className="sr-only peer" onChange={handleToggle} />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-pink-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-600"></div>
            <span className="ml-3 text-md font-medium text-gray-900 dark:text-gray-300"> {localStorage.getItem("theme") === "light"? "Dark" : "Light"} Theme</span>
            </label>
        </div>
    )
}