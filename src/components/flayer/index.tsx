import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, ShoppingBag, User } from "lucide-react";
import type { FC } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

const Flayer: FC = () => {
  return (
    <div className="w-[80%] m-auto mt-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-[36px]">
          <Button variant="link" className="p-0">
            Kitoblar
          </Button>
          <Button variant="link" className="p-0">
            To'plamlar
          </Button>
          <Button variant="link" className="p-0">
            Mualliflar
          </Button>
          <Button variant="link" className="p-0">
            Chegirmalar
          </Button>
        </div>
        <div className="flex gap-6">
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() =>
              toast("Added to the wishlist", {
                description: new Date().toLocaleString(),
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            <ShoppingBag />
            <h4>Savatcha</h4>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <Heart />
            <h4>Sevimlilar</h4>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <User />
            <h4>Profil</h4>
          </div>
        </div>
      </div>
      <div className="flex gap-4 h-[488px] mt-4">
        <div className="w-[287px] bg-[#f5f5f5] rounded-sm flex flex-col gap-2 items-start pl-4">
          <Button variant="link" className="p-0">
            Badiiy adabiyotlar
          </Button>
          <Button variant="link" className="p-0">
            Badiiy Adabiyotlar
          </Button>
          <Button variant="link" className="p-0">
            Badiiy Adabiyotlar
          </Button>
          <Button variant="link" className="p-0">
            Badiiy Adabiyotlar
          </Button>
          <Button variant="link" className="p-0">
            Badiiy Adabiyotlar
          </Button>
          <Button variant="link" className="p-0">
            Badiiy Adabiyotlar
          </Button>
          <Button variant="link" className="p-0">
            Badiiy Adabiyotlar
          </Button>
          <Button variant="link" className="p-0">
            Badiiy Adabiyotlar
          </Button>
          <Button variant="link" className="p-0">
            Badiiy Adabiyotlar
          </Button>
          <Button variant="link" className="p-0">
            Badiiy Adabiyotlar
          </Button>
        </div>
        <div className="w-full rounded-sm flex justify-end">
          <Carousel className="w-[95%] h-[480px]">
            <CarouselContent>
              <CarouselItem>
                <img
                  className="h-[480px]"
                  src="https://collegeinfogeek.com/wp-content/uploads/2018/11/Essential-Books.jpg"
                  alt=""
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className="h-[480px]"
                  src="https://www.booktrust.org.uk/globalassets/images/news-and-features/blogs-2022/12.-december/best-books-of-2022-16x9.jpg?w=1920&h=1080&quality=70&anchor=middlecenter"
                  alt=""
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className="h-[480px]"
                  src="https://compote.slate.com/images/a92fef3e-c1db-4cbf-93da-dae90c0b9388.jpeg?crop=4395%2C2930%2Cx0%2Cy0"
                  alt=""
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex items-center justify-between h-[202px] mt-4 text-[#107FE4]">
        <div className="w-[288px] h-full px-[24px] py-4 bg-[#107FE41A] rounded-lg flex flex-col">
          <img className="w-[48px] mb-[16px]" src="icons/fast.png" alt="" />
          <h3 className="text-[24px] font-bold">Yetkazib berish</h3>
          <p>Buyurtmangizni O’zbekiston bo’ylab yetkazib beramiz</p>
        </div>
        <div className="w-[288px] h-full px-[24px] py-4 bg-[#107FE41A] rounded-lg flex flex-col">
          <img className="w-[48px] mb-[16px]" src="icons/book.png" alt="" />
          <h3 className="text-[24px] font-bold">Keng tanlov</h3>
          <p>Istalgan turdagi kitoblarni topishingiz mumkin</p>
        </div>
        <div className="w-[288px] h-full px-[24px] py-4 bg-[#107FE41A] rounded-lg flex flex-col">
          <img
            className="w-[48px] mb-[16px]"
            src="icons/credit-card.png"
            alt=""
          />
          <h3 className="text-[24px] font-bold">Oson to'lov</h3>
          <p>Istalgan turdagi to‘lov asosida xarid qilishingiz mumkin</p>
        </div>
        <div className="w-[288px] h-full px-[24px] py-4 bg-[#107FE41A] rounded-lg flex flex-col">
          <img
            className="w-[48px] mb-[16px]"
            src="icons/guarantee.png"
            alt=""
          />
          <h3 className="text-[24px] font-bold">Himoyalangan tizim</h3>
          <p>Sizning xavfsizligingiz uchun barcha ishlarni qilganmiz</p>
        </div>
      </div>
    </div>
  );
};

export default Flayer;
