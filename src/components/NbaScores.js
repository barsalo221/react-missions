import React, { useState, useEffect } from 'react';
import './NbaScores.css';

const NbaScores = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/games')
      .then(response => response.json())
      .then(data => setGames(data.data));
  }, []);

  return (
    <div className="nba-scores-container">
      <h1>NBA Scores and Details</h1>
      <table>
        <thead>
          <tr>
            <th>Game Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Home Score</th>
            <th>Away Score</th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => (
            <tr key={game.id}>
              <td>{game.date}</td>
              <td>{game.home_team.full_name}</td>
              <td>{game.visitor_team.full_name}</td>
              <td>{game.home_team_score}</td>
              <td>{game.visitor_team_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NbaScores;
