import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ContactCreate extends Component {
  state = {
    name: '',
    phone: ''
  }

  _inputChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState)
  }

  _buttonClick = () => {
    const newContact = {
      name: this.state.name,
      phone: this.state.phone
    }
    this.props.onCreate(newContact)
    this.setState({
      name: '',
      phone: ''
    })
    this.focusTarget.focus()
  }

  render() {
    return (
      <div>
        <h2>새 연락처</h2>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this._inputChange}
            ref={(ref) => { this.focusTarget = ref }}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this._inputChange}
          />
        </p>
        <button onClick={this._buttonClick}>추가</button>
      </div>
    )
  }
}

ContactCreate.defaultProps = {
  onCreate: () => {
    console.error('error');
  }
}

ContactCreate.propTypes = {
  onCreate: PropTypes.func
}