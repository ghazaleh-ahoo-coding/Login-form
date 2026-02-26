Here is the README text:

```md
# Login & Register Forms (React + Vite)

Simple login and registration forms using React Hook Form and Yup validation. Includes a background image and a glass-style form container.

## Features
- Login form with email + password validation
- Register form with full name, email, password, confirm password, and terms checkbox
- Yup schemas with React Hook Form resolver
- Inline validation errors and success message
- Glassmorphism-style form container and background image

## Validation Rules
### Login
- Email: required, valid email
- Password: required, minimum 6 characters

### Register
- Full Name: required, minimum 3 characters
- Email: required, valid email
- Password: required, minimum 8 characters, at least 1 number
- Confirm Password: required, must match Password
- Terms & Conditions: must be checked

## Tech Stack
- React
- Vite
- React Hook Form
- Yup
- @hookform/resolvers

## Getting Started
Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure
```
login/
  src/
    components/
      LoginForm.jsx
      RegisterForm.jsx
    validation/
      loginSchema.js
      registerSchema.js
    App.jsx
    App.css
    index.css
```
```
