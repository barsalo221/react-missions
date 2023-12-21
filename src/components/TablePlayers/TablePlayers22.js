import Select from "react-select";
import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../images/Logo.png";
import jsonTeams from "../teams.json";

export default function TablePlayers22() {
  const options = jsonTeams;
  const selectedPlayers = [];
  const [players, setPlayers] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = (SelectedOption) => {
    setSelectedValue(SelectedOption);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/secured/data22", { withCredentials: true })
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const playersUI = players.map((player, index) => {
    if (selectedValue) {
      if (player.TeamId == selectedValue.teamId) {
        return (
          <div
            className="mb-2 text-s font-semibold text-gray-900 dark:text-white bg-cyan-100 grid-flow-col"
            key={index}
          >
            <table className="w-full text-sm text-left text-black dark:text-gray-400 ">
              <thead className="text-xs text-black uppercase bg-blue-300 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" class="px-2 py-2">
                    Player
                  </th>
                  <th scope="col" class="px-2 py-2">
                    Pos
                  </th>
                  <th scope="col" class="px-2 py-2">
                    {" "}
                    Age
                  </th>
                  <th scope="col" class="px-2 py-2">
                    Tm
                  </th>
                  <th scope="col" class="px-2 py-2">
                    G
                  </th>
                  <th scope="col" class="px-2 py-2">
                    GS
                  </th>
                  <th scope="col" class="px-2 py-2">
                    MP
                  </th>
                  <th scope="col" class="px-2 py-2">
                    FG
                  </th>
                  <th scope="col" class="px-2 py-2">
                    FGA
                  </th>
                  <th scope="col" class="px-2 py-2">
                    FG%
                  </th>
                  <th scope="col" class="px-2 py-2">
                    3P
                  </th>
                  <th scope="col" class="px-2 py-2">
                    3PA
                  </th>
                  <th scope="col" class="px-2 py-2">
                    3P%
                  </th>
                  <th scope="col" class="px-2 py-2">
                    2P
                  </th>
                  <th scope="col" class="px-2 py-2">
                    2PA
                  </th>
                  <th scope="col" class="px-2 py-2">
                    2P%
                  </th>
                  <th scope="col" class="px-2 py-2">
                    eFG%
                  </th>
                  <th scope="col" class="px-2 py-2">
                    FT
                  </th>
                  <th scope="col" class="px-2 py-2">
                    FTA
                  </th>
                  <th scope="col" class="px-2 py-2">
                    FT%
                  </th>
                  <th scope="col" class="px-2 py-2">
                    ORB
                  </th>
                  <th scope="col" class="px-2 py-2">
                    DRB
                  </th>
                  <th scope="col" class="px-2 py-2">
                    TRB
                  </th>
                  <th scope="col" class="px-2 py-2">
                    AST
                  </th>
                  <th scope="col" class="px-2 py-2">
                    STL
                  </th>
                  <th scope="col" class="px-2 py-2">
                    BLK
                  </th>
                  <th scope="col" class="px-2 py-2">
                    TOV
                  </th>
                  <th scope="col" class="px-2 py-2">
                    PF
                  </th>
                  <th scope="col" class="px-2 py-2">
                    PTS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-black rounded-lg ">
                  <td className="px-3 py-4">{player.Player}</td>
                  <td className="px-3 py-4">{player.Pos}</td>
                  <td className="px-3 py-4">{player.Age}</td>
                  <td className="px-3 py-4">{player.TM}</td>
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
                  <td className="px-3 py-4">{player.twoPP}</td>
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
              </tbody>
            </table>
          </div>
        );
      }
    }
  });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 500,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  return (
    <div>
      <h1 className="text-center mb-4 text-3xl font-extrabold  md:text-5xl lg:text-6xl p-16">
        <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-yellow-300 from-black">
          Pred - Sport{" "}
        </span>{" "}
        <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-yellow-300 from-black">
          Players Stats 2022
        </span>
      </h1>
      <img
        className="object-fill h-48 w-48 bg-transparent container"
        src={logo}
        alt="image description"
      />
      <div className=" text-black">
        <Select
          className="text-black text-2xl w-full container font-extrabold p-20"
          value={selectedValue}
          options={options}
          onChange={handleChange}
          styles={customStyles}
        />
      </div>
      <div className="flex ">
        <div className="w-auto m-auto">{playersUI}</div>
      </div>
    </div>
  );
}
