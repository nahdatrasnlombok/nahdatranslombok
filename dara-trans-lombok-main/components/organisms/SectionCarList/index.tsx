import React from "react";
import carsData from "@/data/carsData.json";
import CardCars from "@/components/molecules/CardCars";

const SectionCarList = () => {
  const cars = carsData?.cars;

  return (
    <section className="py-16">
      <div>
        <h2 className="font-serif text-slate-800 font-bold text-3xl text-center">
          Armada Sewa Mobil{" "}
          <span className="text-black-500 underline decoration-wavy">
            Nahda Trans Lombok
          </span>
        </h2>
        <p className="text-center mt-2 text-slate-700">
          Berikut beberapa kendaraan yang tersedia di Nahda Trans Lombok
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-5">
        {cars.map((item) => {
          return (
            <CardCars
              key={item.id}
              carName={item.car_name}
              imageUrl={item.imageUrl}
              totalSeat={item.total_seat}
              carType={item.type}
              fuelType={item.fuel}
              freeKey={item.free_key}
              priceFreeKey={item.price_on_free_key}
              priceWithDriver={item.price_with_driver}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionCarList;
