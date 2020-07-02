import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ContactDetail extends Component {
  state = {
    isEdit: false,
    name: '',
    phone: ''
  }

  _editFunc = () => {
    this.props.onEdit({ name: this.state.name, phone: this.state.phone })
  }

  _editButtonToggle = () => {
    if (this.state.isEdit === false) {
      this.setState({
        name: this.props.contact.name,
        phone: this.props.contact.phone,
      })
    } else {
      this._editFunc()
    }
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  _inputChange = (e) => {
    let nextState = {}
    nextState[e.target.name] = e.target.value
    this.setState(nextState)
  }

  render() {
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    )
    const blank = (
      <div>Not Selected</div>
    )

    const edit = (
      <div>
        <p>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this._inputChange}
          />
          <input
            name="phone"
            type="text"
            placeholder="phone"
            value={this.state.phone}
            onChange={this._inputChange}
          />
        </p>
      </div>
    )

    const view = this.state.isEdit ? edit : details
    return (
      <div>
        <h2>상세보기</h2>
        {this.props.isSelected ? view : blank}
        <button onClick={this._editButtonToggle}>{this.state.isEdit ? '완료' : '수정'}</button>
        <button onClick={this.props.onRemove}>삭제</button>
      </div>
    )
  }
}

ContactDetail.defaultProps = {
  isSelected: false,
  contact: {
    name: '',
    phone: ''
  }
}

ContactDetail.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  contact: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}