import classnames from 'classnames'
import { styles } from './Button.style'
import React, { forwardRef } from 'react'

export const Button = forwardRef(
    (
        {
            children,
            type = 'button',
            className,
            text = 'small',
            fontweight = 'normal',
            variant = 'primary',
            size = 'normal',
            rounded,
            disabled = false,
            fullWidth = "auto",
            ...props
        }, ref ) => (

            <button
            ref={ref}
            disabled={disabled}
            type={type}
            className={classnames(`
                ${styles.base}
                ${styles.text[text]}
                ${styles.fontweight[fontweight]}
                ${styles.size[size]}
                ${styles.variant[variant]}
                ${styles.fullWidth[fullWidth]}
                ${rounded && styles.rounded}
                ${disabled && styles.disabled}
                ${className}
            `)}
            {...props}
        >
            {children}
        </button>
    ))
