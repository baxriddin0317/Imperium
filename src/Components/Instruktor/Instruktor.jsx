import React from 'react'
import "./Instruktor.scss";
import Obyekt from "../../Assets/Data/Instruktor.json";
import { useState } from 'react';

function Instruktor() {
    const [ index, setIndex ] = useState(0);
    const [ nextIndex, setNextIndex ] = useState(6);

    const newObj = Obyekt.slice(index, nextIndex);
    const loopLength = Math.ceil(Obyekt.length / 6);
    let element = [];
    for (let index = 1; index <= loopLength; index++) {
        element.push(index);
    }

    const handleSpan = (evt, el) => {
        setIndex(el * 6);
        setNextIndex((el+1)*6);         
    }

    const arrowClick = (s) => {
        if(s === "right"){
            if(index < Obyekt.length - 6){
                setIndex(index + 6);
                setNextIndex(nextIndex+6);
            }else{
                setIndex(0);
                setNextIndex(6);
            }           
        }else{
            if(index > 0){
                setIndex(index - 6);
                setNextIndex(nextIndex - 6);
            }else{
                setIndex(0);
                setNextIndex(6);
            } 
        }
    }

  return (
    <div className='instruktor'>
        <div className="instruktor__block">
            <h2 className="instruktor__block-title">
            Инструкции 
            </h2>

            {newObj.length > 0 && <ul className="instruktor__block-list">
                {newObj.map(obj => (    
                    <li key={obj.id} className="instruktor__block-item">
                        <img src={obj.imgUrl} alt={obj.title} className="instruktor__block-img" />
                        <h3 className="instruktor__block-name">
                            {obj.title}
                        </h3>
                    </li>
                ))}
            </ul>
            }

            <div className="instruktor__arrows">
                <button className="instruktor__arrows-left" onClick={() => arrowClick("left")}>
                <i className='bx bx-chevron-left'></i>
                </button>
                {element.length > 0 && 
                    element.map((el, index) => (
                        <span key={el} onClick={evt => handleSpan(evt, index)} >{el}</span>
                    ))
                }
                <button className="instruktor__arrows-right" onClick={() => arrowClick("right")}>
                <i className='bx bx-chevron-right'></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Instruktor