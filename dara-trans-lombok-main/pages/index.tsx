import React, { useEffect, useState } from "react";
import SectionFeature from "@/components/organisms/SectionFeature";
import SectionCarList from "@/components/organisms/SectionCarList";
import SectionHero from "@/components/organisms/SectionHero";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Nahda Trans Lombok - Sewa Mobil dan Paket Wisata Lombok</title>
      </Head>
      <SectionHero />
      <div className="container">
        <div className="md:hidden mt-8 grid grid-cols-2 gap-4">
          <div
            className="shadow-md p-8 rounded-xl flex cursor-pointer"
            onClick={() => router.push("/sewa-kendaraan")}
          >
            <div className="m-auto">
              <Image
                src={"/cars.svg"}
                width={120}
                height={120}
                alt="Illustratiion"
                className="mb-4"
              />
              <h3 className="font-bold text-slate-800 text-center text-sm">SEWA MOBIL</h3>
            </div>
          </div>
          <div
            className="shadow-md p-8 rounded-xl flex cursor-pointer"
            onClick={() => router.push("/paket-wisata")}
          >
            <div className="m-auto">
              <Image
                src={"/vacation.svg"}
                width={120}
                height={120}
                alt="Illustratiion"
                className="mb-4"
              />
              <h3 className="font-bold text-slate-800 text-center text-sm">PAKET WISATA</h3>
            </div>
          </div>
        </div>
        <SectionCarList />
        <SectionFeature />
      </div>
    </>
  );
}
