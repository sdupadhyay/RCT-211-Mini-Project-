import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getMusicRecord } from "../Redux/AppReducer/action";
const SingleMusicRecord = () => {
  // get the id from the url by using searchparams
  const dispatch = useDispatch();
  const { id } = useParams();
  const { musicRecords } = useSelector((store) => store.AppReducer);

  const [singledata, setSingledata] = useState({});
  useEffect(() => {
    if (musicRecords.length === 0) {
      dispatch(getMusicRecord());
    }
  }, [dispatch]);
  useEffect(() => {
    if (id) {
      const singleData = musicRecords.find((ele) => ele.id === id);
      singleData && setSingledata(singleData);
    }
  }, [id, musicRecords]);
  //console.log(singledata);
  return (
    <div>
      <h3>{singledata.name}</h3>
      <Link to={`/music/${id}/edit`}>EDIT</Link>
    </div>
  );
};

export default SingleMusicRecord;
