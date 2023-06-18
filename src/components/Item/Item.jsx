import "../Item/Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, img, name, category, price }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log("item");
  };

  return (
    <div
      onClick={handleClick}
      style={{
        margin: 20,
        border: "1px solid #000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={img} alt={name} style={{ width: 100 }} />
      <h3>{name}</h3>
      <p>category: {category}</p>
      <h3>price: ${price}</h3>
      <Link to={`/item/${id}`}>ver detalle</Link>
    </div>
  );
};

export default Item;
