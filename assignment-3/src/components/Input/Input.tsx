import React, { ChangeEvent, InputHTMLAttributes } from "react";
import classnames from "classnames"
import { styles } from "./Input.style"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean | string
  wrapperClass?: string
  className?: string
  fullWidth?: boolean
  required ?: boolean 
  type?: 'text' | 'number' | 'email' | 'password'
  value?: string | number
  sizeText?: string
  placeholder?: string
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input ( props : InputProps ) {
    const {
        label,
        required = false,
        className,
        type = "text", 
        placeholder,
        sizeText = "md",
        disabled = false, 
        onChange,
        ...rest
    } = props
    return (
        <div className="flex flex-col space-x-2 space-y-2">
            {label && <label className={classnames(`${styles.label}`)} htmlFor={label}>{label}</label>}
            <input
                aria-invalid={props.error ? "true" : "false"}
                className={classnames(`${styles.base} ${styles.size[sizeText]}`)}
                disabled={disabled}
                id={label}
                placeholder={placeholder}
                required={required}
                type={type}
                value={props.value}
                onChange={onChange}
                {...rest}
            />
            {props.error && <p className="text-sm text-pink-600 italic font-semibold">{props.error}</p>}
        </div>
    )
}
