import React, { Component } from 'react'
import ContactCreate from '../components/ContactCreate'
import { connect } from 'react-redux'
import * as contactActions from '../store/modules/contact'

class ContactCreateContainer extends Component {
  handleCreate = (obj) => {
    this.props.create(obj)
  }

  render() {
    const { handleCreate } = this
    return (
      <ContactCreate
        onCreate={handleCreate}
      />
    )
  }
}

export default connect(
  (state) => ({
    // selectedKey: state.contact.selectedKey,
    // contactData: state.contact.contactData
  }),
  (dispatch) => ({
    create: (obj) => dispatch(contactActions.create(obj))
  })
)(ContactCreateContainer)