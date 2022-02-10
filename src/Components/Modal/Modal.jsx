import React from 'react';
import './Modal.scss';

function Modal({setModal}) {
  return <div className='modal' onClick={() => setModal(false)}>
      <div className="modal__content">
          <h2 className="modal__title">
          Создание Futures канала
          </h2>
          <form className="modal__form" onSubmit={e => e.preventDefault()}>
              <label className='modal__form-label' htmlFor="file">
                  <span>
                  <i className='bx bx-image-add'></i>
                  </span>
                  <small>Загрузить аватар канала</small>
              </label>
              <input type="file" id='file' className='modal__form-file' />
              <input type="text" className='modal__form-control' placeholder='Название канала' />
              <select className='modal__form-control'>
                  <option value="birja">
                  Биржа
                  </option>
                  <option value="birja">
                  Биржа
                  </option>
                  <option value="birja">
                  Биржа
                  </option>
              </select>
              <select className='modal__form-control'>
                  <option value="riska">
                  Уровень риска
                  </option>
              </select>
              <input type="text" className='modal__form-control' placeholder='Стоимость подписки (от 50$) ' />
              <input type="text" className='modal__form-control' placeholder='API KEY' />
              <input type="text" className='modal__form-control' placeholder='SECRET KEY' />
              <button className='modal__form-btn' onClick={() => setModal(false)}>Создать канал </button>
          </form>
      </div>
  </div>;
}

export default Modal;
