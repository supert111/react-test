import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './ContactForm.module.css';

let ContactForm = props => {
  const { handleSubmit } = props

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
};

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm);

export default ContactForm;