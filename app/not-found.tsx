import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      {" "}
      {/* Container */}{" "}
      <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {" "}
        {/* Component */}{" "}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <img
            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
            alt=""
            className="mx-auto mb-8 inline-block h-56 w-56 flex-none object-cover"
          />
          <h1 className="mb-4 text-4xl font-proxima font-bold md:text-6xl">
            404 Error
          </h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-[#636262] sm:text-base md:mb-6 lg:mb-8">
            Commodo, consequat turpis placerat ultrices sapien, tortor
            tincidunt. Sit quisque est metus auctor sed turpis lectus quis.
          </p>
          <Link
            href="/"
            className="inline-block items-center bg-purple1 px-8 py-4 text-center font-semibold text-white"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
