import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-hidden font-kumbh">
      <Head>
        <title>Sneakers</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default Layout;
