import "../styles/index.css";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import A from "../components/a";
import { useRouter } from "next/router";
import "fontsource-rubik";

export default function Govbins({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title key="title">#govbins</title>
        <meta property="twitter:title" content="#govbins" key="tw_title" />
        <meta property="og:title" content="#govbins" key="og_title" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://govbins.uk/" />

        <meta property="og:description" content="Cataloguing a nation's bins" />
        <meta
          property="og:image"
          content="http://govbins.uk/images/preview-card.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://govbins.uk/" />

        <meta
          property="twitter:description"
          content="Cataloguing a nation's bins"
        />
        <meta
          property="twitter:image"
          content="http://govbins.uk/images/preview-card.png"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Rubik"
          rel="stylesheet"
        />
        <script
          defer
          data-domain="govbins.uk"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <style jsx global>
        {`
          body {
            background-color: #f8f8f8;
          }
        `}
      </style>
      <div className="font-rubik text-gray-800">
        <header
          className={`w-screen pr-5 pl-5 pt-4 pb-10 md:flex sm:justify-between ${
            router.pathname === "/" ? "" : "border-b-2 border-gray-800"
          }`}
        >
          <h1 className="text-4xl w-full md:w-1/2 pt-2">
            <Link href="/">
              <a>#govbins</a>
            </Link>
          </h1>
          <nav className="w-full md:w-1/2 text-xl sm:mt-5">
            <ul className="flex flex-row md:justify-end space-x-2 md:space-x-4">
              <li>
                <A href="/submit-photos">
                  Submit <span className="hidden md:inline">photos</span>
                </A>
              </li>
              <li>
                <A href="/about">About</A>
              </li>
              <li>
                <A href="/map">Map</A>
              </li>
              <li>
                <A href="/search">Search</A>
              </li>
            </ul>
          </nav>
        </header>
        <main className="">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
