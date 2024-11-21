import React, { ReactNode } from "react";

interface CardFeatureProps {
  title: String;
  description: String;
  icon: ReactNode;
}

const CardFeature: React.FC<CardFeatureProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="p-6 bg-sky-500 hover:bg-sky-600 transition-all duration-300 hover:shadow-lg ease-in-out rounded-xl text-center">
      <div className="w-full flex justify-center mb-3">
        <div className="bg-white p-10 w-32 h-32 rounded-full flex justify-center items-center">
          {icon}
        </div>
      </div>
      <h3 className="font-bold font-serif text-slate-200 text-xl">{title}</h3>
      <p className="mt-2 text-slate-200 text-sm md:text-base font-light">
        {description}
      </p>
    </div>
  );
};

export default CardFeature;
