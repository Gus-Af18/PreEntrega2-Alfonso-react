import { useState } from "react";
import "../ItemCount/ItemCount";

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
  const [inputType, setInputType] = useState("button");
  const [quantity, setQuantity] = useState(0);

  const ItemCount = inputType === "input" ? InputCount : ButtonCount;

  const handleOnAdd = (count) => {
    const objProductToAdd = {
      id,
      name,
      price,
      count,
    };
    console.log(objProductToAdd);
    console.log("agregue al carrito: ", count);

    setQuantity(count);
  };

  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} style={{ width: 100 }} />
      </picture>
      <section>
        <p>Categoria: {category}</p>
        <p>Descripción: {description}</p>
        <p>Precio: {price}</p>
      </section>
      <footer>
        {quantity === 0 ? (
          <ItemCount onAdd={handleOnAdd} stock={stock} />
        ) : (
          <button>Finalizar compra</button>
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
