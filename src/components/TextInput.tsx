import { useId } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

interface TextInputProps<T extends FieldValues>
  extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  controllerProps: UseControllerProps<T>
  multiLine?: boolean
}

export function TextInput<T extends FieldValues>({
  label,
  controllerProps,
  multiLine = false,
  ...props
}: TextInputProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController(controllerProps)
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      {multiLine ? (
        <textarea
          id={id}
          {...field}
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        />
      ) : (
        <input
          type="text"
          id={id}
          {...field}
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        />
      )}

      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-6 origin-left scale-75 text-base/6 font-semibold text-neutral-500 transition-all duration-200"
      >
        {label}
      </label>
      {error?.message && (
        <p className="absolute bottom-2 right-6 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  )
}
