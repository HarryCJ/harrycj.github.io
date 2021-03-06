import React, { Component } from 'react';
import { Col, Form, Button } from 'react-bootstrap'
import Page from '../components/Page.js'
import { connect } from 'react-redux'
import { setPageContentSelector } from '../redux/actions/siteActions'

class ContactPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      contactName: '',
      contactEmail: '',
      contactMessage: '',
      nameError: null,
      emailError: null,
      messageError: null,
      contactSuccess: false,
      contactError: null,
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    const {contactName, contactEmail, contactMessage} = this.state
    let nameError, emailError, messageError = null
    if (contactName.length === 0) nameError = 'This field is required.'
    if (contactEmail.length === 0) emailError = 'This field is required.'
    else if (!/\S+@\S+\.\S+/.test(contactEmail)) emailError = 'Please enter a valid email.'
    if (contactMessage.length === 0) messageError = 'This field is required.'
    this.setState({
      nameError, emailError, messageError
    })
    if (!nameError && !emailError && !messageError){
      // Submit
      /*eslint-disable no-undef*/
      Email.send({
          SecureToken : "13c04aac-9bf7-4866-af02-4d5549b8dd75",
          To : 'hjwebdev@gmail.com', 
          From : "hjwebdev@gmail.com",
          Subject : "New message from hjwebdev",
          Body : `
          Name: ${contactName}
          <br>Email: ${contactEmail}
          <br>Message:
          <br>${contactMessage}
          `
      }).then(
        message => {
          if (message === 'OK'){
            // Success
            this.setState({
              contactSuccess: true, 
              contactError: null,
              contactName: '',
              contactEmail: '',
              contactMessage: '',
            })
          } else {
            this.setState({contactSuccess: false, contactError: 'There was a problem submitting the form... Please contact me at hjwebdev@gmail.com'})
          }
        }
      );
    }
  }

  componentDidMount(){
    this.props.setPageContentSelector(['.page', '.page > *', '.page > contact'].join(', '))
  }

  render(){
    const {contactName, contactEmail, contactMessage, nameError, emailError, messageError, contactSuccess, contactError} = this.state
    return (
      <Page
        className="row defaultOpaque"
        inner={
          <>
            <Col sm={12}>
              <p className="pb-2">Get in touch for a free consultation, if you have any questions, or for anything else!</p>
            </Col>
            <Col sm={6} className="mb-4 name-container">
              <Form.Control 
                type="text" 
                placeholder="Your name" 
                name="contactName" 
                id="contactName" 
                onChange={this.handleChange} 
                value={contactName}
              />
              {nameError && <p className="form-error">{nameError}</p>}
            </Col>
            <Col sm={6} className="mb-4 email-container">
              <Form.Control 
                type="text" 
                placeholder="Your email" 
                name="contactEmail" 
                id="contactEmail" 
                onChange={this.handleChange} 
                value={contactEmail}
              />
              {emailError && <p className="form-error">{emailError}</p>}
            </Col>
            <Col sm={12} className="mb-4 message-container">
              <Form.Control 
                as="textarea" 
                placeholder="Your message" 
                name="contactMessage" 
                id="contactMessage" 
                onChange={this.handleChange} 
                value={contactMessage}
              />
              {messageError && <p className="form-error">{messageError}</p>}
            </Col>
            <Col sm={12}>
              {!contactSuccess ?
                <Button variant="info" className="float-right pl-3" onClick={this.handleSubmit}>Submit</Button>
                :
                <Button variant="success" className="float-right pl-3" disabled={true} >Successfully sent</Button>
              }
              
              <p className=""><i>You can also reach me at 07874339969 on weekdays between 9AM and 6PM (GMT), or email me directly at contact@hjwebdev.com.</i></p>
              {contactError && <p className="form-error text-right">{contactError}</p>}
            </Col>
          </>
        }
      />)
  }
}

export default connect(null, { setPageContentSelector })(ContactPage);