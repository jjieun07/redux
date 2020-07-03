import React, { Component } from 'react'
import Contact from './Contact'
import { connect } from 'react-redux'
import * as contactActions from '../../store/modules/contact'

class ContactContainer extends Component {
  init = (obj) => {
    this.props.init(obj)
  }

  handleDetail = (key) => {
    this.props.detail(key)
  }
  render() {
    const { handleDetail, init } = this
    const { selectedKey, contactData } = this.props

    return (
      <Contact
        initData={init}
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
    init: (obj) => dispatch(contactActions.init(obj)),
    detail: (key) => dispatch(contactActions.detail(key))
  })
)(ContactContainer)