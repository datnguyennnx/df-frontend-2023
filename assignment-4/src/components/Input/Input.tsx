import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import cx from 'clsx'
import { styles } from './Input.style'

type InputType = 'text' | 'number' | 'email' | 'password'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean | string
  wrapperClass?: string
  className?: string
  fullWidth?: boolean
  required?: boolean
  type?: InputType
  value?: string | number | undefined
  sizeText?: string
  placeholder?: string
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input(props: InputProps) {
  const {
    label,
    required = false,
    className,
    type = 'text',
    placeholder,
    disabled = false,
    onChange,
    ...rest
  } = props
  return (
    <div className="flex flex-col space-x-2 space-y-2">
      {label && (
        <label className={cx(`${styles.label}`)} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        aria-invalid={props.error ? 'true' : 'false'}
        className={cx(`${styles.base}`)}
        disabled={disabled}
        id={label}
        placeholder={placeholder}
        required={required}
        type={type}
        value={props.value === undefined ? '' : props.value}
        onChange={onChange}
        {...rest}
      />
      {props.error && (
        <p className="text-sm text-pink-600 italic font-semibold">
          {props.error}
        </p>
      )}
    </div>
  )
}
