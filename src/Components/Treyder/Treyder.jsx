import React, { useState } from 'react'
import Searchbar from '../Searchbar/Searchbar';
import './Treyder.scss';
import Data from "../../Assets/Data/tableData.json";
import { Link } from "react-router-dom";

function Treyder() {

    const [ search, setSearch ] = useState("");

    const handleFilter = (val) => {
        if(search === ""){
            return val;
        }else if (val.last_name.toLowerCase().includes(search.toLowerCase())){
            return val;
        }
    }
    
  return (
    <div className='treyder'>
        {/* ====== Search Bar import ===== */}
        <Searchbar setSearch={setSearch} />
        {/* <!--for demo wrap--> */}
        <div className="tbl-header">
            <table cellPadding={0} cellSpacing={0} border={0}>
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Биржа</th>
                    <th>Спот/Фьючерсы</th>
                    <th>Доходность за месяц</th>
                    <th>Уровень риска</th>
                    <th>подписчики</th>
                    <th>Цена</th>
                    <th> </th>
                </tr>
            </thead>
            </table>
        </div>
        <div className="tbl-content">
            <table cellPadding={0} cellSpacing={0} border={0}>
            {Data.length > 0 && <tbody>
                {Data.filter((val) => handleFilter(val)).map(d => (
                    <tr key={d.id}>
                        <td>
                            <div>
                            <img src={`${d.img}`} width="39" height="39" alt={`${d.last_name}`} /> {d.last_name}
                            </div>
                        </td>
                        <td>
                            <div>
                            <i className='bx bxl-bing'></i>
                            {d.birja}
                            </div>
                        </td>
                        <td>{d.gender}</td>
                        <td>{d.precent} %</td>
                        <td>{d.risk}</td>
                        <td>{d.precent}</td>
                        <td>{d.money}</td>
                        <td>
                            <Link to={`${d.id}`}>
                                <i className='bx bx-right-arrow-alt'></i>
                            </Link>    
                        </td>
                    </tr>
                ))}
            </tbody>}
            </table>
        </div>
    </div>
  )
}

export default Treyder