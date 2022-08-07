import React from "react";
import FilterSort from "../Components/FilterSort";
import MusicRecords from "./MusicRecords";
import styled from "styled-components";
const HomePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <FilterWrapper>
        <FilterSort />
      </FilterWrapper>
      <MusicWrapper>
        <h3>Music Records </h3>
        <MusicRecords />
      </MusicWrapper>
    </div>
  );
};

export default HomePage;
const FilterWrapper = styled.div`
  width: 200px;
  border: 5px solid white;
  background-color: rgb(32, 31, 31);
  color: white;
  border-radius: 20px;
  position: sticky;
  top: 1px;
  position: sticky;
  // position: fixed;
  height: 100%;
  border-right: none;
  margin-top: 50px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const MusicWrapper = styled.div`
  width: 100%;
  // border: 1px solid grey;
  background-color: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
