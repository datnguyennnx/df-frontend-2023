import React from 'react'
import cx from 'clsx'
import { styles } from './Button.style'

type ButtonType = 'button' | 'submit' | undefined
type ButtonUse = `primary` | `secondary` | `link` | `default`
type ButtonFont = `normal` | `medium` | `semibold` | `bold`
type ButtonSize = `xl` | `lg` | `md` | `sm`
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  type?: ButtonType
  disabled?: boolean
  loading?: boolean
  isCompleted?: boolean
  fullWidth?: boolean
  appearance?: ButtonUse
  size?: ButtonSize
  font?: ButtonFont
  className?: string
}

export function Button(props: Props) {
  const {
    children,
    disabled = false,
    loading = false,
    fullWidth = false,
    appearance = 'default',
    size = 'md',
    font = 'medium',
    className,
    ...rest
  } = props

  return (
    <button
      className={cx(
        styles.base,
        styles.size[size],
        styles.font[font],
        styles.appearance[appearance],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        loading && styles.loading,
        className,
      )}
      type={props?.type}
      {...rest}
    >
      {props.children}
    </button>
  )
}
