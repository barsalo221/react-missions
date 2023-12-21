import Select from "react-select";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../images/Logo.png";
import jsonTeams from "../teams.json";
export const SelectPlayers = () => {
  let navigate = useNavigate();
  const options = jsonTeams;

  const submitPlayer = async (selectedPlayers) => {
    // const data = JSON.stringify(selectedPlayers);
    // const jsonObject = JSON.parse(data);
    const selectedPlayersStrings = selectedPlayers.map((player) => {
      return Object.values(player);
    });
    await axios
      .post(
        "http://localhost:8080/secured/predictstats",
        selectedPlayersStrings,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/predictstats");
  };

  const handleChange = (SelectedOption) => {
    setSelectedValue(SelectedOption);
  };
  const [players, setPlayers] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleClickPlayer = (player) => {
    if (selectedPlayers.length < 5) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };
  const removePlayerUI = (e) => {
    const playerName = e.target.getAttribute("data-player");
    let indexToDelete = -1;
    for (let i = 0; i < selectedPlayers.length; i++) {
      if (selectedPlayers[i].Player === playerName) {
        indexToDelete = i;
      }
    }
    if (indexToDelete !== -1) {
      const selectedPlayersClone = [...selectedPlayers];
      selectedPlayersClone.splice(indexToDelete, 1);
      setSelectedPlayers(selectedPlayersClone);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/secured/data24", { withCredentials: true })
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const playersUI = players.map((player, index) => {
    if (selectedValue) {
      const isPlayerSelected = selectedPlayers.find(
        (curr) => curr.Player == player.Player
      );
      if (player.TeamId == selectedValue.teamId && !isPlayerSelected) {
        return (
          <div
            className="mb-2 text-s font-semibold text-gray-900 dark:text-white bg-cyan-100 grid-flow-col"
            key={index}
            onClick={() => handleClickPlayer(player)}
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
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-black rounded-lg ">
                  <td className="text-xs">{player.Player}</td>
                  <td className="text-xs ">{player.Pos}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
    }
  });

  const selectedPlayersUI = selectedPlayers.map((player, index) => {
    if (selectedPlayers.length <= 5) {
      return (
        <div
          className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white p-2 mt-2"
          key={index}
        >
          <h3 className="bg-blend-hue text-black shadow-sm">
            {" "}
            {player.Player}
          </h3>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-black uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
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
                <th scope="col" class="px-2 py-2">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-black rounded-lg text-black">
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
                <td className="px-3 py-4">
                  <button
                    className=" bg-red-600 text-black rounded-bl-lg rounded-br-lg rounded-t-lg"
                    data-player={player.Player}
                    onClick={removePlayerUI}
                  >
                    delete player
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
    }
  });

  const lightBlueStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid #b3e0f2", // Light blue border bottom
      color: state.isSelected ? "white" : "#0077cc", // White text for selected, light blue for unselected
      backgroundColor: state.isFocused ? "#b3e0f2" : "white", // Light blue background when focused
      padding: 12, // Adjust padding
    }),
    control: (provided, state) => ({
      ...provided,
      width: 250, // Adjust the width of the control
      border: "2px solid #b3e0f2", // Light blue border
      borderRadius: 8, // Add border radius
      boxShadow: state.isFocused ? "0 0 10px rgba(0, 119, 204, 0.5)" : "none", // Light blue box shadow when focused
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#0077cc", // Light blue text color
      fontSize: "16px", // Change font size
      fontWeight: "bold", // Apply bold style
    }),
  };
  return (
    <div>
      <div className=" text-black">
        <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-emerald-400 md:text-5xl lg:text-6xl p-16">
          <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-red-500 from-blue-500">
            Pred - Sport{" "}
          </span>{" "}
          <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-red-500 from-blue-500">
            Predict Stats
          </span>{" "}
        </h1>
        <div className="container">
          <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row p-2 mb-10">
            <img
              className=" rounded-t-lg object-cover md:h-auto md:w-52 md:rounded-none md:rounded-l-lg"
              src={logo}
              alt="logo"
            />
            <div className="flex flex-col justify-start p-1">
              <h1 className="container">prediction of points</h1>
              <Select
                className="text-black container"
                value={selectedValue}
                options={options}
                onChange={handleChange}
                styles={lightBlueStyles}
                t
              />
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 pl-2">
                <br /> On the site you can choose players from all NBA teams.
                <br /> then we will make a prediction on their statistics with
                the help of our linear regression model and show the amount of
                future points they will make.
                <br /> <br /> have fun
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-transparent">
        <div className="w-auto m-auto p-10">{playersUI}</div>
        <div className=" mx-6 mt-8 h-auto flex-grow-0 overflow-auto ">
          {selectedPlayersUI}
        </div>
      </div>

      {selectedPlayers.length === 5 && (
        <div className="container">
          <button
            className="text-black bg-primary-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="button"
            onClick={() => submitPlayer(selectedPlayers)}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
