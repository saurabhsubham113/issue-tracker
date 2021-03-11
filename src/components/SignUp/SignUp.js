import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { addUser } from '../../action/user.action'
import { nanoid } from "nanoid";
import { Prompt, useHistory } from 'react-router-dom';
import * as yup from 'yup'
import { CustomInputText, CustomSelect } from '../CustomInput/CustomInput'
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';


const SignUp = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const signUpSchema = yup.object({
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        email: yup.string().email("Not a valid Enail").required("Email is required"),
        password: yup.string().required("password is required"),
        confirmPassword: yup.string().required("confirm password is required"),
        location: yup.string()
            .oneOf(["Delhi", "Mumbai", "Hyderabad", "Bangalore", "Noida", "Pune", "Chennai"], "Invalid Location")
            .required("location is required"),
        mobile: yup.string().matches(phoneRegExp, "Mobile umber is not valid").required("Mobile number is required")
    })


    return (
        <div className="my-4">
            <Card className="w-50 m-auto">
                <CardHeader className="text-center text-uppercase" style={{fontSize:"27px"}} >
                    Sign Up
                </CardHeader>
                <Formik
                    initialValues={{ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", location: "", mobile: "" }}
                    validationSchema={signUpSchema}
                    onSubmit={(value, { setSubmitting, resetForm }) => {
                        if (value.password !== value.confirmPassword) {
                            return toast("Passwords do not match", {
                                type: "error"
                            })
                        }
                        const user = {
                            id:nanoid(),
                            ...value
                        }
                        dispatch(addUser(user))
                        resetForm()
                        setSubmitting(false)
                        history.push("/")


                    }}
                >
                    {
                        props => (
                            <Form>
                                <Prompt when={!(props.isValid)}
                                    message={location => (`Are you sure you want to go to ${location.pathname}`)}
                                />
                                <CardBody>
                                    <CustomInputText

                                        label="First Name"
                                        name="firstName"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                    <CustomInputText

                                        label="Last Name"
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                    <CustomInputText

                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                    />
                                    <CustomInputText

                                        label="Password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter password"
                                    />
                                    <CustomInputText

                                        label="Confirm Password"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                    />
                                    <CustomSelect label="Location" name="location" >
                                        <option disabled value=""  >Please select location</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Bangalore">Bangalore</option>
                                        <option value="Noida">Noida</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Chennai">Chennai</option>
                                    </CustomSelect>

                                    <CustomInputText

                                        label="Mobile"
                                        name="mobile"
                                        type="tel"
                                        placeholder="Enter your Mobile Number"
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Button disabled={!(props.dirty && props.isValid)} type="submit" color="primary">Sign Up</Button>
                                    <Button className="float-right" type="reset" color="warning">cancel</Button>
                                </CardFooter>
                            </Form>
                        )
                    }

                </Formik >
            </Card>
        </div>
    )
}

export default SignUp
