import React from 'react'
import './publish-form.scss'
import PropTypes from 'prop-types'
import PublishFormCard from '../publish-form-card/publish-form-card'
import ListItem from '../list-item/list-item'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/src/createNumberMask'

const PublishForm = props => {
  const {
    addListItem,
    deleteListItem,
    setResps,
    setSkills,
    handleChange,
    onSubmit,
    loading,
    companyName,
    site,
    aboutCompany,
    position,
    salary,
    address,
    vacancyDesc,
    employment,
    termPublish,
    experience,
    education,
    email,
    respValue,
    skillValue,
    resps,
    skills,
    name,
    phone
  } = props

  return (
    <form
      className="publish-form needs-validation"
      noValidate
      onSubmit={onSubmit}
    >
      <PublishFormCard title="Информация о компании">
        <div className="form-row mb-4">
          <div className="form-group col-md-6 mb-0">
            <label>Название компании</label>
            <input
              type="text"
              className="form-control"
              placeholder="Кафе АндерСон"
              value={companyName}
              onChange={e => handleChange(e, 'companyName')}
              required
            />
            <small className="form-text text-muted text-right">
              Обязательное поле
            </small>
          </div>
          <div className="form-group col-md-6 mb-0">
            <label>Сайт</label>
            <input
              type="url"
              className="form-control"
              placeholder="cafe-anderson.ru"
              value={site}
              onChange={e => handleChange(e, 'site')}
            />
          </div>
        </div>
        <div className="form-group mb-2">
          <label>О компании</label>
          <textarea
            className="form-control"
            rows="3"
            value={aboutCompany}
            onChange={e => handleChange(e, 'aboutCompany')}
            required
          />
          <small className="form-text text-muted text-right">
            Обязательное поле
          </small>
        </div>
      </PublishFormCard>
      <PublishFormCard title="Информация о вакансии">
        <div className="form-row mb-4">
          <div className="form-group col-md-6 mb-0">
            <label>Должность</label>
            <input
              type="text"
              className="form-control"
              placeholder="Повар"
              value={position}
              onChange={e => handleChange(e, 'position')}
              required
            />
            <small className="form-text text-muted text-right">
              Обязательное поле
            </small>
          </div>
          <div className="form-group col-md-6 mb-0">
            <label>Зарплата</label>
            <MaskedInput
              mask={createNumberMask()}
              className="form-control"
              placeholder="По договоренности"
              value={salary}
              onChange={e => handleChange(e, 'salary')}
            />
          </div>
        </div>
        <div className="form-group mb-4">
          <label>Адрес места работы</label>
          <input
            type="text"
            className="form-control"
            placeholder="пл. Юности, 2"
            value={address}
            onChange={e => handleChange(e, 'address')}
          />
        </div>
        <div className="form-group mb-4">
          <label>Описание вакансии</label>
          <textarea
            className="form-control"
            rows="3"
            value={vacancyDesc}
            onChange={e => handleChange(e, 'vacancyDesc')}
            required
          />
          <small className="form-text text-muted text-right">
            Обязательное поле
          </small>
        </div>
        <div className="form-group mb-5">
          <label>Обязанности</label>
          <ul className="publish-form__list">
            {!resps.length && (
              <li className="publish-form__list-item-example">
                <span className="publish-form__list-item-example-span">
                  Приготовление блюд по техническим картам{' '}
                  <span className="text-primary">(пример)</span>
                </span>
              </li>
            )}
            {resps.map(item => {
              const { value, id } = item

              return (
                <ListItem
                  value={value}
                  id={id}
                  deleteItem={deleteListItem('resps')}
                  key={id}
                />
              )
            })}
          </ul>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={respValue}
              onChange={e => setResps(e)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-success"
                onClick={addListItem('resps')}
                disabled={!respValue}
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
        <div className="form-row mb-2">
          <div className="form-group col-md-6 mb-md-0">
            <label>Занятость</label>
            <select
              className="custom-select"
              value={employment}
              onChange={e => handleChange(e, 'employment')}
            >
              <option value="Полная занятость">Полная</option>
              <option value="Частичная занятость">Частичная</option>
              <option value="Проектная занятость">Проектная</option>
              <option value="Стажировка">Стажировка</option>
            </select>
          </div>
          <div className="form-group col-md-6 mb-0">
            <label>Срок размещения вакансии</label>
            <select
              className="custom-select"
              value={termPublish}
              onChange={e => handleChange(e, 'termPublish')}
            >
              <option value={'90'}>90 дней</option>
              <option value={'30'}>30 дней</option>
              <option value={'14'}>14 дней</option>
            </select>
          </div>
        </div>
      </PublishFormCard>
      <PublishFormCard title="Информация о сотруднике">
        <div className="form-row mb-5">
          <div className="form-group col-md-6 mb-md-0">
            <label>Опыт работы</label>
            <select
              className="custom-select"
              value={experience}
              onChange={e => handleChange(e, 'experience')}
            >
              <option value="не нужен">Не важно</option>
              <option value="от года">От года</option>
              <option value="от 3-х лет">От 3-х лет</option>
              <option value="от 5-ти лет">От 5-ти лет</option>
            </select>
          </div>
          <div className="form-group col-md-6 mb-0">
            <label>Образование</label>
            <select
              className="custom-select"
              value={education}
              onChange={e => handleChange(e, 'education')}
            >
              <option value="не важно">Не важно</option>
              <option value="среднее специальное">Среднее специальное</option>
              <option value="неоконченное высшее">Неоконченное высшее</option>
              <option value="высшее">Высшее</option>
            </select>
          </div>
        </div>
        <div className="form-group mb-2">
          <label>Необходимые навыки</label>
          <ul className="publish-form__list">
            {!skills.length && (
              <li className="publish-form__list-item-example">
                <span className="publish-form__list-item-example-span">
                  Хорошее знание европейской кухни{' '}
                  <span className="text-primary">(пример)</span>
                </span>
              </li>
            )}
            {skills.map(item => {
              const { value, id } = item

              return (
                <ListItem
                  value={value}
                  id={id}
                  deleteItem={deleteListItem('skills')}
                  key={id}
                />
              )
            })}
          </ul>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={skillValue}
              onChange={e => setSkills(e)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-success"
                onClick={addListItem('skills')}
                disabled={!skillValue}
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      </PublishFormCard>
      <PublishFormCard title="Контакты">
        <div className="form-row mb-2">
          <div className="form-group col-md-6 mb-1 mb-md-2">
            <label>Ваше имя</label>
            <input
              type="text"
              className="form-control"
              placeholder="Анастасия Иванова"
              value={name}
              onChange={e => handleChange(e, 'name')}
              required
            />
            <small className="form-text text-muted text-right">
              Обязательное поле
            </small>
          </div>
          <div className="form-group col-md-6 mb-1 mb-md-2">
            <label>Телефон</label>
            <MaskedInput
              mask={[
                '+',
                '7',
                ' ',
                '(',
                /[1-9]/,
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/
              ]}
              className="form-control"
              placeholder="+7"
              value={phone}
              onChange={e => handleChange(e, 'phone')}
              required
            />
            <small className="form-text text-muted text-right">
              Обязательное поле
            </small>
          </div>
          <div className="form-group col-md-6 mb-0">
            <label>Почта</label>
            <input
              type="email"
              className="form-control"
              placeholder="ivanova@mail.ru"
              value={email}
              onChange={e => handleChange(e, 'email')}
              required
            />
            <small className="form-text text-muted text-right">
              Обязательное поле
            </small>
          </div>
        </div>
      </PublishFormCard>
      <button
        type="submit"
        className="btn btn-success btn-block"
        disabled={loading}
      >
        {loading ? (
          <span className="spinner-border spinner-border-sm" />
        ) : (
          'Опубликовать'
        )}
      </button>
    </form>
  )
}

PublishForm.propTypes = {
  addListItem: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  setResps: PropTypes.func.isRequired,
  setSkills: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  companyName: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  aboutCompany: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  vacancyDesc: PropTypes.string.isRequired,
  employment: PropTypes.string.isRequired,
  termPublish: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  respValue: PropTypes.string.isRequired,
  skillValue: PropTypes.string.isRequired,
  resps: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

export default PublishForm
