import { Carousel } from "antd";

const Promo_books = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className="w-[80%] m-auto h-[352px] bg-red-500 mt-[100px] rounded-2xl">
      <Carousel afterChange={onChange}>
        <div>
          <img className="h-fit" src={"images/promo-book.png"} alt="" />
        </div>
        <div>
          <img
            className="h-[352px]"
            src="https://cdn.mos.cms.futurecdn.net/yXVweAmdMkh8dMckdbP595.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[352px]"
            src="https://lcplteenzine.wordpress.com/wp-content/uploads/2015/04/ny-bestsellers-04-26-15.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Promo_books;
