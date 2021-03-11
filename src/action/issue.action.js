import {
    ADD_ISSUE,
    VIEW_ISSUE,
    UPDATE_ISSUE,
    DELETE_ISSUE,
    VIEW_ONE_ISSUE
} from './action.type'
import IssueData from "../axios/IssueData";

export const addIssue = issue => async dispatch => {
    const res = await IssueData.postIssues({ ...issue, view: 2 })

    dispatch({
        type: ADD_ISSUE,
        payload: res
    })
}

export const viewIssue = () => async dispatch => {
    const res = await IssueData.getIssues()

    dispatch({
        type: VIEW_ISSUE,
        payload: res
    })
}

export const viewOneIssue = id => async dispatch => {
    const res = await IssueData.getOneIssues(id)

    dispatch({
        type: VIEW_ONE_ISSUE,
        payload: res
    })
}

export const updateIssue = (issue) => async dispatch => {
    const res = await IssueData.updateIssues(issue.id, issue)

    dispatch({
        type: UPDATE_ISSUE,
        payload: res
    })
}

export const deleteIssue = id => async dispatch => {
    await IssueData.deleteIssues(id)
    dispatch({
        type: DELETE_ISSUE,
        payload: id
    })
}