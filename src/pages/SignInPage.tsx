import React from 'react';
import SignInForm from '../components/auth/SignInForm';
import AuthLayout from '../components/auth/AuthLayout';

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}
