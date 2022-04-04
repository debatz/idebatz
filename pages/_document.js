import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="cursor-ff2 selection:bg-[#f92aad] selection:text-white" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Brygada+1918:ital,wght@0,400;1,500;1,700&family=Fira+Code&display=swap"
          rel="stylesheet"
        />{" "}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
