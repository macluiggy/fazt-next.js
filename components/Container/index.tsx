import Navigation from "../Navigation";
import Head from "next/head";
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
      <div>{children}</div>
    </div>
  );
}
