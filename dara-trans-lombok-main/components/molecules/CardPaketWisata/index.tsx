import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardPaketWisataProps {
  id: String;
  imageUrl: String;
  packageTitle: String;
  packageDescription: String;
}

const CardPaketWisata: React.FC<CardPaketWisataProps> = ({
  id,
  imageUrl,
  packageTitle,
  packageDescription,
}) => {
  return (
    <div className="bg-white shadow-md border border-slate-200 p-5 rounded-xl group">
      <div className="rounded-xl overflow-hidden mb-3">
        <img
          src={`${imageUrl}`}
          alt="Paket Wisata 1"
          width={1000}
          height={1000}
          className="group-hover:scale-125 transition duration-200 ease-in-out w-full h-[18rem] object-cover object-center"
        />
      </div>
      <h3 className="text-2xl font-extrabold mb-1 text-slate-800">
        {packageTitle}
      </h3>
      <p className="font-light text-justify text-slate-500">
        {packageDescription?.slice(0, 100)}...
      </p>
      <div className="mt-5">
        <Link
          href={`paket-wisata/detail/${id}`}
          className="bg-sky-500 px-4 py-2 text-white font-medium rounded-full"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default CardPaketWisata;
