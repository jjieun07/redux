import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContactCreateContainer from '../ContactCreate/ContactCreateContainer'
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    // margin: 0 auto; /* 가운데 정렬 */s
    padding: 7rem;
`;

const Form = styled.div`
    /* 레이아웃 */
    padding: 3rem;
    background: #f8f9fa;
`;

const Text = styled.div`
  font-size: 1.5rem;
  display: inline;
  // padding: 2rem;
`;

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

const Button = styled.button`
  width: 10%;
  padding: 1rem;
  margin: 1rem;
  border-radius: 2rem;
`

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
        <h2>상세보기</h2>
        <p>
          <Text>{this.props.contact.name}</Text>
        </p>
        <p>
          <Text>{this.props.contact.phone}</Text>
        </p>
      </div>
    )

    const edit = (
      <div>
        <h2>수정하기</h2>
        <p>
          <Input
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this._inputChange}
          />
          <br />
          <br />
          <Input
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
      <Wrapper>
        <Form>
          {view}
          <Button onClick={this._editButtonToggle}>{this.state.isEdit ? '완료' : '수정'}</Button>
          <Button onClick={this.props.onRemove}>삭제</Button>
        </Form>
        <br />
        <Form>
          <ContactCreateContainer />
        </Form>
      </Wrapper>
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