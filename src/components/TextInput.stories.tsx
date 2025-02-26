import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './TextInput'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'

const FormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof FormSchema>

function TextInputWithForm(
  args: React.ComponentProps<typeof TextInput> & {
    controllerProps: {
      name: keyof FormValues
    }
  },
) {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  return (
    <form className="w-[400px] space-y-4 bg-white p-4">
      <TextInput
        {...args}
        controllerProps={{
          control: form.control,
          name: args.controllerProps.name,
        }}
      />
    </form>
  )
}

const meta = {
  title: 'components/text-input',
  component: TextInputWithForm,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="bg-white p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Name',
    controllerProps: {
      name: 'name',
    },
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    controllerProps: {
      name: 'email',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Email')
    await userEvent.type(input, 'invalid-email')
    await userEvent.tab()
  },
}

export const Multiline: Story = {
  args: {
    label: 'Message',
    multiLine: true,
    controllerProps: {
      name: 'message',
    },
  },
}

export const Required: Story = {
  args: {
    label: 'Required Field',
    controllerProps: {
      name: 'name',
      rules: { required: 'This field is required' },
    },
  },
}

export const WithPlaceholder: Story = {
  args: {
    label: 'With Placeholder',
    controllerProps: {
      name: 'name',
    },
    placeholder: 'Enter your name',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    controllerProps: {
      name: 'name',
    },
    disabled: true,
  },
}
