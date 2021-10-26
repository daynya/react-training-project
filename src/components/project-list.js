import React from 'react';
import project from './project';

const projectList = (props) => {
    return (
        <div className="project-list">
            <table>
                <tr className="table-header">
                    <td>Name</td>
                    <td>Status</td>
                    <td>% Complete</td>
                    <td>Project Manager</td>
                    <td>Modified</td>
                    <td>Edit</td>
                </tr>
            </table>
        </div>
    );
};

export default projectList;