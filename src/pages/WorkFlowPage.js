/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import FlowCreator from "../components/FlowCreator";
import Sidebar from "./SideBar";
import FlowPage from "./FlowPage";

const WorkFlowPage = () => {
    let { state } = useLocation()
    let workflow_id = state.workflow_id;
    let workflow_name = state.workflow_name;

    console.log(workflow_id);
    console.log(workflow_name);

    return (
        <>
            <Header />
            <h2 style={{ marginBottom: "30px", marginLeft: "10%", marginRight: "10%", width: "80%", color: "blueviolet", backgroundColor: "wheat" }}>Work Flow Name : {workflow_name}</h2>
            <div>
                <FlowPage workflow_id={workflow_id} />
            </div>
        </>
    )
}

export default WorkFlowPage;
