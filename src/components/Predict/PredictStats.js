import React, { useState, useEffect } from "react";
import axios from "axios";
import LinearregressionCard from "../LinearRegressionCard/LinearregressionCard";

export const PredictStats = () => {
  const [playerPredictPts, setplayerPredictPts] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/secured/display_stats", {
        withCredentials: true,
      })
      .then((response) => {
        setplayerPredictPts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-emerald-400 md:text-5xl lg:text-6xl">
        <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-red-500 from-blue-500">
          Predict Stats
        </span>
        <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-red-500 from-blue-500">
          Using Linear Regression
        </span>
      </h1>
      <LinearregressionCard></LinearregressionCard>
      <p></p>
      <p className="mt-20 container text-xl font-extrabold">
        now Pred Sport model got all stats and make linear Regression and
        display the future points per game
      </p>
      <div className="container h-screen ">
        <h3 className="my-32">players Predict Points</h3>
        <div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xl uppercase bg-yellow-200 dark:bg-gray-700 dark:text-black text-black">
              <tr className="">
                <th scope="col" class="px-3 py-3 ">
                  {playerPredictPts[1]}{" "}
                </th>
                <th scope="col" class="px-3 py-3 ">
                  {playerPredictPts[3]}{" "}
                </th>
                <th scope="col" class="px-3 py-3 ">
                  {playerPredictPts[5]}{" "}
                </th>
                <th scope="col" class="px-3 py-3 ">
                  {playerPredictPts[7]}{" "}
                </th>
                <th scope="col" class="px-3 py-3 ">
                  {playerPredictPts[9]}{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-black rounded-lg text-red-300">
                <td className=" text-xl px-3 py-4 ">
                  {playerPredictPts[0]} PTS
                </td>
                <td className="text-xl px-3 py-4 ">
                  {playerPredictPts[2]} PTS
                </td>
                <td className="text-xl px-3 py-4 ">
                  {playerPredictPts[4]} PTS
                </td>
                <td className="text-xl px-3 py-4 ">
                  {playerPredictPts[6]} PTS
                </td>
                <td className="text-xl px-3 py-4 ">
                  {playerPredictPts[8]} PTS
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-32">
            <p className="text-xl">
              The model is trained on the tables that are displayed on the
              website:
              <br />
              and bases the prediction on these tables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictStats;
