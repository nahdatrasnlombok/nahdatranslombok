import Image from "next/image";
import React from "react";
import { CiUser } from "react-icons/ci";
import { FaKey, FaWaveSquare, FaWhatsapp } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";

import contacts from "@/data/contact.json";

interface CardCarsProps {
  imageUrl: String;
  carName: String;
  totalSeat: number;
  carType: String;
  fuelType: String;
  freeKey: String;
  priceFreeKey: String;
  priceWithDriver: String;
}

const CardCars: React.FC<CardCarsProps> = ({
  imageUrl,
  carName,
  totalSeat,
  carType,
  fuelType,
  freeKey,
  priceFreeKey,
  priceWithDriver,
}) => {
  return (
    <div className="shadow-2xl rounded-xl overflow-hidden">
      <Image src={`${imageUrl}`} alt={`${carName}`} width={1024} height={500} />
      <div className="p-4">
        <div className="text-center mb-2">
          <h3 className="font-serif font-bold text-xl md:text-2xl text-teal-600">
            {carName}
          </h3>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-wrap gap-1">
            <CiUser size={18} />
            <span className="text-sm md:text-base font-medium">
              {totalSeat}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaWaveSquare size={18} />
            <span className="text-sm md:text-base font-medium">{carType}</span>
          </div>
          <div className="flex items-center gap-1">
            <LuFuel size={18} />
            <span className="text-sm md:text-base font-medium">{fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaKey size={18} />
            <span className="text-sm md:text-base font-medium">{freeKey}</span>
          </div>
        </div>
        <hr className="my-3" />
        <div className="mb-2">
          <h3 className="text-md md:text-lg font-bold">Lepas Kunci</h3>
          <h3 className="text-lg md:text-xl font-bold text-sky-500">
            {priceFreeKey}
          </h3>
        </div>
        <div className="mb-2">
          <h3 className="text-md md:text-lg font-bold">Include Driver + BBM</h3>
          <h3 className="text-lg md:text-xl font-bold text-sky-500">
            {priceWithDriver}
          </h3>
        </div>
        <div className="flex flex-row justify-between mt-4">
         
      
          <a
            href={contacts.whatsapp_admin_1}
            target="_blank"
            className="flex gap-2 items-center bg-teal-600 px-2 py-2 md:px-4 md:py-2 rounded-xl text-white"
          >
            <FaWhatsapp size={22} />
            <span className="font-medium text-xs md:text-base">Admin</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCars;
