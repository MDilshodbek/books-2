import { Button } from "../ui/button";

const MobileApp = () => {
  return (
    <div className="w-[80%] m-auto h-[417px] mt-[80px] relative flex flex-col justify-end">
      <div className="h-[308px] bg-[#FF8B22] rounded-[24px] flex justify-between px-[77px]">
        <div className="pt-[36px] flex flex-col gap-[24px] items-left">
          <h3 className="text-[32px] font-bold uppercase text-white w-[526px]">
            Book.uz Mobil ilovamizni telefoningizga ko’chirib oling
          </h3>
          <div className="flex gap-[24px]">
            <div className="bg-white h-[65px] flex gap-2 rounded-lg items-center justify-center p-4">
              <div>
                <img src={"icons/apple.png"} alt="" />
              </div>
              <div className="text-black">
                <p>Загрузите в</p>
                <h3>App Store</h3>
              </div>
            </div>
            <div className="bg-white h-[65px] flex gap-2 rounded-lg items-center justify-center p-4">
              <div>
                <img src={"icons/google-play.png"} alt="" />
              </div>
              <div className="text-black">
                <p>Доступно в</p>
                <h3>Goolgle Play</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="absolute right-[110px] top-0"
            src={"images/phone-frame.png"}
            alt="Phone frame"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
