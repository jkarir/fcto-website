import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Create schema for request validation
const UnsubscribeSchema = z.object({
  email: z.string().email('Invalid email format'),
})

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)
const AUDIENCE_ID = process.env.BLOG_AUDIENCE_ID as string

/**
 * Handles unsubscribe requests from newsletter subscribers
 */
export async function GET(request: NextRequest) {
  try {
    // Get the email from the query string
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    // Check if email parameter is missing
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email parameter is missing' },
        { status: 400 },
      )
    }

    // Validate the request
    const result = UnsubscribeSchema.safeParse({ email })
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 },
      )
    }

    // Remove the contact from the Resend audience
    await resend.contacts.remove({
      audienceId: AUDIENCE_ID,
      email: result.data.email,
    })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Successfully unsubscribed from newsletter',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Unsubscribe error:', error)

    // Return error response
    return NextResponse.json(
      {
        success: false,
        error: 'An error occurred while processing your request',
      },
      { status: 500 },
    )
  }
}
