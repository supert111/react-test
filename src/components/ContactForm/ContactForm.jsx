import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { orderUser } from '../../redux/users/users-actions';
import * as yup from 'yup';
import swal from 'sweetalert';
import styles from './ContactForm.module.css';
import routes from '../../routes';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

let FormSchema = yup.object().shape({
  firstName: yup.string()
    .min(2, 'Too short!')
    .max(70, 'Too long!')
    .required('Required name'), 
  lastName: yup.string()
    .max(70, 'Too long!'),
  address: yup.string(),
  phone: yup.string()
    .required('Required phone')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "to short")
    .max(10, "to long"),
})

let ContactForm = ({buttonDisabled}) => { 
  const dispatch = useDispatch();
  const state = useSelector(state => state);
   
    return (
      <div className={styles.formBlock}>
        <Formik 
          initialValues={{
            firstName: '', 
            lastName: '',
            address: '',
            phone: '',
          }}

          validationSchema={FormSchema}

          onSubmit = {(values) => {
            const { orders, total } = state.defaultUser;
            const { firstName, lastName, address, phone } = values;
            const contact = { name: firstName, lastName, address, phone }
            const user = ({orders, total, contact, phone})
            dispatch(orderUser(user));
            localStorage.clear();

            swal({ 
              title: "Thank you!", 
              text: "Order accepted, our managers will contact you.",
              icon: "success",
              html: true,
              button: {
                text: "Return to home!",
              }
            })
            .then(function() {
              window.location.href = routes.home;
            });
          }}
          
        >
          {({ errors, touched, dirty, isSubmitting }) => (
            <Form className={styles.wrapperForm}>
              <div>
                <label htmlFor="firstName"></label>
                <Field 
                  id="firstName" 
                  name="firstName" 
                  placeholder="Name" 
                  className={styles.inputForm}/>
                  {errors.firstName && touched.firstName ? (
                  <div className={styles.errorMessage}>{errors.firstName}</div> ) : null}
              </div>
              <div>
                <label htmlFor="lastName"></label>
                <Field 
                  id="lastName" 
                  name="lastName" 
                  placeholder="Surname" 
                  className={styles.inputForm}/>
                   {errors.lastName && touched.lastName ? (
                  <div className={styles.errorMessage}>{errors.lastName}</div> ) : null}
              </div>
              <div>
                <label htmlFor="address"></label>
                <Field 
                  id="address" 
                  name="address" 
                  placeholder="Address" 
                  className={styles.inputForm}/>
              </div>
              <div>
                <label htmlFor="phone"></label>
                <Field 
                  id="phone" 
                  name="phone" 
                  placeholder="Phone" 
                  className={styles.inputForm}/>
                  {errors.phone && touched.phone ? (
                  <div className={styles.errorMessage}>{errors.phone}</div> ) : null}
              </div>
              {
                (buttonDisabled === 'active') 
                  ? <button type="submit" className={styles.butonFormCart} disabled={!dirty || isSubmitting}>Order</button>
                  : <button type="submit" className={styles.butonFormCart} disabled={true}>Order</button>
              }
              
            </Form>
          )}
        </Formik>
      </div>
    );
}

export default ContactForm;