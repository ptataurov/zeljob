import React from 'react'
import './modal.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Modal = ({ id, setShow }) => {
  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Успешно</h5>
            <button
              type="button"
              className="close"
              onClick={() => setShow(false)}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="mb-0">Вакансия опубликована и доступна по ссылке:</p>
            <Link
              to={`vacancy/${id}`}
              className="h3 my-3 d-inline-block"
              onClick={() => setShow(false)}
            >
              Ссылка
            </Link>
            <p className="mb-0">Вы можете добавить еще одну вакансию.</p>
          </div>
          <div className="modal-footer">
            <Link
              to="/"
              className="btn btn-secondary"
              onClick={() => setShow(false)}
            >
              На главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  setShow: PropTypes.func.isRequired
}

export default Modal
