import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex">
      <div className="mt-[60px] mb-[32px] flex gap-[26px]">
        <Button
          variant="link"
          className="px-[14px] py-[20px] rounded-lg bg-[#FFD8B6] text-[16px]"
        >
          Kitoblar
        </Button>
        <Button
          variant="link"
          className="px-[14px] py-[20px] rounded-lg bg-[#EF7F1A] text-white text-[16px]"
        >
          Kitoblar
        </Button>
        <Button
          variant="link"
          className="px-[14px] py-[20px] rounded-lg bg-[#FFD8B6] text-[16px]"
        >
          Kitoblar
        </Button>
        <Button
          variant="link"
          className="px-[14px] py-[20px] rounded-lg bg-[#FFD8B6] text-[16px]"
        >
          Kitoblar
        </Button>
      </div>
    </div>
  );
};

export default Header;
