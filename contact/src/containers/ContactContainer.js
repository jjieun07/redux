import React, { Component } from 'react'
import Contact from '../components/Contact'
import { connect } from 'react-redux'
import * as contactActions from '../store/modules/contact'

class ContactContainer extends Component {
  handleDetail = (key) => {
    this.props.detail(key)
  }
  render() {
    const { handleDetail } = this
    const { selectedKey, contactData } = this.props

    return (
      <Contact
        onDetail={handleDetail}
        key={selectedKey}
        contactData={contactData}
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
    detail: (key) => dispatch(contactActions.detail(key))
  })
)(ContactContainer)