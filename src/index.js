import ReactDOM from "react-dom/client";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const ie = [];
await axios.get(`${window.location.href}profitInfo`).then(response => {
    ie.push(response.data);
});
const hide = () => {
    let form = document.getElementById('form');
    if(form.style.display == 'none'){
        form.style.display = '';
    } else {
        form.style.display = 'none';
    }
}
const postProfitData = () => {
    axios.post(`${window.location.href}insertIncome`, "date='2023-05-17'&source='work'&amount=9");
}
const inputForm = () => {
    return (
        <>
        <Form id="form" style={{display: 'none'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Transaction date</Form.Label>
                <Form.Control type="datetime-local" placeholder="Enter date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Income Source</Form.Label>
                <Form.Control type="text" placeholder="Enter source" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder="0.0"></Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={postProfitData}>
                Submit
            </Button>
        </Form>
    </>
    );
}
const button = (innerText, v, f) => {
    return (<Button variant={v} className="btn" onClick={f}>{innerText}</Button>);
}
const incomeTable = () => {
    return (<>
    <Table striped>
        <thead>
            <tr>
                <th>Date</th>
                <th>Source</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {Array.from(ie).map((_, index) => (
                <tr key={index}>{
                    Object.keys(ie[index]).map(i => (
                        <td key={i}>{'' + ie[index][i]}</td>
                    ))
                }</tr>
            ))}
        </tbody>
    </Table>
    </>);
}
const App = () => {
    return (<>{incomeTable()}
    {button("add income", "success", hide)}{button("add expense", "danger", null)}
    {inputForm()}</>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);