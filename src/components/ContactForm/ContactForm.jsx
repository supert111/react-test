import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './ContactForm.module.css';

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
    <form onSubmit={handleSubmit} className={styles.wrapperForm}>
      <div>
        <label htmlFor="firstName"></label>
        <Field name="firstName" component="input" type="text" placeholder="Name" className={styles.inputForm}/>
      </div>
      <div>
        <label htmlFor="lastName"></label>
        <Field name="lastName" component="input" type="text" placeholder="Surname" className={styles.inputForm}/>
      </div>
      <div>
        <label htmlFor="address"></label>
        <Field name="address" component="input" type="text" placeholder="Address" className={styles.inputForm}/>
      </div>
      <div>
        <label htmlFor="phone"></label>
        <Field name="phone" component="input" type="number" placeholder="Phone" className={styles.inputForm}/>
      </div>
      <button type="submit" className={styles.butonFormCart}>Order</button>
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