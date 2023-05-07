import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TablePlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/secured/data',{ withCredentials: true }
    )

      .then(response =>{
        setPlayers(response.data)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className=" bg-black flex flex-col overflow-x-auto sm:-mx-6 lg:-mx-8 py-2 sm:px-6 lg:px-8 overflow-hidden min-w-full text-center text-sm font-light">
      <h1 className='text-white'>Player Data</h1>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black uppercase bg-blue-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-3 py-3 ">Player</th>
            <th scope="col" class="px-3 py-3">Pos</th>
            <th scope="col" class="px-3 py-3"> Age</th>
            <th scope="col" class="px-3 py-3">Tm</th>
            <th scope="col" class="px-3 py-3">G</th>
            <th scope="col" class="px-3 py-3">GS</th>
            <th scope="col" class="px-3 py-3">MP</th>
            <th scope="col" class="px-3 py-3">FG</th>
            <th scope="col" class="px-3 py-3">FGA</th>
            <th scope="col" class="px-3 py-3">FG%</th>
            <th scope="col" class="px-3 py-3">3P</th>
            <th scope="col" class="px-3 py-3">3PA</th>
            <th scope="col" class="px-3 py-3">3P%</th>
            <th scope="col" class="px-3 py-3">2P</th>
            <th scope="col" class="px-3 py-3">2PA</th>
            <th scope="col" class="px-3 py-3">2P%</th>
            <th scope="col" class="px-3 py-3">eFG%</th>
            <th scope="col" class="px-3 py-3">FT</th>
            <th scope="col" class="px-3 py-3">FTA</th>
            <th scope="col" class="px-3 py-3">FT%</th>
            <th scope="col" class="px-3 py-3">ORB</th>
            <th scope="col" class="px-3 py-3">DRB</th>
            <th scope="col" class="px-3 py-3">TRB</th>
            <th scope="col" class="px-3 py-3">AST</th>
            <th scope="col" class="px-3 py-3">STL</th>
            <th scope="col" class="px-3 py-3">BLK</th>
            <th scope="col" class="px-3 py-3">TOV</th>
            <th scope="col" class="px-3 py-3">PF</th>
            <th scope="col" class="px-3 py-3">PTS</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr className="bg-white dark:bg-black text-black " key={player.id}>

                <td className="px-3 py-4">{player.Player}</td>
                <td className="px-3 py-4">{player.Pos}</td>
                <td className="px-3 py-4">{player.Age}</td>
                <td className="px-3 py-4">{player.Tm}</td>
                <td className="px-3 py-4">{player.G}</td>
                <td className="px-3 py-4">{player.GS}</td>
                <td className="px-3 py-4">{player.MP}</td>
                <td className="px-3 py-4">{player.FG}</td>
                <td className="px-3 py-4">{player.FGA}</td>
                <td className="px-3 py-4">{player.FGP}</td>
                <td className="px-3 py-4">{player.threeP}</td>
                <td className="px-3 py-4">{player.threePA}</td>
                <td className="px-3 py-4">{player.threePP}</td>
                <td className="px-3 py-4">{player.twoP}</td>
                <td className="px-3 py-4">{player.twoPA}</td>
                <td className="px-3 py-4" >{player.twoPP}</td>
                <td className="px-3 py-4">{player.EFGP}</td>
                <td className="px-3 py-4">{player.FT}</td>
                <td className="px-3 py-4">{player.FTA}</td>
                <td className="px-3 py-4">{player.FTP}</td>
                <td className="px-3 py-4">{player.ORB}</td>
                <td className="px-3 py-4">{player.DRB}</td>
                <td className="px-3 py-4">{player.TRB}</td>
                <td className="px-3 py-4">{player.AST}</td>
                <td className="px-3 py-4">{player.STL}</td>
                <td className="px-3 py-4">{player.BLK}</td>
                <td className="px-3 py-4">{player.TOV}</td>
                <td className="px-3 py-4">{player.PF}</td>
                <td className="px-3 py-4">{player.PTS}</td>
            </tr>
))}
</tbody>
</table>
</div>
);
}
export default TablePlayers;
