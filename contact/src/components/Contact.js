import React, { Component } from 'react'
import ContactInfo from './ContactInfo'
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    // width: 700px;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 1rem;

`;

const Form = styled.div`
    /* 레이아웃 */
    padding: 1rem;

    /* 색상 */
    // background: ${oc.gray[0]};
`;

const Input = styled.input`
    /* 레이아웃 */
    width: 100%;
    padding: 0.5rem;

    /* 색상 */
    border: 1px solid ${oc.gray[2]};

    /* 기타 */
    font-size: 1.5rem;
    line-height: 2rem;
    transition: all .25s;
`;

class Contact extends Component {
  state = {
    keyword: '',
  }

  _searchContact = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  render() {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      )

      return data.map(
        (contact, i) => {
          return (
            <ContactInfo
              contact={contact}
              key={i}
              onClick={() => {
                this.props.onDetail(i)
              }}
            />)
        }
      )
    }

    return (
      <Wrapper>
        <Form>
          <h1>연락처</h1>
          <Input
            name="keyword"
            placeholder="Search"
            value={this.state.keyword}
            onChange={this._searchContact}
          />
          <div style={{ 'paddingTop': '5%' }}>{mapToComponents(this.props.contactData)}</div>
        </Form>
      </Wrapper>
    )
  }
}

export default Contact