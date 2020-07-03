import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import oc from 'open-color';

const Button = styled.button`
  width: 10%;
  padding: 1rem;
  margin: 1rem;
  border-radius: 2rem;
`
const Input = styled.input`
    /* 레이아웃 */
    width: 60%;
    padding: 0.5rem;

    /* 색상 */
    border: 1px solid ${oc.gray[2]};

    /* 기타 */
    font-size: 1.5rem;
    line-height: 2rem;
`;

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
        <h2>새 연락처 추가</h2>
        <p>
          <Input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this._inputChange}
            ref={(ref) => { this.focusTarget = ref }}
          /><br /><br />
          <Input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this._inputChange}
          />
        </p>
        <Button onClick={this._buttonClick}>추가</Button>
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