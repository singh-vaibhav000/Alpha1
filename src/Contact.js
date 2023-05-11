import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import right from './assets/right.png';

const ContactForm = () => {
    const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

    return (
        <div className='fixed 
        top-[10rem] right-[8rem] 
        bg-white
        rounded-lg
        w-[35%]
        shadow-2xl
        p-12'>
            <h1 className="text-xl font-medium">Connect with Us</h1>
            <div
                className="text-md">
                for outstanding protective overlaminates
            </div>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    email: "",
                    contactNumber: "",
                    company: "",
                    state: "",
                    selfDescription: "",
                    preferredDistributor: "",
                    promotions: false,
                }}
                validationSchema={Yup.object({
                    firstname: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("Required"),
                    lastname: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required("Required"),
                    email: Yup.string().email("Invalid email address").required("Required"),
                    contactNumber: Yup.string()
                        .matches(
                            /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
                            "Invalid phone number"
                        )
                        .required("Required"),
                    company: Yup.string().required("Required"),
                    state: Yup.string().required("Required"),
                    selfDescription: Yup.string().required("Required"),
                    preferredDistributor: Yup.string().required("Required"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="mt-12">
                        <div className="flex gap-x-4">
                            <div className={'flex flex-col'}>
                                <label htmlFor="firstname" className="my-1">First Name</label>
                                <Field type="text" name="firstname" className='border-2 rounded-lg focus:outline-none py-2 px-1'/>
                                <ErrorMessage name="firstname" />
                            </div>
                            <div className={'flex flex-col'}>
                                <label htmlFor="lastname" className="my-1">Last Name</label>
                                <Field type="text" name="lastname" className='border-2 rounded-lg focus:outline-none py-2 px-1'/>
                                <ErrorMessage name="lastname" />
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <div className={'flex flex-col'}>
                                <label htmlFor="email" className="my-1">Email Address</label>
                                <Field type="email" name="email" className='border-2 rounded-lg focus:outline-none py-2 px-1' />
                                <ErrorMessage name="email" />
                            </div>
                            <div className={'flex flex-col'}>
                                <label htmlFor="contactNumber " className="my-1">Contact Number</label>
                                <Field type="text" name="contactNumber" className='border-2 rounded-lg focus:outline-none py-2 px-1' />
                                <ErrorMessage name="contactNumber" />
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <div className={'flex flex-col'}>
                                <label htmlFor="company" className="my-1">Company</label>
                                <Field type="text" name="company" className='border-2 rounded-lg focus:outline-none py-2 px-1' />
                                <ErrorMessage name="company" />
                            </div>
                            <div className={'flex flex-col w-[48%]'}>
                                <label htmlFor="state" className="my-1">State</label>
                                <Field as="select" name="state" className='border-2 rounded-lg focus:outline-none py-3 px-1 '>
                                    <option value="">Select a state</option>
                                    {states.map((state) => (
                                        <option key={state} value={state}>
                                            {state}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="state" />
                            </div>
                        </div>
                        <div className={'my-4 flex flex-col'}>
                            <label htmlFor="selfDescription">
                                How would you describe yourself?
                            </label>
                            <Field as="textarea" name="selfDescription" className='border-2 rounded-lg focus:outline-none py-2 px-1' />
                            <ErrorMessage name="selfDescription" />
                        </div>
                        <div className={'mt-4 flex flex-col'}>
                            <label htmlFor="preferredDistributor">Preferred Distributor</label>
                            <Field type="text" name="preferredDistributor" className='border-2 rounded-lg focus:outline-none py-2 px-1'/>
                            <ErrorMessage name="preferredDistributor" />
                        </div>
                        <div className={'my-2'}>
                            <Field
                                type="checkbox"
                                name="promotions"
                                id="promotions"
                                className='mr-2'
                            />
                            <label htmlFor="promotions">
                                I'd like to receive promotions, product information and service
                                offers from Avery Dennison.
                            </label>
                        </div>

                        <button
                            className='flex mx-auto justify-center items-center gap-4'
                            style={{
                                backgroundColor: "#F26621",
                                outline: "none",
                                color: "white",
                                border: "none",
                                padding: "10px 40px",
                                borderRadius: "6px",
                                marginTop: "40px"
                            }}
                            type="submit" disabled={isSubmitting}>
                            <p className='text-xl'>
                                Submit
                            </p>
                            <img
                                className='w-6'
                                src={right}
                                alt='right'
                            />
                        </button>
                    </Form>
                )}
        </Formik>
        </div >
    );
};

export default ContactForm;
