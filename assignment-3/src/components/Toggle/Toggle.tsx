import React, { ReactNode } from "react"
import classnames from "classnames"
import { styles } from "./Toggle.style"


interface Props { 
    children?: ReactNode
    name?: string
    handleToggle?: () => void 
}

export function Toggle ({children, name, handleToggle }: Props) { 
    return ( 
        <div className="flex mx-2">
            <label className="relative inline-flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"  htmlFor={name} >
                <input
                    className="sr-only peer"
                    id={name}
                    type="checkbox"
                    onClick={handleToggle}
                />
                <div className={classnames(`${styles.toggle}`)} onChange={handleToggle} />
                <label className="text-md font-semibold" htmlFor={name}> {children} </label>
            </label>
        </div>
    )
}