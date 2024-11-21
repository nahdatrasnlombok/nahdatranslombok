import CardFeature from "@/components/molecules/CardFeature";
import React from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { ImFileEmpty } from "react-icons/im";
import { IoCarSportOutline } from "react-icons/io5";
import { PiUsersThreeBold } from "react-icons/pi";

const SectionFeature = () => {
  return (
    <section className="py-16">
      <h2 className="font-serif text-slate-800 font-bold text-xl md:text-2xl text-center">
        Mengapa Anda Harus Menyewa Kendaraan di{" "}
        <span className="text-black-500 underline decoration-wavy">
          Nahda Trans Lombok
        </span>
        ?
      </h2>
      <div className="mt-5 text-justify text-sm md:text-base">
        <p className="mb-2 text-slate-700">
          Rental Mobil, Sewa Mobil, atau agen sewa mobil adalah perusahaan yang
          menyewakan mobil untuk jangka waktu yang singkat, umumnya mulai dari
          beberapa jam sampai beberapa minggu. Sering diatur dengan banyak
          cabang lokal (yang memungkinkan pengguna untuk mengembalikan kendaraan
          ke lokasi yang berbeda), dan terutama terletak di dekat bandara atau
          daerah kota yang sibuk dan sering dilengkapi dengan situs web yang
          memunkinkan pemesanan online
        </p>
        <p className="mb-2 text-slate-700">
          Agen penyewaan mobil terutama melayani orang-orang yang membutuhkan
          kendaraan sementara, misalnya, mereka yang tidak memiliki mobil
          sendiri, pelancong yang berada di luar kota, atau pemilik kendaraan
          yang rusak atau hancur yang sedang menunggu perbaikan atau kompensasi
          asuransi.
        </p>
      </div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        <CardFeature
          icon={<AiFillCustomerService size={45} />}
          title={"Customer Service Ramah"}
          description={
            "Pelayanan Dalam Melakukan Konsultasi atau Reservasi selalu lancar dengan Customer Service yang Ramah dan Bukan Robot."
          }
        />
        <CardFeature
          icon={<ImFileEmpty size={45} />}
          title={"Zero Complain"}
          description={
            "Selalu mengutamakan kepuasan pelanggan dengan memberikan Layanan terbaik untuk jasa yang kami sediakan."
          }
        />
        <CardFeature
          icon={<PiUsersThreeBold size={45} />}
          title={"Team yang Profesional"}
          description={
            "Kami merekrut Karyawan yang berpengalaman dan Profesional di bidang masing-masing yang selalu siap memberikan yang terbaik."
          }
        />
        <CardFeature
          icon={<IoCarSportOutline size={45} />}
          title={"Unit Berkualitas"}
          description={
            "Kami Selalu membenahi Unit kendaraan yang kami sedaiakan dengan selalu menjaga Performa unit kendaraan yang kami sewakan."
          }
        />
      </div>
    </section>
  );
};

export default SectionFeature;
