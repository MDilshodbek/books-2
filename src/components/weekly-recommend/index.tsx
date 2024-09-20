import { Heart, ShoppingBag, Star } from "lucide-react";

const WeeklyReccomend = () => {
  return (
    <div className="w-[80%] m-auto mt-[80px] h-[314px] gap-[32px] flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h3 className="text-[28px] font-bold">Hafta taklifi</h3>
        <p>Next - Previous</p>
      </div>

      <div className="flex gap-[24px]">
        <div className="flex h-[198px] w-[496px] bg-[#C0DDFF] rounded-[16px] relative gap-[18px]">
          <div>
            <img
              className="h-[226px] w-[163px] rounded-lg absolute bottom-4 left-4 z-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYG5eD76ri_YGeKPIUDPODd5y-2pdBAjTKg&s"
              alt="Product"
            />
            <div className="bg-[#EF7F1A] w-[35px] h-[35px] flex items-center justify-center text-white rounded-full absolute z-20 left-[120px] bottom-[26px]">
              <ShoppingBag className="h-[15px]" />
            </div>
          </div>
          <div className="py-[16px] px-[18px] pl-[190px] flex flex-col leading-[32px]">
            <h2 className="text-[28px] font-[600] text-[#005BAE]">
              Venetsiya missiyasi 2-qism
            </h2>
            <p className=" font-medium]">Jeyms Hedli Cheyz</p>
            <div className="flex gap-2 items-center">
              <Star className="h-[16px]" />
              <p>4.8 (56 odam)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>
                <span className="text-[24px] font-medium">38 000</span> sum
              </p>
              <div className="w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full">
                <Heart className="text-red-500 h-[14px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[198px] w-[496px] bg-[#C0DDFF] rounded-[16px] relative gap-[18px]">
          <div>
            <img
              className="h-[226px] w-[163px] rounded-lg absolute bottom-4 left-4 z-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYG5eD76ri_YGeKPIUDPODd5y-2pdBAjTKg&s"
              alt="Product"
            />
            <div className="bg-[#EF7F1A] w-[35px] h-[35px] flex items-center justify-center text-white rounded-full absolute z-20 left-[120px] bottom-[26px]">
              <ShoppingBag className="h-[15px]" />
            </div>
          </div>
          <div className="py-[16px] px-[18px] pl-[190px] flex flex-col leading-[32px]">
            <h2 className="text-[28px] font-[600] text-[#005BAE]">
              Venetsiya missiyasi 2-qism
            </h2>
            <p className=" font-medium]">Jeyms Hedli Cheyz</p>
            <div className="flex gap-2 items-center">
              <Star className="h-[16px]" />
              <p>4.8 (56 odam)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>
                <span className="text-[24px] font-medium">38 000</span> sum
              </p>
              <div className="w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full">
                <Heart className="text-red-500 h-[14px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReccomend;
