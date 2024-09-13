import { ShoppingBag } from "lucide-react";

const Card = () => {
  return (
    <div className="w-[184px] h-[342px]">
      <div className="relative">
        <img
          src="https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-harry-poster.jpg"
          alt=""
          className="h-[255px] rounded-[8px]"
        />
        <div className="bg-[#EF7F1A] w-[40px] h-[40px] rounded-full flex absolute items-center justify-center bottom-2 right-5">
          <ShoppingBag className="text-white h-[28px]" />
        </div>
      </div>
      <div>
        <h3 className="font-bold">Venetsiya Missiyasi</h3>
        <p className="text-[#828282] text-[14px]">Jeymz Hedly Cheyz</p>
        <p className="text-[#EF7F1A] text-[20px] font-bold">
          38 000 <span className="text-[14px]">so'm</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
