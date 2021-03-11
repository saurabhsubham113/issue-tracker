import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewIssue } from '../../action/issue.action'
import { Bar } from "react-chartjs-2";
const ViewIssue = () => {
    const dispatch = useDispatch()
    const issues = useSelector(state => state.issues.issues)

    useEffect(() => {
        dispatch(viewIssue())
    }, [dispatch])
    const getTitle = () => {
        if (issues) {
            const newArr = issues.map(issue => (
                issue.title
            ))
            return newArr
        }
       
    }
    const getData = () => {
        if (issues) {
            const newArr = issues.map(issue => (
                issue.view
            ))
            return newArr
        }
       
    }

    const data = {
        labels: getTitle(),
        datasets: [
            {
                label: 'top viewed issue',
                data: getData(),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
        
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        stepSize:2,
                        min:0,
                        max:20
                    },
                },
            ],
        },
        // maintainAspectRatio:false,
        aspectRatio:1

    }
    return (
        <div>
            <Bar data={data} options={options}/>
        </div>
    )
}

export default ViewIssue
