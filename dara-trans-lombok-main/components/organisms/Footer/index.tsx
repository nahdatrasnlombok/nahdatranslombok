import React from "react";
import moment from "moment";
import { ImOffice } from "react-icons/im";
import { FaClock, FaMap, FaWhatsappSquare } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const currentYear = moment().format("YYYY");

  return (
    <footer className="py-16 bg-sky-500">
      <div className="container">
        {/* bagian copyright */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-white text-2xl font-semibold">Alamat</h3>
            <ul className="mt-4 text-white flex flex-col gap-2">
              <li className="flex gap-2 items-center">
                <ImOffice size={20} />
                <span>CV Adzkiya Nahda</span>
              </li>
              <li className="flex gap-2 items-start">
                <FaMap size={20} />
                <span>
                  <a
                    href="https://maps.app.goo.gl/GCpCrZBWwFXDcxV78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    KLIK MAPS DISINI (Perumahan Pemda, Jl. Raya Mahoni Blok BL No 05, Gerung
                    Lombok Barat)
                  </a>
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <FaWhatsappSquare size={20} />
                <span>085333235653</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaClock size={20} />
                <span>24 Jam</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-2xl font-semibold">Area Pelayanan</h3>
            <ul className="mt-4 text-white flex flex-col gap-2">
              <li>Kota Mataram</li>
              <li>Lombok Barat</li>
              <li>Senggigi</li>
              <li>Bandara Internasional Lombok</li>
              <li>Lombok Timur</li>
              <li>Lombok Tengah</li>
              <li>Sumbawa</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-2xl font-semibold">Didukung Oleh</h3>
            <Image
              src={"/logo/wonderful_indonesia.png"}
              width={200}
              height={80}
              alt="Wonderful Indonesia"
              className="mt-5"
            />
          </div>
        </div>
        <section className="text-white font-medium text-center">
          <p>
            &copy; Hak Cipta {currentYear} Nahda Trans Lombok. Semua Hak Dilindungi{" "}
            | Didukung oleh CV ADZKIYA NAHDA
          </p>
        </section>
      </div>
    </footer>
  );
}
