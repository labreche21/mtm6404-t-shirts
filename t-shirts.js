import React, { useState } from "react";

// ============================
// SAMPLE T-SHIRT DATA
// ============================
const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

// ============================
// TSHIRT COMPONENT
// ============================
function TShirt({ shirt, onBuy }) {
  const [quantity, setQuantity] = useState(1);

  function handleBuy() {
    onBuy(shirt.id, quantity);
    setQuantity(1); // reset after purchase
  }

  return (
    <div style={styles.card}>
      <h3>{shirt.title}</h3>
      <img src={shirt.image} alt={shirt.title} style={styles.image} />
      <p>Price: ${shirt.price.toFixed(2)}</p>
      <p>
        Stock:{" "}
        {shirt.stock === 0 ? (
          <span style={{ color: "red" }}>Out of Stock</span>
        ) : (
          shirt.stock
        )}
      </p>

      {shirt.stock > 0 && (
        <>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {[...Array(shirt.stock)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>

          <button onClick={handleBuy} style={styles.button}>
            Buy
          </button>
        </>
      )}
    </div>
  );
}

// ============================
// APP COMPONENT
// ============================
function App() {
  const [shirts, setShirts] = useState(tshirtData);

  function handleBuy(id, quantity) {
    setShirts((prevShirts) =>
      prevShirts.map((shirt) =>
        shirt.id === id
          ? { ...shirt, stock: shirt.stock - quantity }
          : shirt
      )
    );
  }

  return (
    <div style={styles.container}>
      <h1>T-Shirt Store</h1>
      <div style={styles.grid}>
        {shirts.map((shirt) => (
          <TShirt key={shirt.id} shirt={shirt} onBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
}

// ============================
// SIMPLE STYLES
// ============================
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial"
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    width: "220px",
    borderRadius: "8px",
    textAlign: "center"
  },
  image: {
    width: "100%",
    marginBottom: "10px"
  },
  button: {
    marginLeft: "10px",
    padding: "5px 10px",
    cursor: "pointer"
  }
};

export default App;
