import React from 'react';
import './Kabinet.scss';
import Head from '../../Components/Head/Head';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import User from '../../Components/User/User';
import Modal from '../../Components/Modal/Modal';
import { useState } from 'react';
import Treyder from '../../Components/Treyder/Treyder';
import Batafsil from '../../Components/Batafsil/Batafsil';
import Statistika from '../../Components/Statistika/Statistika';
import Instruktor from '../../Components/Instruktor/Instruktor';
import Help from '../../Components/Help/Help';

function Kabinet() {
    const [ modal, setModal ] = useState(false);
  return (
      <div className="kabinet">
          <div className="kabinet__block">
            <Head />
            <div className="kabinet__section">
                <Sidebar />

                <div className="kabinet__content">
                    <Routes>
                        <Route path='' element={<User setModal={setModal} />} />
                        <Route path='group' element={<Treyder />} />
                        <Route path='group/:id' element={<Batafsil />} />
                        <Route path='statistika' element={<Statistika />} />
                        <Route path='instructions' element={<Instruktor />} />
                        <Route path='help' element={<Help />} />
                    </Routes>
                </div>
            </div>
          </div>
          {modal ? <Modal setModal={setModal} /> : null}
      </div>
  );
}

export default Kabinet;
