import { NextRequest, NextResponse } from 'next/server';
import { sendMembershipEmail } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      firstName,
      lastName,
      email,
      phone,
      paymentMode,
      ifscUpi,
    } = body;

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'paymentMode', 'ifscUpi'];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (basic validation)
    if (phone.length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Send emails
    const emailSent = await sendMembershipEmail({
      firstName,
      lastName,
      email,
      phone,
      paymentMode,
      ifscUpi,
    });

    if (emailSent) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Membership application submitted successfully. You will receive a confirmation email shortly.' 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send application email. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Membership API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
