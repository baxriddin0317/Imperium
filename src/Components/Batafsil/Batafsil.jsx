import React from 'react'
import { useParams } from 'react-router-dom';
import Data from "../../Assets/Data/tableData.json";

function Batafsil() {
    let { id } = useParams();
    const obj = Data.filter(obj => obj.id === id);
    console.log(obj);
  return (
    <div>
      batafsil
    </div>
  )
}

export default Batafsil