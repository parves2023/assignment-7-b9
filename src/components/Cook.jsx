import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Cook({ totalCount, entries, addTocook, totalCooking, cooking }) {
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);
  
    useEffect(() => {
        let time = 0;
        let calories = 0;
    
        cooking.forEach(entrie => {
          // Extract the numeric value from the time and calories strings
          const timeValue = parseInt(entrie.time.split(' ')[0]); // Get the first part of the time string
          const calorieValue = parseInt(entrie.calories.split(' ')[0]); // Get the first part of the calories string
    
          // Add to the totals
          time += isNaN(timeValue) ? 0 : timeValue; // Add time if it's a number
          calories += isNaN(calorieValue) ? 0 : calorieValue; // Add calories if it's a number
        });
    
        setTotalTime(time);
        setTotalCalories(calories);
      }, [cooking]);

  return (
    <div className="col-span-3 rounded-2xl padding-5 pt-2 shadow-xl border border-gray-200">
      <div className="overflow-x-auto">
        <table className="table my-4 border-b-2 border-gray-300">
          {/* head */}
          <thead>
            <tr>
              <th colSpan="4" className="text-center text-3xl font-bold">
                Want to cook: {totalCount}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
            {entries.map((entrie, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>{entrie.name}</th>
                <th>{entrie.time}</th>
                <th>{entrie.calories}</th>
                <th>
                  <button
                    onClick={() => addTocook(entrie)}
                    className="btn btn-success"
                  >
                    Add to cook
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table my-4 border-b-2 border-gray-300">
          {/* head */}
          <thead>
            <tr>
              <th colSpan="4" className="text-center text-3xl font-bold">
                Currently cooking: {totalCooking}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>

            {cooking.map((entrie, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>{entrie.name}</th>
                <th>{entrie.time}</th>
                <th>{entrie.calories}</th>
              </tr>
            ))}

            <tr>
              <th>Total Items: {cooking.length}</th>
              <th></th>
              <th>Total: {totalTime} min.</th>
              <th>Total: {totalCalories} calories</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cook;
