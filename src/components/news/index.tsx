import { Button } from "../ui/button";

const News = () => {
  return (
    <div className="w-[80%] m-auto mt-[80px]">
      <div className="flex justify-between">
        <h2 className="text-[28px] font-[600px]">Yangiliklar</h2>
        <Button className="bg-[#EF7F1A] text-white flex items-center justify-center">
          Barcha yangiliklar
        </Button>
      </div>
      <div className="mt-[24px] gap-[24px] flex">
        <div className="relative">
          <div>
            <img
              className="w-[288px] h-[260px] rounded-lg"
              src="https://i.guim.co.uk/img/media/77fd5a9ff097f5181b90fb55858af039ee630916/0_16_1763_1058/master/1763.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c70f2e72b17ea44295cc211da29666c7"
              alt=""
            />
          </div>
          <div className="bg-[#000] w-[288px] h-[260px] absolute top-0 left-0 opacity-[0.5] rounded-lg"></div>
          <div className="w-[288px] h-[260px] absolute top-0 rounded-lg flex flex-col items-start justify-end p-4 text-white ">
            <p className="text-xs">15.10.2022, Kategoriya</p>
            <h3 className="text-base font-semibold mt-2">
              Garri Potter bestselleri yana sotuvga qaytmoqda
            </h3>
          </div>
        </div>
        <div className="relative">
          <div>
            <img
              className="w-[288px] h-[260px] rounded-lg"
              src="https://i.guim.co.uk/img/media/77fd5a9ff097f5181b90fb55858af039ee630916/0_16_1763_1058/master/1763.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c70f2e72b17ea44295cc211da29666c7"
              alt=""
            />
          </div>
          <div className="bg-[#000] w-[288px] h-[260px] absolute top-0 left-0 opacity-[0.5] rounded-lg"></div>
          <div className="w-[288px] h-[260px] absolute top-0 rounded-lg flex flex-col items-start justify-end p-4 text-white ">
            <p className="text-xs">15.10.2022, Kategoriya</p>
            <h3 className="text-base font-semibold mt-2">
              Garri Potter bestselleri yana sotuvga qaytmoqda
            </h3>
          </div>
        </div>
        <div className="relative">
          <div>
            <img
              className="w-[288px] h-[260px] rounded-lg"
              src="https://i.guim.co.uk/img/media/77fd5a9ff097f5181b90fb55858af039ee630916/0_16_1763_1058/master/1763.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c70f2e72b17ea44295cc211da29666c7"
              alt=""
            />
          </div>
          <div className="bg-[#000] w-[288px] h-[260px] absolute top-0 left-0 opacity-[0.5] rounded-lg"></div>
          <div className="w-[288px] h-[260px] absolute top-0 rounded-lg flex flex-col items-start justify-end p-4 text-white ">
            <p className="text-xs">15.10.2022, Kategoriya</p>
            <h3 className="text-base font-semibold mt-2">
              Garri Potter bestselleri yana sotuvga qaytmoqda
            </h3>
          </div>
        </div>
        <div className="relative">
          <div>
            <img
              className="w-[288px] h-[260px] rounded-lg"
              src="https://i.guim.co.uk/img/media/77fd5a9ff097f5181b90fb55858af039ee630916/0_16_1763_1058/master/1763.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c70f2e72b17ea44295cc211da29666c7"
              alt=""
            />
          </div>
          <div className="bg-[#000] w-[288px] h-[260px] absolute top-0 left-0 opacity-[0.5] rounded-lg"></div>
          <div className="w-[288px] h-[260px] absolute top-0 rounded-lg flex flex-col items-start justify-end p-4 text-white ">
            <p className="text-xs">15.10.2022, Kategoriya</p>
            <h3 className="text-base font-semibold mt-2">
              Garri Potter bestselleri yana sotuvga qaytmoqda
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
