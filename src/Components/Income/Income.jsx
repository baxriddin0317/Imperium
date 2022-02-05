import React from 'react';
import './Income.scss';
import Img1 from '../../Assets/Img/img1.png';
import Img2 from '../../Assets/Img/img2.png';

function Income({data}) {
    console.log(data);
  return (
    <div className='income'>
        <div className="container income__content">
            <h2 className="income__content-title">
                {data.title}
            </h2>
            <p className="income__content-text">
                {data.text}
            </p>

            <div className="income__content-box">
                <img src={Img1} alt="" />

                <div className="income__content-info">
                    <h3>{data.boxName1}</h3>
                    <span></span>
                    <p>{data.boxText1}</p>
                </div>
            </div>

            <div className="income__content-box">
                <div className="income__content-info">
                    <h3>{data.boxName2}</h3>
                    <span></span>
                    <p>{data.boxText2}</p>
                </div>

                <img src={Img2} alt="" />
            </div>

            <div className="income__card">
                <h2 className="income__card-title">
                {data.listTitle}
                </h2>
                <span className="income__card-line"></span>
                <ul className="income__card-list">
                    <li className="income__card-item">
                        <div className="income__card-icon">
                        <div className="income__card-icon-before"></div>
                        <i className='bx bxs-food-menu'></i>
                        <div className="income__card-icon-after"></div>
                        </div>
                        <h3 className="income__card-name">
                        {data.cardTitle}
                        </h3>
                        <p className="income__card-text">
                            {data.cardText}
                        </p>
                    </li>
                    <li className="income__card-item">
                        <div className="income__card-icon">
                        <div className="income__card-icon-before"></div>
                        <i className='bx bxs-food-menu'></i>
                        <div className="income__card-icon-after"></div>
                        </div>
                        <h3 className="income__card-name">
                        {data.cardTitle}
                        </h3>
                        <p className="income__card-text">
                            {data.cardText}
                        </p>
                    </li>
                    <li className="income__card-item">
                        <div className="income__card-icon">
                        <div className="income__card-icon-before"></div>
                        <i className='bx bxs-food-menu'></i>
                        <div className="income__card-icon-after"></div>
                        </div>
                        <h3 className="income__card-name">
                        {data.cardTitle}
                        </h3>
                        <p className="income__card-text">
                            {data.cardText}
                        </p>
                    </li>                    
                </ul>
            </div>

            <div className="income__media">
            <h2 className="income__media-title">
            {data.mediaTitle}
                </h2>
                <span className="income__media-line"></span>
                
                <div className="income__media-video">
                <iframe width={1012} height={583} src="https://www.youtube.com/embed/pElk1ShPrcE?list=RDGMEM916WJxafRUGgOvd6dVJkeQ" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Income;
