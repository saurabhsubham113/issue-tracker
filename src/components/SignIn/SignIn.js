import React from 'react'
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { Prompt, Redirect, useHistory } from "react-router-dom";
import { getUser } from '../../action/user.action'
import { useDispatch, useSelector } from 'react-redux';
import { CustomInputText } from '../CustomInput/CustomInput';
import { Form, Formik } from 'formik';
import * as yup from 'yup'
const SignIn = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const currentUser = useSelector(state => state.users.user)

    const signInSchema = yup.object({
        email: yup.string().email("Not a valid Enail").required("Email is required"),
        password: yup.string().required("password is required")
    })

    const isSucess = () => {
        if (currentUser) {
            return true
        } else
            return false
    }

    return (
        <>
            {isSucess() ? <Redirect to="/" /> :
                (<Card className="w-50 m-auto">
                    <CardHeader className="text-center text-uppercase" style={{fontSize:"28px"}} >
                       Sign In
                    </CardHeader>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={signInSchema}
                        onSubmit={(value, { setSubmitting, resetForm }) => {

                            dispatch(getUser(value.email, value.password))
                            resetForm()
                            setSubmitting(false)
                            
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
                                    </CardBody>
                                    <CardFooter>
                                        <Button disabled={!(props.dirty && props.isValid)} type="submit" color="primary">sign in</Button>
                                        <Button onClick={() => history.push("/signup")} className="float-right" type="reset" color="warning">sign up</Button>
                                    </CardFooter>
                                </Form>
                            )
                        }

                    </Formik >
                </Card>)
            }
        </>
    )
}

export default SignIn
