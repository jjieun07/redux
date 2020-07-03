import React, { Component } from 'react'
import ContactDetail from './ContactDetail'
import { connect } from 'react-redux'
import * as contactActions from '../../store/modules/contact'

class ContactDetailContainer extends Component {
  handleEdit = (obj) => {
    this.props.edit(obj)
  }
  handleRemove = (obj) => {
    this.props.remove(obj)
  }

  render() {
    const { handleEdit, handleRemove } = this
    const { selectedKey, contactData } = this.props

    return (
      <ContactDetail
        isSelected={selectedKey !== -1}
        onEdit={handleEdit}
        onRemove={handleRemove}
        contact={contactData[selectedKey]}
      />
    )
  }
}

export default connect(
  (state) => ({
    selectedKey: state.contact.selectedKey,
    contactData: state.contact.contactData
  }),
  (dispatch) => ({
    edit: (obj) => dispatch(contactActions.edit(obj)),
    remove: (obj) => dispatch(contactActions.remove(obj))
  })
)(ContactDetailContainer)