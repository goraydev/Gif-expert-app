import { useState } from "react";

const AddCategory = ({ onNewCategory, onChangeAmount }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputRange, setInputRange] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim().length) return;

    onNewCategory(inputValue);

    onChangeAmount(inputRange);

    //clean input
    setInputValue("");
  };



  return (
    <>
      <form onSubmit={handleSubmit} className="mt-2 flex-column">
        <input
          className="boxSearch"
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="range mt-2">
          <label htmlFor="range text-white">{inputRange} gifs</label>
          <input
            type="range"
            name="range"
            id="range"
            min={5}
            max={100}
            step={5}
            value={inputRange}
            onChange={(e) => setInputRange(Number(e.target.value))}
          />
        </div>
      </form>
    </>
  );
};

export default AddCategory;