import React from "react";
import { useRouter } from "next/router";
import paketHoneymoon from "@/data/paketHoneymoon.json";
import { FaClock, FaLocationArrow, FaMapPin } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

import contacts from "@/data/contact.json";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Cari paket dengan ID yang sesuai
  const selectedPaket = paketHoneymoon.data.reduce((acc: any, paket) => {
    const selected = paket.list_paket.find((p) => p.id === id);
    if (selected) {
      acc = selected;
    }
    return acc;
  }, null);

  return (
    <>
      <Head>
        <title>Paket Honeymoon - {selectedPaket?.judulPaket}</title>
      </Head>
      <div className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              {/* overview */}
              <section className="mb-4">
                <h3 className="text-2xl font-bold text-slate-800">Overview</h3>
                <p className="text-base font-light text-slate-500 mt-3">
                  {selectedPaket?.overview}
                </p>
                <div className="mt-4">
                  <ul className="space-y-2">
                    <li className="flex gap-2 items-center">
                      <FaLocationArrow size={18} className="text-sky-500" />
                      Start: {selectedPaket?.start}
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaClock size={18} className="text-sky-500" />
                      Durasi: {selectedPaket?.durasi}
                    </li>
                  </ul>
                </div>
              </section>
              <hr className="my-4" />
              {/* kegiatan */}
              <section className="mb-4">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  Kegiatan
                </h3>
                {selectedPaket?.kegiatan?.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="w-full p-5 bg-white border border-slate-100 shadow-md rounded-md mb-2"
                  >
                    <h4 className="text-lg font-bold text-slate-700">
                      {item.hari}
                    </h4>
                    <ul className="space-y-2 mt-2 list-decimal list-inside">
                      {item.listKegiatan.map((item: any, index: any) => (
                        <li key={index} className="text-slate-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
              <hr className="my-4" />
              <section className="mb-4">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  Include
                </h3>
                <ul className="space-y-2 list-decimal list-inside">
                  {selectedPaket?.include?.map((item: any, index: any) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="mb-4">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  Exclude
                </h3>
                <ul className="space-y-2 list-decimal list-inside">
                  {selectedPaket?.exlude?.map((item: any, index: any) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
            <div className="flex-1">
              <section className="mb-4">
                <div className="p-5 bg-white rounded-md shadow-md border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {selectedPaket?.judulPaket}
                  </h3>
                  <div className="flex gap-5">
                    <div className="flex items-center gap-2 font-medium">
                      <FaMapPin className="text-sky-500" />
                      {selectedPaket?.lokasi}
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <FaMapPin className="text-sky-500" />
                      {selectedPaket?.durasi}
                    </div>
                  </div>
                  <div className="overflow-x-auto mt-2">
                    <table className="table-auto border-collapse w-full">
                      <thead>
                        <tr className="bg-sky-500 text-white">
                          <th className="py-2 px-4 text-left">Price List</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-200">
                          <td className="py-2 px-4">{selectedPaket?.price}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3">
                    <div className="mb-2">
                      <p className="font-medium text-orange-600">NOTE: </p>
                      <ul className="space-y-1">
                        <li className="text-orange-500">
                          * Di atas pricelist paket tanpa hotel
                        </li>
                        <li className="text-orange-500">
                          * Hubungi Tim kami terlebih dahulu untuk pemesanan
                          paket include Hotel
                        </li>
                      </ul>
                    </div>
                    <a
                      href={contacts.whatsapp_admin_1}
                      target="_blank"
                      className="flex justify-center shadow-lg shadow-sky-500/40 py-3 bg-sky-500 rounded-lg text-white font-medium"
                    >
                      Booking Sekarang
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
