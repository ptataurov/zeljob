import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './btn-up.scss'
import { ReactComponent as Icon } from './btn-up.svg'

class BtnUp extends Component {
  state = {
    isShow: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  setShow = bool => {
    this.setState({
      isShow: bool
    })
  }

  scrollTop = () => window.pageYOffset || document.documentElement.scrollTop

  onScroll = () => {
    const { scrollTop, setShow } = this
    const { isShow } = this.state

    if (!isShow && scrollTop() >= 500) {
      setShow(true)
    }
    if (isShow && scrollTop() < 500) {
      setShow(false)
    }
  }

  toTop = () => {
    const { scrollTop } = this

    if (scrollTop() > 0) {
      window.requestAnimationFrame(this.toTop)
      window.scrollTo(0, scrollTop() - scrollTop() / 4)
    }
  }

  render() {
    const { isShow } = this.state

    return (
      <CSSTransition
        in={isShow}
        timeout={200}
        classNames="btn-up"
        unmountOnExit
      >
        <Icon className="btn-up" onClick={this.toTop} />
      </CSSTransition>
    )
  }
}

export default BtnUp
