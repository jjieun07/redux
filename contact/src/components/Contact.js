import React, { Component } from 'react'
import ContactInfo from './ContactInfo'
import ContactDetail from './ContactDetail'
// import ContactCreate from './ContactCreate'
import ContactCreateContainer from '../containers/ContactCreateContainer'
import ContactDetailContainer from '../containers/ContactDetailContainer'
// import ContactInfoContainer from '../containers/ContactInfoContainer'

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
      <div>
        <h1>연락처</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this._searchContact}
        />
        <div>{mapToComponents(this.props.contactData)}</div>
        <ContactCreateContainer />
      </div>
    )
  }
}

export default Contact