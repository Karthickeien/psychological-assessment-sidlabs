# Psychological Assessment Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=flat&logo=razorpay&logoColor=white)](https://razorpay.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
![Maintenance](https://img.shields.io/maintenance/yes/2024)

## 🔗 Deployed Link
[Psychological Assessment Platform](https://psychological-assessment-sidlabs.vercel.app/)


## 🛠️ Technology Stack

### Core Technologies
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=white)

### Development Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Razorpay account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Karthickeien/psychological-assessment-sidlabs.git
cd psychological-assessment
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your Firebase and Razorpay credentials

4. Start the development server:
```bash
npm run dev
```

## 📝 Project Structure

```
psychological-assessment/
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   ├── HeroBanner/
│   │   ├── HeroBanner.jsx
│   │   └── HeroBanner.css
│   ├── SearchBar/
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.css
│   ├── AssessmentList/
│   │   ├── AssessmentList.jsx
│   │   ├── AssessmentCard.jsx
│   │   └── AssessmentList.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── styles/
│   └── global.css
├── App.jsx
├── main.jsx
└── index.html
```

## 🔒 Security Features

- Secure user authentication via Firebase
- Protected assessment routes
- Encrypted data transmission
- HIPAA-compliant data handling
- Secure payment processing

## 📊 Integration Points

### Firebase Configuration
```javascript
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  //
};
```

### Razorpay Integration
```javascript
const options = {
  key: process.env.RAZORPAY_KEY_ID,
  amount: amount * 100,
  currency: "INR",
  // 
};
```

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
