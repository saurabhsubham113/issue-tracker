import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark d-flex justify-content-center align-items-center" style={{
            position: "fixed",
            bottom: "0",
            height:"50px",
            width: "100%"
        }}>
            <p className="text-white mx-4 mb-0">Issue tracker</p>
            <p className="text-white mb-0">Capstne project for React.Js</p>
        </footer>
    )
}

export default Footer
