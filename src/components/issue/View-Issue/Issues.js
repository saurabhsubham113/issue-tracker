import React, { useEffect, useState } from 'react'
import { CardFooter, Button, Card } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteIssue, viewIssue } from "../../../action/issue.action";
import IssueCard from './IssueCard';
import isLoggedIn from '../../PrivateRoute/isLoggedIn';
import SearchBox from '../../searchBox/SearchBox';
import Filter from '../../searchBox/Filter';
import arrowdown from '../../../assets/icon-arrow-down.svg'

const Issues = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const getIssues = state.issues.issues
    const user = state.users.user
    const history = useHistory()
    const [searchField, setSearchField] = useState("")
    const [showFilter, setShowFilter] = useState(false)
    const [filterFields, setFilterFields] = useState({
        description: false,
        severity: false,
        status: false,
        createdAt: false,
        resolvedAt: false
    });

    useEffect(() => {
        dispatch(viewIssue())
    }, [dispatch])


    const handleView = (id) => {
        if (isLoggedIn(user)) {
            const res = window.confirm("Are you sure you want to view this issue ?")
            if (res) {

                history.push(`/issue/${id}`)
            }
            else
                return
        }

    }

    const handleDelete = (id) => {
        if (isLoggedIn(user)) {
            const res = window.confirm("Are you sure you want to delete ?")
            if (res)
                dispatch(deleteIssue(id))
            else
                return
        }

    }
    const searchChange = (e) => {
        setSearchField(e.target.value)
    }
    const handleFilter = (e) => {
        let fields = { ...filterFields, [e.target.name]: e.target.checked }
        setFilterFields(fields)
    }

    const filterIssues = getIssues.filter(issue => (
        issue.title.toLowerCase().includes(searchField.toLowerCase())
    ))
    const img = () => {
        return <img src={arrowdown} alt="arrow-down" />
    }
    return (
        <div className="my-4 py-4">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <SearchBox searchChange={searchChange} />
                <div style={{ position: "relative" }}>
                    <Button style={{ width: "120px" }} color="warning" onClick={() => setShowFilter(!showFilter)} >Filter {img()} </Button>
                    {showFilter ? <Filter filterchange={handleFilter} /> : null}
                </div>
            </div>
            <div className="row">

                {filterIssues.map(issue => (
                    <div key={issue.id} style={{ zIndex: 99 }} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <Card className="issue-card">
                            <IssueCard
                                title={issue.title}
                                description={!filterFields.description ? issue.description : null}
                                severity={!filterFields.severity ? issue.severity : null}
                                status={!filterFields.status ? issue.status : null}
                                createdAt={!filterFields.createdAt ? issue.createdAt : null}
                                resolveAt={!filterFields.resolvedAt ? issue.resolveAt : null}
                            />
                            <CardFooter className="issue-footer">
                                <Button color="primary" onClick={() => handleView(issue.id)} className="btn btn-primary" >
                                    view
                            </Button>
                                <Button onClick={() => handleDelete(issue.id)} className="btn btn-danger float-right">
                                    delete
                            </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Issues
