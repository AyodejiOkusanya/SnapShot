import { useState } from "react";
import "./searchBar.css";

export const SearchBar = ({ onSearch }) => {
  const [values, setValues] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(values.query);
  };
  return (
    <form class="form" onSubmit={handleSubmit}>
      <input
        name="query"
        type="text"
        onChange={handleChange}
        value={values.query}
      />
      <button type="submit">Enter</button>
    </form>
  );
};
