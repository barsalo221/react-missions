import React, { useState, useEffect } from 'react';
import './NBAPlayers.css'; // Import your custom styles here

export function NBAPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/players')
      .then(response => response.json())
      .then(json => setPlayers(json.data));
  }, []);

  return (
    <div className="nba-players">
      <h2>All NBA Players</h2>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <img src={`https://nba-players.herokuapp.com/players/${player.last_name}/${player.first_name}`} alt={`${player.first_name} ${player.last_name}`} />
            <div className="player-details">
              <h3>{player.first_name} {player.last_name}</h3>
              <p>Team: {player.team.full_name}</p>
              <p>Position: {player.position}</p>
              <p>Height: {player.height_feet}'{player.height_inches}"</p>
              <p>Weight: {player.weight_pounds} lbs</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NBAPlayers;
