import "./TodosLoading.css"
import React from 'react'

function TodosLoading(props) {
    return (
        <div className="container">
            <h3>Loading</h3>
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </div>
    );
}

export { TodosLoading }