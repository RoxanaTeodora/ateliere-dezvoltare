import { useState } from "react";
import { useDispatch } from "react-redux";
//import Results from "./Results";

const SearchParams = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = {
      type: type,
      name: name,
    };
    dispatch({ type: "SEARCH_FURNITURE", payload: searchParams });
  };

  return (
    <div className="search-params">
      <form className="form-furniture" onSubmit={handleSearch}>
        <label htmlFor="type">
          Type of Furniture
          <input
            id="type"
            name="type"
            placeholder="e.g., table, chair"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="form-furniture-input"
          />
        </label>

        <label htmlFor="name">
          Name of Furniture
          <input
            id="name"
            name="name"
            placeholder="e.g., Console Table"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-furniture-input"
          />
        </label>

        <button className="search-btn">Search Furniture</button>
      </form>
    </div>
  );
};

export default SearchParams;
