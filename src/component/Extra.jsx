
const Extra = () => {
    return (
    <div>
      {/* Success Stories Section */}
      <section id="success-stories" className="py-12 bg-gray-100 m-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 gap-8 lg:px-20">
            <div className="hero-content flex-col lg:flex-row shadow-md rounded-lg  bg-gradient-to-r from-cyan-600">
              <img
                src="https://i.ibb.co/GdDnxCF/slider4.jpg"
                alt="Innovative App"
                className="rounded-t-lg w-3/5 h-[350px] object-cover"
              />
              <div className="hero-content flex-col items-center p-6">
                <h3 className="text-2xl font-bold mb-4">Innovative App Funded</h3>
                <p className="text-gray-700 mb-6">
                  Raised $50,000 to launch a game-changing mobile app.
                </p>
                <button className="btn bg-slate-700 text-white">Read More</button>
              </div>
            </div>

            <div className="hero-content flex-col lg:flex-row-reverse shadow-md rounded-lg  bg-gradient-to-l from-cyan-600">
              <img
                src="https://i.ibb.co/fGZR6Ht/garden.jpg"
                alt="Community Garden"
                className="rounded-t-lg w-3/5 h-[350px] object-cover mx-auto"
              />
              <div className="hero-content flex-col  items-center p-6">
                <h3 className="text-2xl font-bold mb-4">Community Garden</h3>
                <p className="text-gray-700 mb-6">
                  Successfully raised $10,000 to build a community garden.
                </p>
                <button className="btn bg-slate-700 text-white">Read More</button>
              </div>
            </div>

            <div className="hero-content flex-col lg:flex-row shadow-md rounded-lg  bg-gradient-to-r from-cyan-600">
              <img
                src="https://i.ibb.co/T00gWT5/fashion.png"
                alt="Sustainable Fashion"
                className="rounded-t-lg w-3/5 h-[350px] object-cover"
              />
              <div className="hero-content flex-col items-center p-6 ">
                <h3 className="text-2xl font-bold mb-4">Sustainable Fashion Brand</h3>
                <p className="text-gray-700 mb-6">
                  Raised $25,000 to start an eco-friendly fashion line.
                </p>
                <button className="btn bg-slate-700 text-white">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 lg:px-40 bg-gradient-to-t from-cyan-600 text-black flex items-center justify-center m-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0">
            <div className="text-center">
              <div className="bg-slate-800 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mt-4">Create a Campaign</h3>
              <p className="mt-2 text-gray-600">
                Set your goals and share your story to start your campaign.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-800 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mt-4">Share with Community</h3>
              <p className="mt-2 text-gray-600">
                Spread the word through social media and your network.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-800 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mt-4">Receive Funding</h3>
              <p className="mt-2 text-gray-600">
                Collect the funds and bring your idea to life!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


            

export default Extra;