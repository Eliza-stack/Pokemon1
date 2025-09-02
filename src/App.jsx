import { useEffect, useState } from "react";
import { Card } from "antd";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=12")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Pokemon list</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {pokemons.map((pokemon, index) => (
          <Card
            key={index}
            hoverable
            style={{
              backgroundColor: "#e3f2fd",
              borderRadius: "12px",
              textAlign: "center",
            }}
            cover={
              <img
                alt={pokemon.name}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                style={{ width: "150px", margin: "20px auto" }}
              />
            }
          >
            <h3 style={{ textTransform: "capitalize", color: "#0d47a1" }}>
              {pokemon.name}
            </h3>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
