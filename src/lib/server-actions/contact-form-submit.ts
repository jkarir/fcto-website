'use server'

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const company = formData.get('company')
  const message = formData.get('message')

  console.log({ name, email, company, message })
}
