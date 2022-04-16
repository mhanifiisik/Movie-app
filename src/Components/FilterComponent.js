import React, { useState, useRef } from "react";
import { Search, X } from "react-feather";
import { useNavigate } from "react-router-dom";

const FilterComponent = () => {
  const [search, setSearch] = useState("");
  const ref = useRef();
  let navigate = useNavigate();

  const handleDelete = () => {
    ref.current.value = "";
  };
  const handleForm = (e) => {
    e.preventDefault();
    navigate(`/search/query=${search}`);
  };

  return (
    <form className="filter" onSubmit={handleForm}>
      <Search color="white" />
      <input
        type="text"
        ref={ref}
        placeholder="search movies"
        onChange={(e) => setSearch(e.target.value)}
      />
      {search.length !== 0 ? (
        <X onClick={() => handleDelete()} color="white" />
      ) : null}
    </form>
  );
};

export default FilterComponent;
