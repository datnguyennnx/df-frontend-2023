import { Label } from "../Label"
import { styles } from "./Input.style"
import classnames from 'classnames'

export const Input = (props) => { 
  const {
    onChange,
    isRequired = false,
    disabled = false,
    placeholder,
    fullWidth = "auto",
    size = 'normal',
    label,
    errorText = '',
    error = false,
    className,
    ...rest
  } = props
    return(
        <div className="my-4">
          {label && (
            <Label id={label}>
              {label} {isRequired && '*'}
            </Label>
          )}
          
          <input
              id={label}
              required={isRequired}
              placeholder={placeholder}
              onChange={onChange}
              {...rest}
              className={classnames(`
                ${styles.base}
                ${styles.state[isRequired]}
                ${styles.fullWidth[fullWidth]}
                ${styles.size[size]}
                ${disabled && styles.state.disabled}
                ${className}
            `)}
            />

          {error && <p className="mt-2 text-sm text-pink-700">{errorText}</p>}
          </div>
    )
}