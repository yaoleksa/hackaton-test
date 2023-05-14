import ReactDOM from "react-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const button = (innerText, v) => {
    return (<Button variant={v} class="btn">{innerText}</Button>);
}
const table = () => {
    return (<>
    <Table striped>
        <thead>
            <tr>
                <th>Date</th>
                <th>Source</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody></tbody>
    </Table>
    </>);
}
const App = () => {
    return (<>{table()}
    {button("add income", "success")}{button("add expense", "danger")}</>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);