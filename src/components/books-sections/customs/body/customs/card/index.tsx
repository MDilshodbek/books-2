import { ShoppingBag } from "lucide-react";

const Card = () => {
  return (
    <div className="w-[184px] h-[342px] mt-[32px]">
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
      <div className="mt-[10px]">
        <h3 className="font-bold">Venetsiya Missiyasi</h3>
        <p className="text-[#828282] text-[14px]">Jeymz Hedly Cheyz</p>
        <p className="text-[#EF7F1A] text-[20px] font-bold">
          38 000 <span className="text-[14px]">so'm</span>
        </p>
      </div>
    </div>
  );
};

const PlaceholderCard = () => {
  return (
    <div className="w-[184px] h-[255px] mt-[32px] bg-[#DADADA] flex flex-col items-center justify-center gap-[24px] rounded-[8px]">
      <div>
        <img src={"images/ko'proq-books.png"} alt="" className="h-[64px]" />
      </div>
      <h3 className="text-[#989898] text-[18px] font-[500px]">
        Ko'proq ko'rish
      </h3>
    </div>
  );
};

export { Card, PlaceholderCard };
