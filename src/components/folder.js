import React from 'react';
import PropTypes from 'prop-types';
import './projects.css';

/* class Folder extends React.Component {
    render() {
        return (
        <div className="folder flex-auto">
        <span class="material-icons">
        report_problem
        </span>
        <h1 text-xl font-semibold>18</h1>
        <h1>{this.props.number}</h1>
        <h2>Red Projects</h2>
        </div>
        );
    }
} */

const Folder = (props) => {
    return (
        <div className="folder flex-auto">
            <span className="material-icons">
                {props.icon}
            </span>
            <h1>{props.total}</h1>
            <h2>{props.category} Projects</h2>
        </div>
    );
};

export default Folder;