import React from "react";
import Product from "./Product";
import { useState } from "react";
import Cook from "./Cook";
import Alert from "./Alert";

function Recipe() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  let [totalCount, totalSetCount] = useState(0);
  let [totalCooking, SettotalCooking] = useState(0);
  const [entries, setEntries] = useState([]);
  const [cooking, setcooking] = useState([]);


  const addTocook = (entrie) => {
    // Filter out the selected entry from entries
    const remainingEntries = entries.filter(allentrie => allentrie !== entrie);
    setEntries(remainingEntries);
  
    // Update total count and cooking count
    totalSetCount(totalCount - 1);
    SettotalCooking(totalCooking + 1);
    
    // Directly add the selected entry to the cooking array
    setcooking([...cooking, entrie]);
  };
  


  let handleClick = (name, time, calories) => {
    const isDuplicate = entries.some((entry) => entry.name === name);
    if (isDuplicate) {
      setAlertMessage(`${name} already exists!`);
      setShowAlert(true);

      // Hide the alert after 2 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      
      return; // Prevent adding duplicate
    }


    totalSetCount(totalCount + 1);
    const newEntry = { name, time, calories };
    setEntries([...entries, newEntry]);
  };
  


  return (
    <div className="container mx-auto relative">
      {/* text part */}
      <div className="my-10 text-center">
        <h1 className="text-3xl font-bold mb-5">Our Recipes</h1>
        <p className="w-8/12 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque
        </p>
      </div>

      {showAlert && <Alert  message={alertMessage} />}

      {/* cards area  */}
      <div className="grid grid-cols-7 gap-4">
        {/* all cards container  */}
        <div className="col-span-4">
          <div className="grid grid-cols-4 gap-4">
            {/* card one  */}

            <Product handleClick={handleClick} />
          </div>
        </div>

        <Cook cooking={cooking} totalCooking={totalCooking} addTocook={addTocook} totalCount={totalCount} entries={entries}  />
      </div>
    </div>
  );
}

export default Recipe;
