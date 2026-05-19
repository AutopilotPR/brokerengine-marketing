export default function Login() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
          <div className="text-center mb-8">
            <p className="font-bold text-2xl text-black">BrokerEngine</p>
          </div>

          <h1 className="text-3xl font-bold text-black mb-8 text-center">
            Welcome back
          </h1>

          <p className="text-sm text-gray-500 text-center mb-6">
            Log in to your account on the app.
          </p>

          <a
            href="https://app.brokerengine.ai/login"
            className="block w-full px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition mb-6 text-center"
          >
            Sign in
          </a>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <p className="text-sm text-gray-500">or</p>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <a href="https://app.brokerengine.ai/signup" className="text-black font-medium hover:underline">
                Request access
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
