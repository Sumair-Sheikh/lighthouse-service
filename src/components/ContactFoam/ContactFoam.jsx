import React, { Fragment } from 'react'
import { Field, Form, Formik } from 'formik'
import styles from './ContactFoam.module.css'

function ContactFoam() {
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
                            <legend className={styles['legend']}>What type of Services you are looking for*:</legend>

                            <div className={styles['checkbox']}>

                                <div className={styles['gchoice']}>
                                    <Field name="engineering" type="checkbox" />
                                    <label>Engineering</label>
                                </div>

                                <div className={styles['gchoice']}>
                                    <Field name="maintenance" type="checkbox" />
                                    <label>Maintenance</label>
                                </div>

                                <div className={styles['gchoice']}>
                                    <Field name="3D printed signs" type="checkbox" />
                                    <label>3D printed signs</label>
                                </div>

                                <div className={styles['gchoice']}>
                                    <Field name="architectural" type="checkbox" />
                                    <label>Architectural Signage</label>
                                </div>

                                <div className={styles['gchoice']}>
                                    <Field name="design" type="checkbox" />
                                    <label>Design Assist</label>
                                </div>
                            </div>
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

export default ContactFoam