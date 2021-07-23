import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import { useState } from 'react';

// const initialState = {firstName: '', lastName: '', email: ''}

let ContactForm = props => {
  // const [userContact, setUserContact] = useState(initialState);


  const { handleSubmit } = props
  // const { firstName, lastName, email } = { handleSubmit };
  //  //userContact = { firstName, lastName, email };
  // setUserContact(userContact)
  // console.log(firstName, lastName, email)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)
// const createReduxForm = reduxForm({ form: 'contact' })
// const ContactReduxForm  = createReduxForm(ContactForm)

export default ContactForm;