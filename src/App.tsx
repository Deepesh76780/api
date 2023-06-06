import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card.tsx";

function App() {
  const [data, setData] = useState([] as any);

  // interface IShow {}

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res: any) => {
      return setData(res.data);
    });
  }, []);

  console.log(data);
  return (
    <div className="text-slate-50">
      <h1>TV Shows</h1>
      <div className="flex flex-wrap gap-24 justify-center ">
        {data.map((item: any, index: React.Key) => (
          <Card
            Id={item.show.id}
            name={item.show.name}
            Img={item.show.image.original}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
