import Table from 'react-bootstrap/Table';
import React from "react";

function TableSample() {
  return (
    
    <div  className='table_head'>
        <h3>head</h3>
    <div>

    </div>

        <div>
        <Table className='table' striped bordered hover size="sm">
        <thead>
            <tr className='thead'>
            <th>NUM</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <td>3</td>
            <td>ccc</td>
            <td>sdf</td>
            <td>cas</td>
            </tr>
            <tr>
            <td>4</td>
            <td>ccc</td>
            <td>sdf</td>
            <td>cas</td>
            </tr>
            <tr>
            <td>5</td>
            <td>ccc</td>
            <td>sdf</td>
            <td>cas</td>
            </tr>
        </tbody>
        </Table>
        </div>
    </div>
  );
}

export default TableSample;