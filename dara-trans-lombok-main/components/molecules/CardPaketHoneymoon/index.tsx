import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardPaketHoneymoonProps {
  id: String;
  imageUrl: String;
  packageTitle: String;
  packageDescription: String;
  listPaket: any;
}

const CardPaketHoneymoon: React.FC<CardPaketHoneymoonProps> = ({
  imageUrl,
  packageTitle,
  packageDescription,
  listPaket,
}) => {
  console.log(listPaket);

  return (
    <div className="bg-white shadow-md border border-slate-200 p-5 rounded-xl group">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden mb-3">
            <img
              src={`${imageUrl}`}
              alt="Paket Wisata 1"
              width={1000}
              height={1000}
              className="group-hover:scale-125 transition duration-200 ease-in-out w-full h-[24rem] object-cover object-center"
            />
          </div>
          <h3 className="text-2xl font-extrabold mb-1 text-slate-800">
            {packageTitle}
          </h3>
          <p className="font-light text-justify text-slate-500">
            {packageDescription?.slice(0, 100)}...
          </p>
        </div>
        <div className="flex-1">
          <ul className="space-y-4">
            {listPaket.map((item: any, index: any) => (
              <li key={index}>
                <Link
                  href={`paket-honeymoon/${item.id}`}
                  className="px-6 py-3 bg-sky-500 rounded-xl text-white font-medium flex justify-center shadow-xl shadow-sky-300/50"
                >
                  {item.judulPaket}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPaketHoneymoon;
