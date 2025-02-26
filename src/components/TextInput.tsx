import { useId } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

interface TextInputProps<T extends FieldValues>
  extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  controllerProps: UseControllerProps<T>
}

export function TextInput<T extends FieldValues>({
  label,
  controllerProps,
  ...props
}: TextInputProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController(controllerProps)
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...field}
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
      {error?.message && (
        <p className="absolute right-6 top-3/4 -mt-3 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  )
}
