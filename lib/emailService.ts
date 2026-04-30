import nodemailer from 'nodemailer';
import { logBooking } from './bookingLogger';

// Hotel Booking Email Configuration
const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com';
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || '587');
const EMAIL_USER = process.env.EMAIL_USER || 'bengaltourism@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || '';
const EMAIL_FROM = process.env.EMAIL_FROM || 'Bengal Tourism <bengaltourism@gmail.com>';

// Tour Booking Email Configuration
const TOUR_EMAIL_HOST = process.env.TOUR_EMAIL_HOST || 'smtp.gmail.com';
const TOUR_EMAIL_PORT = parseInt(process.env.TOUR_EMAIL_PORT || '587');
const TOUR_EMAIL_USER = process.env.TOUR_EMAIL_USER || 'booking.bengaltourism@gmail.com';
const TOUR_EMAIL_PASS = process.env.TOUR_EMAIL_PASS || '';
const TOUR_EMAIL_FROM = process.env.TOUR_EMAIL_FROM || 'Bengal Tourism Tours <booking.bengaltourism@gmail.com>';

// Membership Email Configuration
const MEMBER_EMAIL_HOST = process.env.MEMBER_EMAIL_HOST || 'smtp.gmail.com';
const MEMBER_EMAIL_PORT = parseInt(process.env.MEMBER_EMAIL_PORT || '587');
const MEMBER_EMAIL_USER = process.env.MEMBER_EMAIL_USER || 'member.bengaltourism@gmail.com';
const MEMBER_EMAIL_PASS = process.env.MEMBER_EMAIL_PASS || '';
const MEMBER_EMAIL_FROM = process.env.MEMBER_EMAIL_FROM || 'Bengal membership Tours <member.bengaltourism@gmail.com>';

const TO_EMAIL = 'bengaltourism@gmail.com';
const NOTIFICATION_EMAIL = 'hotel.bengaltourism@gmail.com';

// Create transporters
const hotelTransporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_PORT === 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const tourTransporter = nodemailer.createTransport({
  host: TOUR_EMAIL_HOST,
  port: TOUR_EMAIL_PORT,
  secure: TOUR_EMAIL_PORT === 465,
  auth: {
    user: TOUR_EMAIL_USER,
    pass: TOUR_EMAIL_PASS,
  },
});

const memberTransporter = nodemailer.createTransport({
  host: MEMBER_EMAIL_HOST,
  port: MEMBER_EMAIL_PORT,
  secure: MEMBER_EMAIL_PORT === 465,
  auth: {
    user: MEMBER_EMAIL_USER,
    pass: MEMBER_EMAIL_PASS,
  },
});

// Verify transporter connections
hotelTransporter.verify((error: any, success: any) => {
  if (error) {
    console.error('Hotel email service error:', error);
  } else {
    console.log('Hotel email server is ready to send messages');
  }
});

tourTransporter.verify((error: any, success: any) => {
  if (error) {
    console.error('Tour email service error:', error);
  } else {
    console.log('Tour email server is ready to send messages');
  }
});

