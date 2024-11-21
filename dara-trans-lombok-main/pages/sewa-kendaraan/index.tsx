import SectionCarList from "@/components/organisms/SectionCarList";
import Head from "next/head";
import React from "react";

const SewaKendaraan = () => {
  return (
    <>
      <Head>
        <title>Nahda Trans Lombok - Sewa Mobil</title>
      </Head>
      <div className="container">
        <SectionCarList />
      </div>
    </>
  );
};

export default SewaKendaraan;
