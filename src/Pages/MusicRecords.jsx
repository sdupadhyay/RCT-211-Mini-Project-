import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMusicRecord } from "../Redux/AppReducer/action";
const MusicRecords = () => {
  const { musicRecords } = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const sortBy = searchParams.get("sortBy");
  // console.log("AAA", searchParams); // gives us the output array in which name of the params is present which is in the url
  useEffect(() => {
    if (location || musicRecords.length === 0) {
      //console.log(sortBy);
      const queryparams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };

      dispatch(getMusicRecord(queryparams));
    }
  }, [location.search]);
  // console.log(musicRecords);
  return (
    <div className="music">
      {musicRecords.map((ele) => (
        <div key={ele.id} style={{ padding: "10px" }}>
          <Link
            to={`/music/${ele.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img width="100%" src={ele.img} />
            <p>{ele.genre}</p>
            <p> Year:{ele.year}</p>
            <p>Name:{ele.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MusicRecords;
