const HowItWorks = () => {
  return (
    <section>
      {" "}
      {/* Container */}{" "}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {" "}
        {/* Heading Div */}{" "}
        <div className="mx-auto w-full max-w-3xl">
          {" "}
          {/* Component */}{" "}
          <div className="text-center">
            <p className="uppercase text-purple1">3 easy steps</p>
            <h2 className="text-3xl font-semibold capitalize md:text-5xl">
              How it{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Works
              </span>
            </h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="text-[#636262]">
                Get Started on the MyFund Platform with the following steps
              </p>
            </div>
          </div>
        </div>{" "}
        {/* How it Works Div */}{" "}
        <div className="mx-auto grid grid-cols-1 gap-4 sm:justify-items-stretch md:grid-cols-3 lg:gap-8">
          {" "}
          {/* How it Works Item */}{" "}
          <div className="relative flex flex-col items-center gap-4 p-8 text-center">
            <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
              <p className="text-xl font-bold">1</p>
            </div>
            <p className="mb-2 text-xl font-bold font-proxima">
              Create Account
            </p>
            <p className="text-sm text-[#636262]">
              Create an account with your email and a password you can remember
              on the mobile app or web app
            </p>
          </div>{" "}
          {/* How it Works Item */}{" "}
          <div className="relative flex flex-col items-center gap-4 p-8 text-center">
            <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
              <p className="text-xl font-bold">2</p>
            </div>
            <p className="mb-2 text-xl font-bold font-proxima">
              Make a Quicksave
            </p>
            <p className="text-sm text-[#636262]">
              Using cards or transfers, you can make savings that gain interest
              over time.
            </p>
          </div>{" "}
          {/* How it Works Item */}{" "}
          <div className="relative flex flex-col items-center gap-4 p-8 text-center">
            <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
              <p className="text-xl font-bold">3</p>
            </div>
            <p className="mb-2 text-xl font-proxima font-bold">Done!</p>
            <p className="text-sm text-[#636262]">
              Its just that simple. Join the MyFund Family now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
