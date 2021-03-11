import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from 'react-router-dom';
import { viewOneIssue } from '../../../action/issue.action';
import IssueCard from './IssueCard';
import spinner from '../../../assets/spinner.gif'
import { Button, Card, CardFooter } from 'reactstrap';
import isLoggedIn from '../../PrivateRoute/isLoggedIn';

const Issue = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const { id } = useParams()
    const history = useHistory()
    const issue = state.issues.issue
    const user = state.users.user
    useEffect(() => {
        dispatch(viewOneIssue(id))
        // loadIssue()
    }, [dispatch, id]);

    // const loadIssue = () => {

    // }

    const handleUpdate = () => {
        if (isLoggedIn(user)) {

            const res = window.confirm("Are you sure you want to update the issue ?")
            console.log(id);
            if (res)
                return history.push(`/update-issue/${id}`)
            else
                return
        }

    }

    if (!issue)
        return <img src={spinner} alt="loading" />


    return (
        <Card className="w-50 m-auto">
            <IssueCard
            title={issue.title}
                description={issue.description}
                severity={issue.severity}
                status={issue.status}
                createdAt={issue.createdAt}
                resolveAt={issue.resolveAt}
            />
            <CardFooter>
                <Link to="/" className="btn btn-secondary">Back</Link>
                <Button className="float-right" color="primary" onClick={handleUpdate}>Update</Button>
            </CardFooter>
        </Card>
    )
}

export default Issue
