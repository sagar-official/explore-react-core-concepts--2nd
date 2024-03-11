import { useState } from "react";

export default function Team() {
  const [players, setPlayers] = useState(11);

  const handleAddPlayers = () => {
    const newPlayers = players + 1;
    setPlayers(newPlayers);
  };

  const handleRemovePlayers = () => {
    setPlayers(players - 1);
  };
  const setStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={setStyle}>
      <h3>Players : {players}</h3>
      <button onClick={handleAddPlayers} style={{marginRight:'10px'}}>Add Players</button>
      <button onClick={handleRemovePlayers}>Remove Players</button>
    </div>
  );
}
