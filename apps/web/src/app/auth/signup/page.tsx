import { SignUpForm } from '@/components/auth/SignUpForm'
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium text-blue-500 hover:text-blue-400">
              Login now
            </Link>
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}