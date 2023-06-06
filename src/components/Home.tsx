import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.tsx";
const Home = () => {
  const [data, setData] = useState([] as any);

  // interface IShow {}

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res: any) => {
      return setData(res.data);
    });
  }, []);
  return (
    <>
      {data.map((item: any, index: React.Key) => (
        <Card
          Id={item.show.id}
          name={item.show.name}
          Img={item.show.image.original}
        />
      ))}
    </>
  );
};

export default Home;
