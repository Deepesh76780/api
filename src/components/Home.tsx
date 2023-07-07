import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.tsx";
import { CircularProgress } from "@mui/material";

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
      {data ? (
        <div className="flex flex-wrap gap-24 justify-center bg-dark-theme p-10 mt-11">
          {data.map((item: any, index: React.Key) => (
            <Card
              Id={item.show.id}
              name={item.show.name}
              Img={item.show.image.original ? item.show.image.original : ""}
            />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Home;
