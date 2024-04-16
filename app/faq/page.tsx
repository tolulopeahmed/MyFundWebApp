import Link from "next/link";
import FAQs from "@/data/faqs";
import { ReactElement } from "react";

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="mb-6 max-w-4xl border-b-[2px] border-[#dfdfdf] p-8">
      <div className="flex cursor-pointer justify-between">
        <p className="text-xl font-bold">{question}</p>
        <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
          <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
          <div className="h-0.5 w-5 bg-[#276ef1]"></div>
        </div>
      </div>
      <p className="my-4">{answer}</p>
    </div>
  );
};

const FAQ = () => {
  return (
    <section>
      {" "}
      {/* FAQ Container */}{" "}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {" "}
        {/* FAQ Title */}{" "}
        <div className="mb-8 text-center md:mb-12 lg:mb-16">
          <p className="text-sm font-bold uppercase text-purple1">FAQS</p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#647084]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>{" "}
        {/* FAQ Content */}{" "}
        <div className="mb-12 flex flex-col items-center">
          {FAQs.map(({ item: ReactElement, index: number }) => (
            <FaqItem
              key={index}
              question={FaqItem.question}
              answer={item.answer}
            />
          ))}
        </div>
        {/* FAQ Text */}{" "}
        <p className="text-center">
          Can’t find the answer you’re looking for? Reach out to our{" "}
          <Link className="text-purple1" href="#">
            customer support team
          </Link>
          .
        </p>
      </div>
    </section>
  );
};
export default FAQ;
