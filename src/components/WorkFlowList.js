/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function SmallExample() {

    let navigate = useNavigate();
    const [workFlowData, setWorkFlowData] = useState("");

    const TableStyle = {
        fontSize: "22px",
        width: '75%',
        height: 'auto',
        margin: 'auto',
        marginTop: '5%',
        border: '1px solid black',
        boxShadow: '0px 0px 10px 5px #d2d2d2',
        alignPropTypes: 'center'
    }

    useEffect(() => {
        fetch("https://64307b10d4518cfb0e50e555.mockapi.io/workflow")
            .then((response) => response.json())
            .then((data) => {
                setWorkFlowData(data);
                console.log(workFlowData)
            });
    }, []);

    console.log(workFlowData);

    return (

        <Table style={TableStyle} striped bordered hover size="sm" >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Input Type</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {
                    workFlowData &&
                    workFlowData.map((item, index) =>
                        <tr key={index} onClick={() => {
                            navigate('/workflow/', { state: { workflow_id: index, workflow_name: item.name } })
                        }} style={{ cursor: "pointer" }} >
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.input_type}</td>
                            <td>{item.createdAt}</td>
                        </tr>
                    )
                }

            </tbody>
        </Table >
    );
}

export default SmallExample;

