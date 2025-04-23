import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '2rem' }}>
      <h1>Login</h1>
      {/* TODO: Add your login form here */}
      <p>This is a placeholder login page. Replace this with your login form.</p>
      <Link href="/auth/register">Don't have an account? Register</Link>
    </div>
  );
}
