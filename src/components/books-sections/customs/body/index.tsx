import { Card, PlaceholderCard } from "./customs/card";

const Body = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <PlaceholderCard />
    </div>
  );
};

export default Body;
