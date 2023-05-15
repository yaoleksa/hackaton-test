import ReactDOM from "react-dom/client";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ie = [{date: new Date(), source: 'work', amount: '1200'}];
const button = (innerText, v) => {
    return (<Button variant={v} class="btn">{innerText}</Button>);
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
    {button("add income", "success")}{button("add expense", "danger")}</>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);