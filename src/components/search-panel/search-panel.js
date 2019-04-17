import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './search-panel.scss'

class SearchPanel extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    const { value } = this.state
    const { onSearch } = this.props

    return (
      <form
        className="search-panel app__search-panel form-inline"
        onSubmit={e => onSearch(e, value)}
        onChange={this.handleChange}
      >
        <input
          className="form-control form-control-lg mr-sm-2 flex-grow-1"
          type="search"
          placeholder="Найти работу в Зеленограде"
        />
        <button
          className="btn btn-lg btn-success mt-2 mt-sm-0 flex-grow-1 flex-sm-grow-0"
          type="submit"
        >
          Найти
        </button>
      </form>
    )
  }
}

export default SearchPanel
