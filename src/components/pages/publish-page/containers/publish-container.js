import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchVacancyPublish } from '../../../../actions'
import { trim, upperFirst } from 'lodash'
import uniqid from 'uniqid'
import { compose } from '../../../../utils'
import Modal from '../components/modal/modal'
import PublishForm from '../components/publish-form/publish-form'
import { CSSTransition } from 'react-transition-group'

const getDateStr = () => {
  const mapMonths = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
  ]
  const date = new Date()
  const dateStr = `${date.getDate()} ${mapMonths[date.getMonth()]}`

  return dateStr
}

const getTermPublish = state => {
  const { termPublish } = state
  const ONE_DAY = 1000 * 60 * 60 * 24

  return Date.now() + ONE_DAY * termPublish
}

const normalizeVacancyObj = obj => {
  const removeSpaces = str => str.replace(/[ \t\r]+/g, ' ')
  const normalizeStr = compose(
    trim,
    upperFirst,
    removeSpaces
  )
  const newObj = { ...obj }

  for (let key in newObj) {
    if (Array.isArray(newObj[key])) {
      newObj[key] = newObj[key].map(item =>
        normalizeStr(item.value).replace(/[.;,!?]$/, '')
      )
    } else {
      newObj[key] = normalizeStr(newObj[key])
    }
  }

  return newObj
}

class PublishContainer extends Component {
  static propTypes = {
    fetchVacancyPublish: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  state = {
    id: '',
    modalShow: false,
    companyName: '',
    site: '',
    aboutCompany: '',
    position: '',
    salary: '',
    address: '',
    vacancyDesc: '',
    employment: 'Полная занятость',
    termPublish: '90',
    experience: 'не нужен',
    education: 'не важно',
    email: '',
    respValue: '',
    skillValue: '',
    resps: [],
    skills: []
  }

  addListItem = where => () => {
    const value = where === 'skills' ? 'skillValue' : 'respValue'

    if (this.state[value]) {
      this.setState(prevState => {
        return {
          [value]: '',
          [where]: [
            ...prevState[where],
            { value: prevState[value], id: uniqid() }
          ]
        }
      })
    }
  }

  deleteListItem = where => id => {
    this.setState(prevState => {
      const newArray = prevState[where].filter(item => item.id !== id)

      return {
        [where]: newArray
      }
    })
  }

  setResps = e => {
    this.setState({
      respValue: e.target.value
    })
  }

  setSkills = e => {
    this.setState({
      skillValue: e.target.value
    })
  }

  setModalShow = shouldShow => {
    this.setState({
      modalShow: shouldShow
    })

    shouldShow
      ? document.body.classList.add('modal-open')
      : document.body.classList.remove('modal-open')
  }

  validateForm = form => {
    if (form.checkValidity() === false) {
      form.classList.add('was-validated')

      return false
    }

    return true
  }

  getVacancy = state => {
    const {
      modalShow,
      termPublish,
      respValue,
      skillValue,
      salary,
      email,
      site,
      address,
      experience,
      education,
      id,
      ...rest
    } = state

    return {
      timestamp: Date.now(),
      termPublish: getTermPublish(state),
      publishDate: getDateStr(),
      id: uniqid(),
      salary: salary ? salary : 'По договоренности',
      show: true,
      email: trim(email).toLowerCase(),
      site: trim(site).toLowerCase(),
      address,
      experience,
      education,
      ...normalizeVacancyObj(rest)
    }
  }

  handleChange = (e, field) => {
    this.setState({
      [field]: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault()
    const { validateForm, setModalShow, getVacancy } = this

    if (validateForm(e.target)) {
      const vacancy = getVacancy(this.state)
      await this.props.fetchVacancyPublish(vacancy)

      // Отрефакторить получение id для компонента Modal

      this.setState({
        id: vacancy.id
      })

      setModalShow(true)
    }
  }

  render() {
    const { setModalShow, ...restThis } = this

    const { id, modalShow, ...restState } = this.state

    const formProps = {
      loading: this.props.loading,
      ...restThis,
      ...restState
    }

    return (
      <React.Fragment>
        <CSSTransition
          in={modalShow}
          timeout={200}
          classNames="modal"
          unmountOnExit
        >
          <Modal setShow={setModalShow} id={id} />
        </CSSTransition>
        <PublishForm {...formProps} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ loading }) => ({
  loading
})

const mapDispachToProps = {
  fetchVacancyPublish
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)(PublishContainer)
