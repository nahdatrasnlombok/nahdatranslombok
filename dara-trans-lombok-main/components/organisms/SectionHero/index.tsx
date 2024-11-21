import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCarAlt } from "react-icons/fa";

const SectionHero = () => {
  return (
    <section className="py-16 bg-sky-200 min-h-[480px] text-black rounded-ee-3xl rounded-es-3xl">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 md:gap-10">
          {/* Gambar Spanduk Penuh di Kiri */}
          <div className="flex-1 md:w-1/2 order-1 md:order-1">
            <Image
              src={"/images/cars_header.png"}
              alt="Spanduk"
              width={1024}  // Ukuran gambar spanduk yang lebih besar
              height={1024}
              quality={75}
              className="object-cover w-full h-full"  // Menggunakan object-cover agar gambar memenuhi area
            />
          </div>

          {/* Teks dan Tombol di Kanan */}
          <div className="flex-1 md:w-1/2 order-2 md:order-2">
            <h1 className="text-2xl md:text-4xl font-bold">
              Selamat Datang di Nahda Trans Lombok
            </h1>
            <p className="text-sm md:text-base font-light mt-3 max-w-xl text-justify">
              <span className="underline decoration-wavy">
                Nahda Trans Lombok
              </span>{" "}
              adalah penyedia jasa Transportasi dan Travel agen terbesar di
              Lombok, kini telah dipercaya sebagai perusahaan penyedia jasa
              transportasi, mulai dari sewa mobil Lombok harian, Mingguan hingga
              Bulanan. Selain itu kami juga bergerak di bidang jasa pelayanan
              Pariwisata untuk lombok, mulai dari paket tour harian, mingguan,
              dan Honeymoon di Lombok.
            </p>
            <div className="hidden md:flex mt-5">
              <Link
                href="/sewa-kendaraan"
                className="bg-white text-black-500 inline-block px-6 font-medium py-3 rounded-full"
              >
                <span className="flex items-center gap-2">
                  <FaCarAlt size={20} />
                  Sewa Kendaraan
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
