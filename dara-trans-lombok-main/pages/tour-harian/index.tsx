import React from "react";
import tourHarian from "@/data/tourHarian.json";
import CardTourHarian from "@/components/molecules/CardTourHarian";
import Head from "next/head";

export default function TourHarian() {
  return (
    <div>
      <Head>
        <title>Paket Liburan Harian</title>
      </Head>
      <div className="container">
        {/* paket wisata tersedia */}
        <section className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-800 underline decoration-sky-500 decoration-wavy">
              Liburan Harian
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Liburan Harian mengantarkan anda bersama keluarga menuju destinasi di
              Lombok selama sehari penuh.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
            {tourHarian.tourHarian?.map((item, index) => (
              <CardTourHarian
                key={index}
                id={item.id}
                imageUrl={item.imageUrl}
                packageTitle={item.namaWisata}
                packageDescription={item.deskripsi}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
