import React from 'react'
import classnames from 'classnames'
import { styles } from "./Button.style"

type ButtonType = 'button' | 'submit' | 'reset' | undefined

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  type?: ButtonType
  disabled?: boolean
  loading?: boolean
  isCompleted?: boolean
  fullWidth?: boolean
  appearance?: string
  size?: string
  font?: string
}

export function Button (props: Props) {

    const { children,
        disabled = false,
        loading = false,
        fullWidth = false,
        appearance = 'default',
        size = "md",
        font = "medium",
        ...rest 
    } = props

    return (
        <button
            className={classnames(`
                ${styles.base}
                ${styles.size[size]}
                ${styles.font[font]}
                ${styles.appearance[appearance]}
                ${fullWidth && styles.fullWidth}
                ${disabled && styles.disabled}
                ${loading && styles.loading}
            `)}
            type={props?.type}
            {...rest}
        >
            {props.children}
        </button>
    )
}