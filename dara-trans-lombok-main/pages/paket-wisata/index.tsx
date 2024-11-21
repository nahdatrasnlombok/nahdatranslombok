import CardPaketWisata from "@/components/molecules/CardPaketWisata";
import Image from "next/image";
import React from "react";
import paketWisata from "@/data/paketWisata.json";
import CardPaketWisataLain from "@/components/molecules/CardPaketWisataLain";
import Head from "next/head";

export default function PaketWisata() {
  return (
    <div>
      <Head>
        <title>Nahda Trans Lombok - Paket Liburan</title>
      </Head>
      <div className="container">
        {/* paket wisata tersedia */}
        <section className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-800 underline decoration-sky-500 decoration-wavy">
              Paket Liburan
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Paket Liburan ini cocok buat kamu yang ingin explore Lombok selama
              beberapa hari. Hubungi Tim kami untuk mendapatkan info paket
              wisata.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {paketWisata.paket_wisata?.map((item, index) => (
              <CardPaketWisata
                key={index}
                id={item.id}
                imageUrl={item.imageUrl}
                packageTitle={item.nama_paket}
                packageDescription={item.deskripsi}
              />
            ))}
          </div>
        </section>
        {/* pilihan paket wisata lain */}
        <section className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-800 underline decoration-sky-500 decoration-wavy">
              Pilihan Liburan Lainnya
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Kami juga menawarkan beberapa pilihan paket Liburan lainnya
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-5">
            {paketWisata.paket_wisata_lainnya?.map((item, index) => (
              <CardPaketWisataLain
                key={index}
                namaPaket={item.namaPaket}
                keterangan={item.keterangan}
                pathUrl={item.url}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
