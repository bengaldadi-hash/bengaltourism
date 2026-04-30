import { NextRequest, NextResponse } from 'next/server';
import { sendHotelBookingEmail } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      fullName,
      email,
      countryCode,
      phone,
      address,
      pinCode,
      destination,
      roomType,
      noOfRooms,
      checkIn,
      checkOut,
      adults,
      children,
      specialInfo,
      preferredHotel,
      costPerRoom,
      totalNights,
      estimatedCost,
      bookingAmount,
      paymentType,
      promoCode,
      membershipNo,
    } = body;

    // Validate required fields
    const requiredFields = [
      'fullName', 'email', 'phone', 'address', 'pinCode', 
      'destination', 'roomType', 'noOfRooms', 'checkIn', 
      'checkOut', 'adults', 'costPerRoom', 'totalNights', 
      'estimatedCost', 'bookingAmount', 'paymentType'
    ];

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
    const emailSent = await sendHotelBookingEmail({
      fullName,
      email,
      countryCode,
      phone,
      address,
      pinCode,
      destination,
      roomType,
      noOfRooms,
      checkIn,
      checkOut,
      adults,
      children,
      specialInfo,
      preferredHotel,
      costPerRoom,
      totalNights,
      estimatedCost,
      bookingAmount,
      paymentType,
      promoCode,
      membershipNo,
    });

    if (emailSent) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Hotel booking request submitted successfully. You will receive a confirmation email shortly.' 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send booking email. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Hotel booking API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
