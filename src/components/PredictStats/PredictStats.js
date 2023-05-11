import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const PredictStats = () => {

    const [players, setPlayers] = useState("");

    // useEffect(() => {
    //     axios.post('http://localhost:8080/secured/predictstats',{ withCredentials: true })
    //       .then(response =>{ 
    //         setPlayers(response.data)})
    //       .catch(error => console.log(error));
    //   }, []);
  
      return(
        <div>
            <h2>Predict Stats</h2>
            <div>
                <h3>players</h3>
                <div> 
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead>
                            <tr className=''>
                            <th>Predict</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-black rounded-lg' >
                                    <td scope=''>{players}</td>
                                </tr>
            
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
      )
}

export default PredictStats;
