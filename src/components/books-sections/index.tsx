import Body from "./customs/body";
import Header from "./customs/header";

const BooksSection = () => {
  return (
    <div className="w-full mt-[80px] bg-[#F0F0F0] h-[939px]">
      <div className="w-[80%] m-auto">
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default BooksSection;
