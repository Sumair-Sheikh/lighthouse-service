import { Field, Form, Formik } from 'formik'
import React, { Fragment } from 'react'
import styles from './FooterFoam.module.css'

function FooterFoam() {
    return (
        <Fragment>
            <Formik
                initialValues={{ name: "", email: "", phone: "" }}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 3));
                }}
            >
                <Form>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Field name="name" type="text" placeholder="Name" className={styles['fields']} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                            <Field name="email" type="email" placeholder="Email" className={styles['fields']} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                            <Field name="phone" type="tel" placeholder="Phone" className={styles['fields']} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                            <textarea name="" id="" cols="30" rows="5" placeholder="Message" className={`${styles['fields-msg']} ${styles['fields']}`}></textarea>
                        </div>
                    </div>


                    <button type="submit" className={`${styles['foam-btn']} ${styles['pulse-animation']}`}>Send</button>
                </Form>
            </Formik>
        </Fragment>
    )
}

export default FooterFoam