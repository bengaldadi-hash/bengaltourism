# 🌿 Bengal Tourism - Official Portal

A high-performance, responsive travel and tourism platform built with **Next.js 15**, **React 19**, and **GSAP/Framer Motion** for premium animations. This portal enables users to explore destinations, book hotels, and plan tours across the beautiful state of West Bengal.

## ✨ Key Features
- **Dynamic Animations**: Smooth transitions and interactive elements using GSAP and Framer Motion.
- **Hotel & Tour Booking**: Integrated booking system with email notifications.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Admin Dashboard**: (In-progress) For managing bookings and content.

---

## 🚀 Installation & Setup

Follow these steps to set up the project locally:

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Clone the Repository
```bash
git clone https://github.com/bengaldadi-hash/bengaltourism.git
cd bengaltourism
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Environment Variables
Create a `.env.local` file in the root directory and add the following configuration:

```env
# Email Configuration (SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=Bengal Tourism <your-email@gmail.com>

# Tour Booking Configuration
TOUR_EMAIL_HOST=smtp.gmail.com
TOUR_EMAIL_PORT=587
TOUR_EMAIL_USER=your-booking-email@gmail.com
TOUR_EMAIL_PASS=your-app-password
TOUR_EMAIL_FROM=Bengal Tourism Tours <your-booking-email@gmail.com>
```
> **Note**: For Gmail, you must use an **App Password**. Enable 2FA on your Google account and generate it [here](https://myaccount.google.com/apppasswords).

### 5. Run the Development Server
```bash
npm run dev
```
The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Tech Stack
- **Frontend**: Next.js 15 (App Router), Tailwind CSS
- **Logic**: TypeScript, React 19
- **Animations**: GSAP, Framer Motion
- **Utilities**: Lucide React (Icons), Nodemailer (Email handling)

## 📁 Project Structure
- `/app`: Next.js App Router pages and layouts.
- `/components`: Reusable UI components.
- `/public`: Static assets (images, logos).
- `/lib`: Utility functions and API handlers.

---

## 📄 License
This project is proprietary and built for Bengal Tourism.

---
*Developed with ❤️ by Bengal Tourism Team.*
