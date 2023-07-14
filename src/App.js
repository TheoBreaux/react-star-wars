import { useEffect, useState } from "react";
import "./style.css";
import getAllStarships from "./services/sw-api";

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllStarships();
        setStarships(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>STAR WARS STARSHIPS</h1>
      <div className="App">
        {starships.map((starship) => {
          return <div className="card">{starship.name}</div>;
        })}
      </div>
    </div>
  );
};

export default App;
