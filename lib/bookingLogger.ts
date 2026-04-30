import fs from 'fs';
import path from 'path';

// Simple booking logger that saves to file
export const logBooking = (formData: any, type: 'tour' | 'hotel' | 'membership' = 'tour') => {
  const timestamp = new Date().toISOString();
  const bookingData = {
    timestamp,
    type,
    customer: {
      name: formData.fullName || `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.countryCode ? `${formData.countryCode} ${formData.phone}` : formData.phone,
      address: formData.address,
      pinCode: formData.pinCode
    },
    booking: {
      destination: formData.destination || formData.hotelName || 'Membership',
      dates: formData.checkIn && formData.checkOut ? {
        checkIn: formData.checkIn,
        checkOut: formData.checkOut
      } : null,
      travelers: {
        adults: formData.adults || 1,
        children: formData.children || 0
      },
      costs: {
        bookingAmount: formData.bookingAmount || formData.amount || 0,
        estimatedCost: formData.estimatedCost || 0,
        totalNights: formData.totalNights || 0
      },
      paymentType: formData.paymentType || 'Not specified'
    },
    additional: {
      specialInfo: formData.specialInfo || '',
      promoCode: formData.promoCode || '',
      membershipNo: formData.membershipNo || '',
      pickupPlace: formData.pickupPlace || '',
      dropPlace: formData.dropPlace || ''
    }
  };

  // Save to file
  const logFilePath = path.join(process.cwd(), 'bookings-log.json');
  
  try {
    let existingLogs = [];
    if (fs.existsSync(logFilePath)) {
      const fileContent = fs.readFileSync(logFilePath, 'utf8');
      existingLogs = JSON.parse(fileContent);
    }
    
    existingLogs.push(bookingData);
    
    // Keep only last 100 bookings
    if (existingLogs.length > 100) {
      existingLogs = existingLogs.slice(-100);
    }
    
    fs.writeFileSync(logFilePath, JSON.stringify(existingLogs, null, 2));
    
    
    if (bookingData.booking.dates) {
      console.log(`Dates: ${bookingData.booking.dates.checkIn} to ${bookingData.booking.dates.checkOut}`);
    }
  
    
    return true;
  } catch (error) {
    console.error('Error saving booking log:', error);
    return false;
  }
};

// Function to get recent bookings
export const getRecentBookings = (count: number = 10) => {
  const logFilePath = path.join(process.cwd(), 'bookings-log.json');
  
  try {
    if (fs.existsSync(logFilePath)) {
      const fileContent = fs.readFileSync(logFilePath, 'utf8');
      const allBookings = JSON.parse(fileContent);
      return allBookings.slice(-count);
    }
    return [];
  } catch (error) {
    console.error('Error reading booking logs:', error);
    return [];
  }
};
