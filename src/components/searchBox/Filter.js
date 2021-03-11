import React from 'react'

const Filter = ({ filterchange }) => {


    return (
        <div style={{ zIndex: 100, position: "absolute" ,top:"125%",width:"150px",right:"0",color:"white" }} 
        className="d-flex bg-secondary flex-column border border-secondary p-2 rounded">

            <div >
                <input type="checkbox" id="description" name="description" onChange={filterchange} />
                <label className="ml-2" htmlFor="description"> description</label>
            </div>
            <div className="">
                <input type="checkbox" id="severity" name="severity" onChange={filterchange} />
                <label className="ml-2" htmlFor="severity" > severity</label>
            </div>
            <div className="">
                <input type="checkbox" id="status" name="status" onChange={filterchange} />
                <label className="ml-2" htmlFor="status">status </label>
            </div>
            <div className="">
                <input type="checkbox" id="createdat" name="createdAt" onChange={filterchange} />
                <label className="ml-2" htmlFor="createdat"> created At</label>
            </div>
            <div className="">
                <input type="checkbox" id="resolvedat" name="resolvedAt" onChange={filterchange} />
                <label className="ml-2" htmlFor="resolvedat"> resolved At</label>
            </div>
        </div>
    )
}

export default Filter
