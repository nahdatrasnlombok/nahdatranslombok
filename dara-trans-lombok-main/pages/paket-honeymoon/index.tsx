import React from "react";
import paketHoneymoon from "@/data/paketHoneymoon.json";
import CardPaketHoneymoon from "@/components/molecules/CardPaketHoneymoon";
import Head from "next/head";

export default function PaketHoneymoon() {
  return (
    <div>
      <Head>
        <title>Paket Honeymoon</title>
      </Head>
      <div className="container">
        {/* paket wisata tersedia */}
        <section className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-800 underline decoration-sky-500 decoration-wavy">
              Paket Honeymoon
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Buat pasangan yang akan bulan madu atau anniversary bersama
              pasangan tercinta dalam balutan suasana liburan yang romantis dan
              penuh kesan di Lombok, kami hadirkan spesial buat anda beserta
              pasangan .
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {paketHoneymoon.data?.map((item, index) => (
              <CardPaketHoneymoon
                key={index}
                id={item.id}
                imageUrl={item.imageUrl}
                packageTitle={item.namaPaket}
                packageDescription={item.deskripsi}
                listPaket={item.list_paket}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
