import Link from "next/link";
import React from "react";

interface CardPaketWisataLainProps {
  namaPaket: String;
  keterangan: String;
  pathUrl: String;
}

const CardPaketWisataLain: React.FC<CardPaketWisataLainProps> = ({
  namaPaket,
  keterangan,
  pathUrl,
}) => {

  return (
    <div className="flex-1 bg-sky-500 p-10 rounded-xl">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-slate-50">{namaPaket}</h2>
        <p className="text-base text-slate-100 mt-2 mb-5">{keterangan}</p>
        <Link href={`${pathUrl}`} className="bg-slate-100 px-4 py-2 rounded-lg">
          Lihat Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default CardPaketWisataLain;
