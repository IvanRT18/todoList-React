import { useState } from "react";

const SingleItem = ({ id, name, completed, removeItem }) => {
  const [isChecked, setIsChecked] = useState(completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="input-checkbox"
        id="input-checkbox"
        value={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          completed = true;
        }}
      />
      <p style={isChecked ? { textDecoration: "line-through" } : {}}>{name}</p>

      <button className="btn remove-btn" onClick={() => removeItem(id, name)}>
        Eliminar
      </button>
    </div>
  );
};
export default SingleItem;
