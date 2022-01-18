import Navigation from "../Navigation";
import Head from "next/head";
import fetch from "isomorphic-fetch";
export default function Container({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
        />
      </Head>
      <Navigation />
      <div className="container p-4">{children}</div>
    </div>
  );
}
