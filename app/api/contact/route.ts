import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, message, subject, department } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, message' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send emails
    const emailSent = await sendContactFormEmail({
      name,
      email,
      phone,
      message,
      subject,
      department,
    });

    if (emailSent) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Contact form submitted successfully. You will receive a confirmation email shortly.' 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
