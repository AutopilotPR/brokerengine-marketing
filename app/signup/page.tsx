export default function Signup() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
          <div className="text-center mb-8">
            <p className="font-bold text-2xl text-black">BrokerEngine</p>
          </div>

          <h1 className="text-3xl font-bold text-black mb-8 text-center">
            Create your account
          </h1>

          <p className="text-sm text-gray-500 text-center mb-6">
            You&apos;ll be taken to the app to complete sign up.
          </p>

          <a
            href="https://app.brokerengine.ai/signup"
            className="block w-full px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition mb-6 text-center"
          >
            Create account
          </a>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <p className="text-sm text-gray-500">or</p>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="https://app.brokerengine.ai/login" className="text-black font-medium hover:underline">
                Sign in
              </a>
            </p>
          </div>

          <p className="text-xs text-gray-500 text-center">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-black hover:underline">Terms</a>{' '}
            and{' '}
            <a href="#" className="text-black hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
