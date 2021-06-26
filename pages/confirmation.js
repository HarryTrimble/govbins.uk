import React from "react";
import Link from "next/link";

const Confirmation = () => {
  return (
    <>
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/3 mb-20 mt-8 pt-5">
        <div className="border-2 border-solid border-pink-400 p-8 w-full text-center">
          <h1 className="text-2xl">Success 💅</h1>
          <h2 className="text-3xl">Thank you for your submission</h2>
        </div>
        <h3 className="text-3xl pt-8">What happens next</h3>
        <p className="text-xl">
          We&apos;ll contact you in the next day or two to confirm your image
          going on the website or to ask you some follow up questions.
        </p>
        <p className="pt-4 text-xl">
          <Link href="/">
            <a className="underline">Return to homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Confirmation;
