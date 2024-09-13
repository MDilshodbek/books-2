import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const Header = () => {
  return (
    <div className="flex">
      <div className="mt-[60px] mb-[32px] flex gap-[26px]">
        <Toggle>Kitoblar</Toggle>
        <Toggle>Kitoblar</Toggle>
        <Toggle>Yangi kitoblar</Toggle>
        <Toggle>Kitoblar</Toggle>
      </div>
    </div>
  );
};

export default Header;
