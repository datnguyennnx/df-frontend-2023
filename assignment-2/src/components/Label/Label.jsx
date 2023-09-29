import classnames from 'classnames'

export const Label = ({ id, className, children }) => {
  return (
    <label
      className={classnames('block mb-2 text-base font-medium text-gray-700', className)}
      htmlFor={id}
    >
      {children}
    </label>
  )
}