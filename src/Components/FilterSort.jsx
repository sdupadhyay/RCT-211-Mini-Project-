import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialParams = searchParams.getAll("genre");
  // if initial params value is there in the url then it will go in initial state of category
  const [category, setCategory] = useState(initialParams || []);
  const handleChange = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  const initialsortParams = searchParams.get("sortBy");
  const [sort, setSort] = useState(initialsortParams || "");
  //console.log(initialsortParams);
  console.log(category);
  useEffect(() => {
    if (category || sort) {
      const params = {};
      category && (params.genre = category);
      sort && (params.sortBy = sort);
      setSearchParams(params);
    }
  }, [category, searchParams, sort]);
  return (
    <div>
      <h3>Filter</h3>
      <div>
        <input
          type="checkbox"
          value="K-Pop"
          onChange={handleChange}
          defaultChecked={category.includes("K-Pop")}
        />
        <label>K-Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Country"
          onChange={handleChange}
          defaultChecked={category.includes("Country")}
        />
        <label>Country</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Pop"
          onChange={handleChange}
          defaultChecked={category.includes("Pop")}
        />
        <label>Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Holiday"
          onChange={handleChange}
          defaultChecked={category.includes("Holiday")}
        />
        <label>Holiday</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Heavy Metal"
          onChange={handleChange}
          defaultChecked={category.includes("Heavy Metal")}
        />
        <label>Heavy Metal</label>
      </div>
      <h3>Sorting</h3>
      <div>
        <div>
          <input
            name="sortBy"
            type="radio"
            value="asc"
            onChange={(e) => setSort(e.target.value)}
            defaultChecked={sort === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            value="desc"
            name="sortBy"
            onChange={(e) => setSort(e.target.value)}
            defaultChecked={sort === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
