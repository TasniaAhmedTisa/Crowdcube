
const Extra = () => {
    return (
    <div>
      {/* Success Stories Section */}
      <section id="success-stories" className="py-12 bg-gray-100 m-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-gradient-to-b from-cyan-800 text-black shadow-lg rounded-lg">
              <figure>
                <img
                  src="success1.jpg"
                  alt="Success Story 1"
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-bold ">
                  Innovative App Funded
                </h3>
                <p>Raised $50,000 to launch a game-changing mobile app.</p>
              </div>
            </div>
            <div className="card bg-gradient-to-b from-cyan-800 text-black shadow-lg rounded-lg">
              <figure>
                <img
                  src="success2.jpg"
                  alt="Success Story 2"
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-bold">
                  Community Garden
                </h3>
                <p>Successfully raised $10,000 to build a community garden.</p>
              </div>
            </div>
            <div className="card bg-gradient-to-b from-cyan-800 text-black shadow-lg rounded-lg">
              <figure>
                <img
                  src="success3.jpg"
                  alt="Success Story 3"
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-bold">
                  Sustainable Fashion Brand
                </h3>
                <p>Raised $25,000 to start an eco-friendly fashion line.</p>
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