import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/16/solid";

const Footer = () => {
  return (
    <footer className="block">
      {" "}
      {/* Container */}{" "}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        {" "}
        {/* Component */}{" "}
        <div className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
          <div className="max-[767px]: w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial">
            <h2 className="text-3xl font-bold md:text-5xl">
              Grow your Financial Intelligence with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                MyFund
              </span>{" "}
            </h2>
          </div>
          <div className="max-[767px]: max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:mt-8">
            <div className="mb-4 flex max-w-[272px] items-start justify-start">
              <MapPinIcon className="mr-3 inline-block h-10 fill-purple1" />
              <p className="text-[#636262] max-[479px]:text-sm">
                {" "}
                Lagos,Nigeria{" "}
              </p>
            </div>
            <div className="mb-4 flex max-w-[272px] items-start justify-start">
              <EnvelopeIcon className="mr-3 inline-block h-8 w-8 fill-purple1" />
              <p className="text-[#636262] max-[479px]:text-sm">
                {" "}
                info@myfundmobile.com{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-14 mt-16 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]"></div>
        <div className="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
          <div className="max-[991px]: text-center font-semibold max-[991px]:py-1 max-[479px]:mb-4 sm:text-center">
            <a
              href="#"
              className="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12"
            >
              About
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12"
            >
              Features
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12"
            >
              Works
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12"
            >
              Support
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12"
            >
              Help
            </a>
          </div>
          <div className="max-[991px]:flex-none">
            <p className="text-[#636262] max-[479px]:text-sm">
              {" "}
              © Copyright {new Date().getFullYear()}. All rights reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
