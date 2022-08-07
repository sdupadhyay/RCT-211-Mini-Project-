import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { useState } from "react";
import { updateMusicRecords } from "../Redux/AuthReducer/action";
const EditMusicRecord = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { musicRecords } = useSelector((store) => store.AppReducer);
  const [artist, setArtist] = useState("");
  const [music, setMusic] = useState("");
  useEffect(() => {
    let data = musicRecords.find((ele) => ele.id === id);
    if (data) {
      setArtist(data.artist);
      setMusic(data.name);
    }
    // console.log(data);
  }, [id, musicRecords]);
  // console.log(music);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (music && artist) {
      const updateData = {
        name: music,
        artist: artist,
      };
      dispatch(updateMusicRecords(id, updateData));
    }
  };
  return (
    <>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Edit Music Name</label>
          <input value={music} onChange={(e) => setMusic(e.target.value)} />
        </div>
        <div>
          <label> Edit Artist Name</label>
          <input value={artist} onChange={(e) => setArtist(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default EditMusicRecord;
