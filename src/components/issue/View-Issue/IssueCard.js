import React from 'react'
import { CardHeader, CardBody } from "reactstrap";

const IssueCard = ({ title, description, severity, status, createdAt, resolveAt }) => {

    const formatDate = (dateStr) => {
        const dArr = dateStr.split("-");  // ex input "2010-01-18"
        return dArr[2] + "/" + dArr[1] + "/" + dArr[0]; //ex out: "18/01/10"
    }
    return (
        <div>
            <div className="d-flex justify-content-between">

            </div>
            <CardHeader className="text-center text-capitalize">
                {title}
            </CardHeader>
            <CardBody>
                {description &&
                    <p>Description :
                    <span className="text-muted">{description}</span>
                    </p>
                }
                {severity &&
                    <p>Severity :
                    <span className="text-muted">{severity}</span>
                    </p>
                }
                {status &&
                    <p>Status :
                    <span className="text-muted">{status}</span>
                    </p>
                }
                {createdAt &&
                    <p>
                        Created At : <span className="text-muted">{createdAt && formatDate(createdAt)}</span>
                    </p>

                }
                {resolveAt &&
                    <p>
                        Resolved At : <span className="text-muted">{resolveAt && formatDate(resolveAt)}</span>
                    </p>

                }

            </CardBody>

        </div>

    )
}

export default IssueCard
