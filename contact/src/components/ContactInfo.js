import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import oc from 'open-color';

const Info = styled.div`
    /* 레이아웃 */
    margin-left: 1rem;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column; 
    font-size: 1.2rem;
`;

const Wrapper = styled.div`
    /* 레이아웃 */
    padding: 1rem;
    position: relative;
    overflow: hidden;
    display: flex;

    /* 색상 */
    background: ${oc.gray[0]};
    border: 1px solid ${oc.gray[2]};
`;

export default class ContactInfo extends Component {
  render() {
    return (
      <Wrapper>
        <Info onClick={this.props.onClick}>
          {this.props.contact.name}
        </Info>
      </Wrapper>
    )
  }
}

ContactInfo.defaultProps = {
  onClick: () => {
    console.log('there is onClick function');
  }
}

ContactInfo.propTypes = {
  onClick: PropTypes.func.isRequired
}