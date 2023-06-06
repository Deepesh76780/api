import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Watch = () => {
  const { Id } = useParams();
  const [show, setShow] = useState<any>([]);
  const navigate = useNavigate();

  const handleClick: any = () => {
    localStorage.setItem("movie", show.name);
    navigate("/book");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${Id}`);
        setShow(response.data);
      } catch (error) {
        console.error("Error fetching show data:", error);
      }
    };

    fetchData();
  }, [Id]);

  console.log(show);
  return (
    <div className="flex flex-wrap justify-center bg-dark-theme p-10 mt-11 mb-11 gap-36">
      {show.length !== 0 ? (
        <>
          <div>
            <img
              src={show.image.original}
              alt=""
              height={"350px"}
              width={"350px"}
            />
          </div>
          <div className="w-11/12 h-9/12 bg-slate-700 p-4">
            <h1 className=" sm:text-3xl md:text-5xl mt-7">{show.name}</h1>
            <div className="flex  flex-wrap gap-5 mt-4">
              {show.genres.map((genre: any, index: React.Key) => (
                <Chip label={genre} color="primary" key={index} />
              ))}
            </div>
            <h1 className="mt-4">Language - {show.language}</h1>
            <h1 className="mt-4">IMDB - {show.rating.average}/10</h1>
            <div
              className="mt-6 text-slate-100 md:text-xl sm:text-sm"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            />
            <h1 className="mt-6 mb-6">status - {show.status}</h1>
            <Button
              variant="contained"
              color="primary"
              className="mt-6"
              onClick={handleClick}
            >
              Book Ticket
            </Button>
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Watch;
