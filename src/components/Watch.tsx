import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Watch = () => {
  const { Id } = useParams();
  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${Id}`).then((res: any) => {
      console.log(res.data);
    });
  }, []);
  return <div>Watch</div>;
};

export default Watch;