memberTransporter.verify((error: any, success: any) => {
  if (error) {
    console.error('Membership email service error:', error);
  } else {
    console.log('Membership email server is ready to send messages');
  }
});

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
  transporter?: 'hotel' | 'tour' | 'member';
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    let transporter;
    let from;
    
    switch(data.transporter) {
      case 'tour':
        transporter = tourTransporter;
        from = TOUR_EMAIL_FROM;
        break;
      case 'member':
        transporter = memberTransporter;
        from = MEMBER_EMAIL_FROM;
        break;
      default:
        transporter = hotelTransporter;
        from = EMAIL_FROM;
    }
    
    const mailOptions = {
      from: from,
      to: data.to,
      subject: data.subject,
      html: data.html,
      text: data.text,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', data.to, `via ${data.transporter || 'hotel'} transporter`);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendContactFormEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
  department?: string;
}): Promise<boolean> => {
  // Email to admin
  const adminEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        ${formData.subject ? `<p><strong>Subject:</strong> ${formData.subject}</p>` : ''}
        ${formData.department ? `<p><strong>Department:</strong> ${formData.department}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="background-color: white; padding: 15px; border-left: 4px solid #dc2626; margin-top: 10px;">
          ${formData.message}
        </p>
      </div>
      <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
        This email was sent from the Bengal Tourism contact form.
      </p>
    </div>
  `;

  // Email to user (confirmation)
  const userEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626; text-align: center; margin-bottom: 20px;">
        Thank You for Contacting Bengal Tourism!
      </h2>
      <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #fecaca;">
        <p>Dear ${formData.name},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
        <p>Here's a summary of your message:</p>
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Subject:</strong> ${formData.subject || 'General Inquiry'}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        </div>
      </div>
      <div style="text-align: center; margin: 30px 0;">
        <h3 style="color: #1f2937;">Contact Information</h3>
        <p><strong>Tour Booking:</strong> +91 62897 83779</p>
        <p><strong>Hotel Booking:</strong> +91 7890727339</p>
        <p><strong>Email:</strong> bengaltourism@gmail.com</p>
      </div>
      <p style="color: #6b7280; font-size: 12px; text-align: center; margin-top: 20px;">
        Best regards,<br>
        Bengal Tourism Team
      </p>
    </div>
  `;

  try {
    await Promise.all([
      sendEmail({
        to: TO_EMAIL,
        subject: `New Contact Form: ${formData.subject || 'General Inquiry'} from ${formData.name}`,
        html: adminEmail,
      }),
      sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: `🔔 New Contact Form: ${formData.subject || 'General Inquiry'} from ${formData.name}`,
        html: adminEmail,
      }),
      sendEmail({
        to: formData.email,
        subject: 'Thank you for contacting Bengal Tourism',
        html: userEmail,
      }),
    ]);
    return true;
  } catch (error) {
    console.error('Error sending contact form emails:', error);
    return false;
  }
};

export const sendHotelBookingEmail = async (formData: any): Promise<boolean> => {
  const adminEmail = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hotel Booking Request</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
        .header p { margin: 8px 0 0 0; opacity: 0.9; font-size: 16px; }
        .content { padding: 40px 30px; }
        .section { margin-bottom: 35px; }
        .section-title { color: #1f2937; font-size: 20px; font-weight: 600; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #f3f4f6; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .info-item { background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626; }
        .info-label { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
        .info-value { font-size: 16px; color: #1f2937; font-weight: 600; }
        .highlight-box { background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); border: 1px solid #fecaca; border-radius: 10px; padding: 20px; margin: 25px 0; }
        .highlight-box h3 { color: #dc2626; margin: 0 0 15px 0; font-size: 18px; }
        .footer { background: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb; }
        .footer p { margin: 0; color: #6b7280; font-size: 14px; }
        .badge { display: inline-block; background: #dc2626; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .price-tag { background: #10b981; color: white; padding: 8px 16px; border-radius: 8px; font-weight: 600; display: inline-block; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏨 New Hotel Booking Request</h1>
          <p>A customer has requested a hotel booking</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">👤 Personal Information</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${formData.fullName}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email Address</div>
                <div class="info-value">${formData.email}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone Number</div>
                <div class="info-value">${formData.countryCode} ${formData.phone}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Address</div>
                <div class="info-value">${formData.address}, ${formData.pinCode}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">🏨 Booking Details</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Destination</div>
                <div class="info-value">${formData.destination}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Room Type</div>
                <div class="info-value">${formData.roomType}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Number of Rooms</div>
                <div class="info-value">${formData.noOfRooms}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Check-in Date</div>
                <div class="info-value">${formData.checkIn}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Check-out Date</div>
                <div class="info-value">${formData.checkOut}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Total Nights</div>
                <div class="info-value">${formData.totalNights}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Adults</div>
                <div class="info-value">${formData.adults}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Children</div>
                <div class="info-value">${formData.children}</div>
              </div>
            </div>
            ${formData.preferredHotel ? `
            <div class="info-item" style="margin-top: 15px;">
              <div class="info-label">Preferred Hotel</div>
              <div class="info-value">${formData.preferredHotel}</div>
            </div>
            ` : ''}
            ${formData.specialInfo ? `
            <div class="info-item" style="margin-top: 15px;">
              <div class="info-label">Special Requirements</div>
              <div class="info-value">${formData.specialInfo}</div>
            </div>
            ` : ''}
          </div>

          <div class="highlight-box">
            <h3>💰 Pricing Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Cost per Room</div>
                <div class="info-value price-tag">₹${formData.costPerRoom}/night</div>
              </div>
              <div class="info-item">
                <div class="info-label">Total Nights</div>
                <div class="info-value">${formData.totalNights}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Estimated Cost</div>
                <div class="info-value price-tag">₹${formData.estimatedCost}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Booking Amount</div>
                <div class="info-value price-tag">₹${formData.bookingAmount}</div>
              </div>
            </div>
            <div style="text-align: center; margin-top: 20px;">
              <span class="badge">${formData.paymentType === 'full' ? 'Full Payment' : '50% Advance'}</span>
            </div>
          </div>
        </div>

        <div class="footer">
          <p>📅 Booking received on ${new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p style="margin-top: 8px;">Bengal Tourism Hotel Booking System</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const userEmail = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hotel Booking Confirmation</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
        .header p { margin: 8px 0 0 0; opacity: 0.9; font-size: 16px; }
        .content { padding: 40px 30px; }
        .success-box { background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 1px solid #a7f3d0; border-radius: 10px; padding: 25px; margin-bottom: 30px; text-align: center; }
        .success-box h2 { color: #059669; margin: 0 0 15px 0; font-size: 24px; }
        .success-box p { color: #047857; margin: 0; font-size: 16px; line-height: 1.5; }
        .booking-ref { background: #1f2937; color: white; padding: 15px 25px; border-radius: 8px; font-size: 18px; font-weight: 600; display: inline-block; margin: 15px 0; }
        .summary-box { background: #f9fafb; border-radius: 10px; padding: 25px; margin: 25px 0; }
        .summary-title { color: #1f2937; font-size: 20px; font-weight: 600; margin-bottom: 20px; }
        .summary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .summary-item { padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
        .summary-item:last-child { border-bottom: none; }
        .summary-label { font-size: 14px; color: #6b7280; margin-bottom: 5px; }
        .summary-value { font-size: 16px; color: #1f2937; font-weight: 600; }
        .footer { background: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb; }
        .footer p { margin: 0; color: #6b7280; font-size: 14px; }
        .contact-info { background: #1f2937; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .contact-info p { margin: 5px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏨 Hotel Booking Request Received</h1>
          <p>Thank you for choosing Bengal Tourism</p>
        </div>
        
        <div class="content">
          <div class="success-box">
            <h2>✅ Booking Request Confirmed!</h2>
            <p>Dear ${formData.fullName},</p>
            <p>Thank you for your hotel booking request. We have received your submission and will process it shortly.</p>
            <div class="booking-ref">Booking Reference: HT${Date.now()}</div>
          </div>

          <div class="summary-box">
            <div class="summary-title">📋 Booking Summary</div>
            <div class="summary-grid">
              <div class="summary-item">
                <div class="summary-label">Destination</div>
                <div class="summary-value">${formData.destination}</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Check-in</div>
                <div class="summary-value">${formData.checkIn}</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Check-out</div>
                <div class="summary-value">${formData.checkOut}</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Rooms</div>
                <div class="summary-value">${formData.noOfRooms} ${formData.roomType}</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Guests</div>
                <div class="summary-value">${formData.adults} Adults, ${formData.children} Children</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Booking Amount</div>
                <div class="summary-value" style="color: #dc2626;">₹${formData.bookingAmount}</div>
              </div>
            </div>
          </div>

          <div class="contact-info">
            <p><strong>📞 For any queries, contact us:</strong></p>
            <p>📧 Email: bengaltourism@gmail.com</p>
            <p>📱 Phone: +91 62897 83779</p>
          </div>
        </div>

        <div class="footer">
          <p>⏰ Our team will contact you within 24 hours to confirm your booking.</p>
          <p style="margin-top: 8px;">© 2024 Bengal Tourism. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await Promise.all([
      sendEmail({
        to: TO_EMAIL,
        subject: `Hotel Booking: ${formData.destination} from ${formData.fullName}`,
        html: adminEmail,
        transporter: 'hotel',
      }),
      sendEmail({
        to: 'hotel.bengaltourism@gmail.com',
        subject: `🔔 New Hotel Booking: ${formData.destination} from ${formData.fullName}`,
        html: adminEmail,
        transporter: 'hotel',
      }),
      sendEmail({
        to: formData.email,
        subject: 'Hotel Booking Request Received - Bengal Tourism',
        html: userEmail,
        transporter: 'hotel',
      }),
    ]);
    return true;
  } catch (error) {
    console.error('Error sending hotel booking emails:', error);
    return false;
  }
};

export const sendTourBookingEmail = async (formData: any): Promise<boolean> => {
  const adminEmail = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tour Booking Request</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
        .header p { margin: 8px 0 0 0; opacity: 0.9; font-size: 16px; }
        .content { padding: 40px 30px; }
        .section { margin-bottom: 35px; }
        .section-title { color: #1f2937; font-size: 20px; font-weight: 600; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #f3f4f6; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .info-item { background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #059669; }
        .info-label { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
        .info-value { font-size: 16px; color: #1f2937; font-weight: 600; }
        .highlight-box { background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 1px solid #a7f3d0; border-radius: 10px; padding: 20px; margin: 25px 0; }
        .highlight-box h3 { color: #059669; margin: 0 0 15px 0; font-size: 18px; }
        .footer { background: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb; }
        .footer p { margin: 0; color: #6b7280; font-size: 14px; }
        .badge { display: inline-block; background: #059669; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .price-tag { background: #10b981; color: white; padding: 8px 16px; border-radius: 8px; font-weight: 600; display: inline-block; }
        .promo-badge { background: #f59e0b; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🌍 New Tour Booking Request</h1>
          <p>A customer has requested a tour booking</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">👤 Personal Information</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${formData.fullName}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email Address</div>
                <div class="info-value">${formData.email}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone Number</div>
                <div class="info-value">${formData.countryCode} ${formData.phone}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Address</div>
                <div class="info-value">${formData.address}, ${formData.pinCode}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">🗺️ Tour Details</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Destination</div>
                <div class="info-value">${formData.destination}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Start Date</div>
                <div class="info-value">${formData.checkIn}</div>
              </div>
              <div class="info-item">
                <div class="info-label">End Date</div>
                <div class="info-value">${formData.checkOut}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Total Nights</div>
                <div class="info-value">${formData.totalNights}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Adults</div>
                <div class="info-value">${formData.adults}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Children</div>
                <div class="info-value">${formData.children}</div>
              </div>
            </div>
            ${formData.pickupPlace ? `
            <div class="info-item" style="margin-top: 15px;">
              <div class="info-label">Pickup Place</div>
              <div class="info-value">${formData.pickupPlace}</div>
            </div>
            ` : ''}
            ${formData.dropPlace ? `
            <div class="info-item" style="margin-top: 15px;">
              <div class="info-label">Drop Place</div>
              <div class="info-value">${formData.dropPlace}</div>
            </div>
            ` : ''}
            ${formData.specialInfo ? `
            <div class="info-item" style="margin-top: 15px;">
              <div class="info-label">Special Requirements</div>
              <div class="info-value">${formData.specialInfo}</div>
            </div>
            ` : ''}
          </div>

          <div class="highlight-box">
            <h3>💰 Pricing Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Cost All Adult</div>
                <div class="info-value price-tag">₹${formData.costPerAdult}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Cost All Children</div>
                <div class="info-value price-tag">₹${formData.costPerChildren || '0'}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Estimated Cost</div>
                <div class="info-value price-tag">₹${formData.estimatedCost}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Booking Amount</div>
                <div class="info-value price-tag">₹${formData.bookingAmount}</div>
              </div>
            </div>
            <div style="text-align: center; margin-top: 20px;">
              ${formData.promoCode ? `<span class="promo-badge">Promo: ${formData.promoCode}</span>` : ''}
              ${formData.membershipNo ? `<span class="badge" style="margin-left: 10px;">Member: ${formData.membershipNo}</span>` : ''}
            </div>
          </div>
        </div>

        <div class="footer">
          <p>📅 Tour booking received on ${new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p style="margin-top: 8px;">Bengal Tourism Tour Booking System</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const userEmail = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tour Booking Confirmation</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
        .header p { margin: 8px 0 0 0; opacity: 0.9; font-size: 16px; }
        .content { padding: 40px 30px; }
        .success-box { background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 1px solid #a7f3d0; border-radius: 10px; padding: 25px; margin-bottom: 30px; text-align: center; }
        .success-box h2 { color: #059669; margin: 0 0 15px 0; font-size: 24px; }
        .success-box p { color: #047857; margin: 0; font-size: 16px; line-height: 1.5; }
        .booking-ref { background: #1f2937; color: white; padding: 15px 25px; border-radius: 8px; font-size: 18px; font-weight: 600; display: inline-block; margin: 15px 0; }
        .summary-box { background: #f9fafb; border-radius: 10px; padding: 25px; margin: 25px 0; }
        .summary-title { color: #1f2937; font-size: 20px; font-weight: 600; margin-bottom: 20px; }
        .summary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .summary-item { padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
        .summary-item:last-child { border-bottom: none; }
        .summary-label { font-size: 14px; color: #6b7280; margin-bottom: 5px; }
        .summary-value { font-size: 16px; color: #1f2937; font-weight: 600; }
        .footer { background: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb; }
        .footer p { margin: 0; color: #6b7280; font-size: 14px; }
        .contact-info { background: #1f2937; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .contact-info p { margin: 5px 0; }
        .duration-badge { background: #3b82f6; color: white; padding: 8px 16px; border-radius: 8px; font-weight: 600; display: inline-block; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🌍 Tour Booking Request Received</h1>
          <p>Thank you for choosing Bengal Tourism</p>
        </div>
        
        <div class="content">
          <div class="success-box">
            <h2>✅ Tour Booking Confirmed!</h2>
            <p>Dear ${formData.fullName},</p>
            <p>Thank you for your tour booking request. We have received your submission and will process it shortly.</p>
            <div class="booking-ref">Booking Reference: TT${Date.now()}</div>
          </div>

          <div class="summary-box">
            <div class="summary-title">📋 Tour Summary</div>
            <div class="summary-grid">
              <div class="summary-item">
                <div class="summary-label">Destination</div>
                <div class="summary-value">${formData.destination}</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Duration</div>
                <div class="summary-value duration-badge">${formData.checkIn} to ${formData.checkOut}</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Travelers</div>
                <div class="summary-value">${formData.adults} Adults, ${formData.children} Children</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Total Nights</div>
                <div class="summary-value">${formData.totalNights} Nights</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Booking Amount</div>
                <div class="summary-value" style="color: #059669;">₹${formData.bookingAmount}</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Estimated Total</div>
                <div class="summary-value" style="color: #dc2626;">₹${formData.estimatedCost}</div>
              </div>
            </div>
          </div>

          <div class="contact-info">
            <p><strong>📞 For any queries, contact us:</strong></p>
            <p>📧 Email: bengaltourism@gmail.com</p>
            <p>📱 Phone: +91 62897 83779</p>
          </div>
        </div>

        <div class="footer">
          <p>⏰ Our team will contact you within 24 hours to confirm your tour details.</p>
          <p style="margin-top: 8px;">© 2024 Bengal Tourism. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // First, log the booking to file (this always works)
    logBooking(formData, 'tour');
    
    // Log booking data for backup
    console.log('=== TOUR BOOKING DATA ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Customer:', formData.fullName, formData.email, formData.phone);
    console.log('Destination:', formData.destination);
    console.log('Dates:', formData.checkIn, 'to', formData.checkOut);
    console.log('Travelers:', formData.adults, 'Adults,', formData.children || 0, 'Children');
    console.log('Costs: Booking ₹', formData.bookingAmount, 'Total ₹', formData.estimatedCost);
    console.log('========================');

    // Try to send emails but don't fail if they don't work
    try {
      await Promise.all([
        sendEmail({
          to: TO_EMAIL,
          subject: `Tour Booking: ${formData.destination} from ${formData.fullName}`,
          html: adminEmail,
          transporter: 'tour',
        }),
        sendEmail({
          to: 'booking.bengaltourism@gmail.com',
          subject: `🔔 New Tour Booking: ${formData.destination} from ${formData.fullName}`,
          html: adminEmail,
          transporter: 'tour',
        }),
        sendEmail({
          to: formData.email,
          subject: 'Tour Booking Request Received - Bengal Tourism',
          html: userEmail,
          transporter: 'tour',
        }),
      ]);
      console.log('✅ All emails sent successfully');
    } catch (emailError) {
      console.warn('⚠️ Email sending failed, but booking is saved:', (emailError as Error).message);
      console.log('📁 Booking saved to bookings-log.json file');
      // Continue execution even if emails fail
    }
    
    return true; // Always return true so booking succeeds
  } catch (error) {
    console.error('Error in tour booking process:', error);
    return false;
  }
};

export const sendMembershipEmail = async (formData: any): Promise<boolean> => {
  const adminEmail = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Membership Application</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
        .header p { margin: 8px 0 0 0; opacity: 0.9; font-size: 16px; }
        .content { padding: 40px 30px; }
        .section { margin-bottom: 35px; }
        .section-title { color: #1f2937; font-size: 20px; font-weight: 600; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #f3f4f6; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .info-item { background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #7c3aed; }
        .info-label { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
        .info-value { font-size: 16px; color: #1f2937; font-weight: 600; }
        .highlight-box { background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%); border: 1px solid #d8b4fe; border-radius: 10px; padding: 20px; margin: 25px 0; }
        .highlight-box h3 { color: #7c3aed; margin: 0 0 15px 0; font-size: 18px; }
        .footer { background: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb; }
        .footer p { margin: 0; color: #6b7280; font-size: 14px; }
        .badge { display: inline-block; background: #7c3aed; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .payment-badge { background: #10b981; color: white; padding: 8px 16px; border-radius: 8px; font-weight: 600; display: inline-block; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>👥 New Membership Application</h1>
          <p>A customer has applied for membership</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">👤 Applicant Information</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${formData.firstName} ${formData.lastName}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email Address</div>
                <div class="info-value">${formData.email}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone Number</div>
                <div class="info-value">${formData.phone}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Application Date</div>
                <div class="info-value">${new Date().toLocaleDateString('en-IN')}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">💳 Payment Information</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Payment Mode</div>
                <div class="info-value payment-badge">${formData.paymentMode}</div>
              </div>
              <div class="info-item">
                <div class="info-label">IFSC Code / UPI</div>
                <div class="info-value">${formData.ifscUpi}</div>
              </div>
            </div>
          </div>

          <div class="highlight-box">
            <h3>📋 Application Details</h3>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Application ID</div>
                <div class="info-value">MB${Date.now()}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Status</div>
                <div class="info-value"><span class="badge">Pending Review</span></div>
              </div>
            </div>
            <div style="text-align: center; margin-top: 20px;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">Application submitted on ${new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>

        <div class="footer">
          <p>🔄 Please review and process this membership application</p>
          <p style="margin-top: 8px;">Bengal Tourism Membership System</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const userEmail = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Membership Application Confirmation</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
        .header p { margin: 8px 0 0 0; opacity: 0.9; font-size: 16px; }
        .content { padding: 40px 30px; }
        .success-box { background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%); border: 1px solid #d8b4fe; border-radius: 10px; padding: 25px; margin-bottom: 30px; text-align: center; }
        .success-box h2 { color: #7c3aed; margin: 0 0 15px 0; font-size: 24px; }
        .success-box p { color: #6d28d9; margin: 0; font-size: 16px; line-height: 1.5; }
        .application-ref { background: #1f2937; color: white; padding: 15px 25px; border-radius: 8px; font-size: 18px; font-weight: 600; display: inline-block; margin: 15px 0; }
        .steps-box { background: #f9fafb; border-radius: 10px; padding: 25px; margin: 25px 0; }
        .steps-title { color: #1f2937; font-size: 20px; font-weight: 600; margin-bottom: 20px; text-align: center; }
        .step-item { display: flex; align-items: center; margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #7c3aed; }
        .step-number { background: #7c3aed; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; margin-right: 15px; flex-shrink: 0; }
        .step-text { color: #1f2937; font-size: 15px; }
        .footer { background: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb; }
        .footer p { margin: 0; color: #6b7280; font-size: 14px; }
        .contact-info { background: #1f2937; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .contact-info p { margin: 5px 0; }
        .status-badge { background: #f59e0b; color: white; padding: 8px 16px; border-radius: 8px; font-weight: 600; display: inline-block; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>👥 Membership Application Received</h1>
          <p>Thank you for joining Bengal Tourism</p>
        </div>
        
        <div class="content">
          <div class="success-box">
            <h2>✅ Application Submitted Successfully!</h2>
            <p>Dear ${formData.firstName} ${formData.lastName},</p>
            <p>Thank you for applying to our membership program. We have received your application and will review it shortly.</p>
            <div class="application-ref">Application ID: MB${Date.now()}</div>
            <div class="status-badge">Status: Under Review</div>
          </div>

          <div class="steps-box">
            <div class="steps-title">🔄 Next Steps</div>
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-text">Our team will review your application within 24-48 hours</div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-text">You'll receive payment instructions via email</div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-text">Once payment is confirmed, your membership will be activated</div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-text">Your membership kit will be dispatched to your address</div>
            </div>
          </div>

          <div class="contact-info">
            <p><strong>📞 For any queries, contact us:</strong></p>
            <p>📧 Email: bengaltourism@gmail.com</p>
            <p>📱 Phone: +91 62897 83779</p>
          </div>
        </div>

        <div class="footer">
          <p>⏰ We'll keep you updated on your application status</p>
          <p style="margin-top: 8px;">© 2024 Bengal Tourism. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await Promise.all([
      sendEmail({
        to: TO_EMAIL,
        subject: `Membership Application from ${formData.firstName} ${formData.lastName}`,
        html: adminEmail,
        transporter: 'member',
      }),
      sendEmail({
        to: 'member.bengaltourism@gmail.com',
        subject: `🔔 New Membership Application from ${formData.firstName} ${formData.lastName}`,
        html: adminEmail,
        transporter: 'member',
      }),
      sendEmail({
        to: formData.email,
        subject: 'Membership Application Received - Bengal Tourism',
        html: userEmail,
        transporter: 'member',
      }),
    ]);
    return true;
  } catch (error) {
    console.error('Error sending membership emails:', error);
    return false;
  }
};
