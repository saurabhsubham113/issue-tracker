import React from 'react'
import { Button, Card, CardBody, CardHeader, CardFooter } from 'reactstrap'
import { nanoid } from "nanoid";
import { addIssue } from '../../../action/issue.action';
import { useDispatch } from 'react-redux';
import { Prompt, useHistory } from 'react-router-dom';
import * as yup from 'yup'
import { Formik, Form } from "formik";
import { CustomInputText, CustomSelect } from "../../CustomInput/CustomInput";


const AddIssue = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const addIssueSchema = yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description cannot be empty"),
        severity: yup.string()
            .oneOf(["Major", "Minor", "Critical"], "Invalid Severity")
            .required("Please choose severity"),
        status: yup.string().oneOf(["Open", "In Progress", "Closed"], "Invalid status")
            .required("please select a status"),
        createdAt: yup.date().required("date cannot be empty"),
        resolveAt: yup.date().required("date required")
    })
    return (
        <div className="my-4">
            <Card className="w-50 m-auto">
                <CardHeader className="text-center" style={{fontSize:"28px"}} >
                    Add Issue
                </CardHeader>
                <Formik
                    initialValues={{ title: "", description: "", severity: "", status: "", createdAt: "", resolveAt: "" }}
                    validationSchema={addIssueSchema}
                    onSubmit={(value, { setSubmitting, resetForm }) => {
                        dispatch(addIssue({ ...value, id: nanoid() }))
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

                                        label="Title"
                                        name="title"
                                        type="text"
                                        placeholder="Enter Issue Title"
                                    />
                                    <CustomInputText

                                        label="Description"
                                        name="description"
                                        type="text"
                                        placeholder="Enter Issue description"
                                    />
                                    <CustomSelect label="Severity" name="severity" >
                                        <option disabled value="" >Select a value</option>
                                        <option value="Major">Major</option>
                                        <option value="Minor">Minor</option>
                                        <option value="Critical">Critical</option>
                                    </CustomSelect>
                                    <CustomSelect label="status" name="status" >
                                        <option disabled value="" >Select a value</option>
                                        <option value="Open">open</option>
                                        <option value="Closed">closed</option>
                                        <option value="In Progress">In Progress</option>
                                    </CustomSelect>
                                    <CustomInputText

                                        label="Created At"
                                        name="createdAt"
                                        type="date"
                                        max={new Date().toJSON().slice(0, 10)}
                                        placeholder="Enter Issue description"
                                    />
                                    <CustomInputText

                                        label="Resolved At"
                                        name="resolveAt"
                                        type="date"
                                        max={new Date().toJSON().slice(0, 10)}
                                        placeholder="Enter Issue description"
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Button disabled={!(props.dirty && props.isValid)} type="submit" color="primary">Add Issue</Button>
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



export default AddIssue
