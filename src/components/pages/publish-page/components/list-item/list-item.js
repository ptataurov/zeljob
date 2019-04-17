import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

class ListItem extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired
  }

  state = {
    value: this.props.value,
    isActive: false
  }

  render() {
    const { value, isActive } = this.state
    const { id, deleteItem } = this.props

    const inputClass = cn({
      'publish-form__list-item-input': true,
      'form-control': true,
      'publish-form__list-item-input--active': isActive
    })

    return (
      <li className="publish-form__list-item">
        <input
          type="text"
          className={inputClass}
          value={value}
          placeholder={value}
          onClick={() => {
            this.setState({
              isActive: true
            })
          }}
          onChange={e => {
            this.setState({
              value: e.target.value
            })
          }}
          onBlur={() => {
            this.setState({
              isActive: false
            })

            if (!value) {
              deleteItem(id)
            }
          }}
        />
      </li>
    )
  }
}

export default ListItem
