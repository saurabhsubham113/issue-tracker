import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardFooter } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Prompt } from 'react-router-dom';
import { viewOneIssue, updateIssue } from '../../../action/issue.action';
import * as yup from 'yup'
import { Formik, Form } from "formik";
import { CustomInputText, CustomSelect } from "../../CustomInput/CustomInput";

const UpdateIssue = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const issue = useSelector(state => state.issues.issue)
    const { id } = useParams()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [severity, setSeverity] = useState("")
    const [status, setStatus] = useState("")
    const [createdAt, setCreatedat] = useState("")
    const [resolveAt, setResolvedat] = useState("")

    useEffect(() => {
        dispatch(viewOneIssue(id))
    }, [dispatch, id]);

    useEffect(() => {
        if (issue) {
            setTitle(issue.title)
            setDescription(issue.description)
            setSeverity(issue.severity)
            setStatus(issue.status)
            setCreatedat(issue.createdAt)
            setResolvedat(issue.resolveAt)
        }
    }, [issue])

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
                <CardHeader className="text-center" style={{fontSize:"27px"}} >
                    Update Issue
                </CardHeader>
                <Formik
                    initialValues={{
                        title: title,
                        description: description,
                        severity: severity,
                        status: status,
                        createdAt: createdAt,
                        resolveAt: resolveAt
                    }}
                    enableReinitialize
                    validationSchema={addIssueSchema}
                    onSubmit={(value, { setSubmitting, resetForm }) => {

                        dispatch(updateIssue({ ...value, id: issue.id }))
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
                                    <CustomSelect label="status" name="status"  >
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
                                    <Button type="submit" color="primary">update</Button>
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
export default UpdateIssue
