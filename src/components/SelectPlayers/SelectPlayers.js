import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGif from '../images/logoGif.gif';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import logo from '../images/Logo.png'
import { TailSpin } from 'react-loader-spinner';
import jsonTeams from '../teams.json'

export const SelectPlayers = () => {

    let navigate = useNavigate();
    const options= jsonTeams;



    const sumbitPlayers = async (selectedPlayers) => {
      // const data = JSON.stringify(selectedPlayers);
      // const jsonObject = JSON.parse(data);
      const selectedPlayersStrings = selectedPlayers.map((player)=>{return Object.values(player)})
      await axios.post('http://localhost:8080/secured/predictstats', selectedPlayersStrings, {
        withCredentials: true
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      });
      navigate("/predictstats")
      }

      const handleChange = (SelectedOption) => {
        setSelectedValue(SelectedOption);
      }
      const [players, setPlayers] = useState([]);
      const [selectedValue, setSelectedValue] = useState(null);
      const [selectedPlayers , setSelectedPlayers] = useState([]);
      const [cookies, setCookie] = useCookies();


      const handleClickPlayer = (player) => {
        
        if(selectedPlayers.length < 5){
          setSelectedPlayers([...selectedPlayers , player])
        }
      }
      const removePlayerUI = (e) => {
        const playerName = e.target.getAttribute("data-player");
        let indexToDelete = -1;
        for(let i = 0; i < selectedPlayers.length ; i++){
          if(selectedPlayers[i].Player === playerName){
            indexToDelete = i;
          }
      }
      if(indexToDelete !== -1){
        const selectedPlayersClone = [...selectedPlayers];
        selectedPlayersClone.splice(indexToDelete, 1);
        setSelectedPlayers(selectedPlayersClone);
      }
      }
        
    useEffect(() => {
      axios.get('http://localhost:8080/secured/data',{ withCredentials: true })
        .then(response =>{ 
          setPlayers(response.data)})
        .catch(error => console.log(error));
    }, []);

      const playersUI = players.map((player, index)=>{
        if(selectedValue){
          const isPlayerSelected = selectedPlayers.find((curr)=>curr.Player == player.Player);
          if(player.TmID == selectedValue.teamId && !isPlayerSelected){
            return(
              <div className='mb-2 text-s font-semibold text-gray-900 dark:text-white bg-cyan-100 grid-flow-col' key={index} onClick={()=>handleClickPlayer(player)}>
                <table className='w-full text-sm text-left text-black dark:text-gray-400 '>
                <thead className="text-xs text-black uppercase bg-blue-300 dark:bg-gray-700 dark:text-gray-400 ">
                  <tr>
                    <th scope="col" class="px-2 py-2">Player</th>
                    <th scope="col" class="px-2 py-2">Pos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-black rounded-lg '>
                    <td className='text-xs'>{player.Player}</td>
                    <td className='text-xs '>{player.Pos}</td>
                  </tr>
                </tbody>
                </table>
                
              </div>
            )
          } 
        }
      })
  
      const selectedPlayersUI = selectedPlayers.map((player , index)=>{
        
        if(selectedPlayers.length <= 5){
          return(
             
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg bg-cyan-100 ' key={index}>
              
             <h3 className='bg-blend-hue text-black shadow-sm'> {player.Player}</h3>
             <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className="text-xs text-black uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-2 py-2">Player</th>
                  <th scope="col" class="px-2 py-2">Pos</th>
                  <th scope="col" class="px-2 py-2"> Age</th>
                  <th scope="col" class="px-2 py-2">Tm</th>
                  <th scope="col" class="px-2 py-2">G</th>
                  <th scope="col" class="px-2 py-2">GS</th>
                  <th scope="col" class="px-2 py-2">MP</th>
                  <th scope="col" class="px-2 py-2">FG</th>
                  <th scope="col" class="px-2 py-2">FGA</th>
                  <th scope="col" class="px-2 py-2">FG%</th>
                  <th scope="col" class="px-2 py-2">3P</th>
                  <th scope="col" class="px-2 py-2">3PA</th>
                  <th scope="col" class="px-2 py-2">3P%</th>
                  <th scope="col" class="px-2 py-2">2P</th>
                  <th scope="col" class="px-2 py-2">2PA</th>
                  <th scope="col" class="px-2 py-2">2P%</th>
                  <th scope="col" class="px-2 py-2">eFG%</th>
                  <th scope="col" class="px-2 py-2">FT</th>
                  <th scope="col" class="px-2 py-2">FTA</th>
                  <th scope="col" class="px-2 py-2">FT%</th>
                  <th scope="col" class="px-2 py-2">ORB</th>
                  <th scope="col" class="px-2 py-2">DRB</th>
                  <th scope="col" class="px-2 py-2">TRB</th>
                  <th scope="col" class="px-2 py-2">AST</th>
                  <th scope="col" class="px-2 py-2">STL</th>
                  <th scope="col" class="px-2 py-2">BLK</th>
                  <th scope="col" class="px-2 py-2">TOV</th>
                  <th scope="col" class="px-2 py-2">PF</th>
                  <th scope="col" class="px-2 py-2">PTS</th>
                  <th scope="col" class="px-2 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-black rounded-lg text-black'>

                  <td  className="px-3 py-4">{player.Player}</td>
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
                  <td className="px-3 py-4">
                    <button className =' bg-red-600 text-black rounded-bl-lg rounded-br-lg rounded-t-lg' data-player={player.Player} onClick={removePlayerUI}>delete player</button>
                  </td>

                </tr>
              </tbody>


             </table>
             

            
            </div>
          )

        }else{}
      })
      const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: state.isSelected ? 'red' : 'blue',
          padding: 20,
        }),
        control: () => ({
          // none of react-select's styles are passed to <Control />
          width: 200,
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

      return (
        <div className='bg-cyan-100'>

            <div className=' text-black' >
               <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-emerald-400 md:text-5xl lg:text-6xl"><span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-red-500 from-blue-500">Pred - Sport </span> <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-red-500 from-blue-500">Predict Stats</span> <></></h1>
               <p className='text-3xl text'>Wellcome {cookies.userName}!</p>
               <img className="object-fill h-48 w-48 bg-transparent container" src = {logo}  alt="image description"/>
            <p className='text-center mb-3 font-extrabold text-black md:text-xl dark:text-gray-400'><br/> On the site you can choose players from all NBA teams<br/> after
            We will make a prediction on their statistics with the help of our<br/> linear regression model and show the amount of future points they will make
            have fun </p><br/>
           <Select
            className='text-black container'
            value={selectedValue}
            options = {options}
            onChange={handleChange}
            styles={customStyles}
             />
            
            </div>
            <div className="flex bg-cyan-100">
              <div className="w-auto m-auto">
                {playersUI}
              </div >
              <div className=" mx-6 h-auto flex-grow-0 overflow-auto" >
                {selectedPlayersUI}
              </div>                
            </div>  
            <div className='container'>
            <button className=" text-black bg-primary-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" 
                    type="button"
                    onClick={() => {
                    sumbitPlayers(selectedPlayers)}}
            >
              sumbit
            </button> 
            </div>
                        
          </div>
          
        );
}