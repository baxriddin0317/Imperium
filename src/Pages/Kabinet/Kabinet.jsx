import React from 'react';
import './Kabinet.scss';
import Head from '../../Components/Head/Head';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import User from '../../Components/User/User';
import Modal from '../../Components/Modal/Modal';
import { useState } from 'react';
import Treyder from '../../Components/Treyder/Treyder';

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
                        <Route path='group/:id' element={<p>salom</p>} />
                        <Route path='statistika' element={<p>Статистика</p>} />
                        <Route path='instructions' element={<p>Инструкции</p>} />
                        <Route path='help' element={<p>Помощь</p>} />
                    </Routes>
                </div>
            </div>
          </div>
          {modal ? <Modal setModal={setModal} /> : null}
      </div>
  );
}

export default Kabinet;
