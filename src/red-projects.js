import React from 'react';
import './red-projects.css';

class Red extends React.Component {
    render() {
        return (
        <div className="folder red-folder flex-auto">
        <span class="material-icons">
        report_problem
        </span>
        <h1 text-xl font-semibold>18</h1>
        {/* <h1>{this.props.number}</h1> */}
        <h2>Red Projects</h2>
        </div>
        );
    }
}

export default Red;