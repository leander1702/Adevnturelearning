import sub from '../assets/sub.svg';

function Offers() {
  return (
    <div className="flex justify-center items-center my-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-8 px-6 sm:px-10 w-full max-w-6xl rounded-xl relative overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Image Section */}
          <div className="lg:w-1/4 flex justify-center">
            <img 
              src={sub} 
              alt="Subscription offer" 
              className="w-48 sm:w-56 lg:w-full max-w-xs"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-2/4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Join and Get Amazing Discounts
            </h2>
            <p className="text-blue-100 text-lg lg:text-base">
              Become a Member and Get Exclusive Offers and Savings
            </p>
          </div>

          {/* Subscription Form */}
          <div className="w-full lg:w-2/4">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                aria-label="Email input for subscription"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-white/90 backdrop-blur-sm outline-none rounded-lg focus:ring-2 focus:ring-white focus:ring-opacity-50"
                name="email"
                type="email"
              />
              <button 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg px-6 py-3 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="text-blue-100 text-xs mt-2 text-center sm:text-left">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-500/20"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-400/20"></div>
      </div>
    </div>
  );
}

export default Offers;