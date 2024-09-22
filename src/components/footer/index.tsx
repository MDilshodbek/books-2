import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";

const Footer = () => {
  return (
    <div className="h-[361px] bg-black w-full mt-[100px]">
      <div className="w-[80%] m-auto flex flex-col pt-[40px]">
        <div className="flex gap-[24px]">
          <div className="text-white flex-1">
            <div>
              <img
                className="w-[104px] h-[70px]"
                src={"icons/mainIcon.svg"}
                alt=""
              />
            </div>
            <h3 className="mt-[20px] text-[18px] italic font-[500px]">
              Kitob - eng yaxshi sovg’a
            </h3>
            <p className="text-[#FFFFFFCC] text-[14px] font-[400px] mt-[12px]">
              Ushbu kitobda muallif haqiqiy rahbar qanday boʻlishi va qoʻl
              ostidagilariga qanday
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-[24px] text-[#FFFFFF]">
            <h1 className="text-[18px]">MENU</h1>
            <h3 className="text-[16px] font-[400px]">Biz haqimizda</h3>
            <h3 className="text-[16px] font-[400px]">Qanday xarid qilinadi</h3>
            <h3 className="text-[16px] font-[400px]">Yetkazib berish</h3>
            <h3 className="text-[16px] font-[400px]">Filial va dilerlar</h3>
          </div>
          <div className="flex flex-col flex-1 gap-[24px] text-[#FFFFFF]">
            <h1 className="text-[18px]">KONTAKTLAR</h1>
            <div className="flex gap-2 items-center">
              <Phone className="h-[20px]" />
              <h3 className="text-[16px] font-[400px]">+998 71 275 64 84</h3>
            </div>
            <div className="flex gap-2 items-center">
              <Mail />
              <h3 className="text-[16px] font-[400px]">info@book.uz</h3>
            </div>
            <div className="flex gap-2 items-center">
              <MapPin />
              <h3 className="text-[16px] font-[400px]">
                Chilonzor-8, Qatortol ko'chasi 60
              </h3>
            </div>
            <div className="flex gap-4">
              <Facebook />
              <Instagram />
              <Send />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-[24px] text-[#FFFFFF]">
            <h1 className="text-[18px]">ILOVANI YUKLAB OLISH</h1>
            <div className="w-[150px] h-[55px] bg-white rounded-lg mt-[28px] flex items-center justify-center gap-[12px]">
              <div>
                <img src={"icons/apple.png"} alt="" />
              </div>
              <div className="text-black">
                <p>Загрузите в</p>
                <h3>App Store</h3>
              </div>
            </div>
            <div className="w-[168px] h-[55px] bg-white rounded-lg mt-[16px] flex items-center justify-center gap-[12px]">
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
        <div className="mt-[40px] border-t border-[#FFFFFFCC] text-[#FFFFFFCC] flex items-center justify-between pt-[16px] text-[#FFFFFF]">
          <div>© 2022 Book.uz</div>
          <div className="flex gap-[36px]">
            <p>Ommaviy oferta</p>
            <p>Politika</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
