/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    Background,
    useNodesState,
    useEdgesState,
    Controls,
    MiniMap,
} from 'reactflow';
import 'reactflow/dist/style.css';
import "../css/button.css"

function Sidebar(props) {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const [nodes, setNodes] = useState(['input']);

    const workflow_id = props.workflow_id || 1;

    useEffect(() => {
        fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=${workflow_id}&limit=5`)
            // fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/workflow?page=${(workflow_id % 4) + 1}&limit=5`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setNodes(data);
            });
    }, []);

    return (
        <aside style={{ border: "2px solid red" }}>
            <div style={{ fontSize: "25px" }} className="description">You can drag these nodes to the pane on the right.</div>
            {/* <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                Input Node
            </div> */}
            {/* <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Default Node
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Output Node
            </div> */}
            {nodes && nodes.map(node =>
                <div style={{ textALigh: "center", color: "blue", fontSize: "20px", height: "60px" }} className="dndnode" onDragStart={(event) => onDragStart(event, `${node.name}`)} draggable>
                    {`${node.name}`}
                </div>
            )}
        </aside >
    );
};


const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'input node' },
        position: { x: 250, y: 5 },
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = (props) => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onConnect = useCallback((params) => {
        setEdges((eds) => addEdge(params, eds))
        console.log(params.target);
        nodes.forEach(node => {
            if (node.id === params.target) {
                node.style = { border: "2px solid black" };
                console.log(node);
            }
        });
    }, []);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: `${type} node` },
                style: { border: "2px solid red" }
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    return (
        <div style={{ width: "100%", height: "100vh" }} className="dndflow">
            {/* {nodes && nodes.map(node => {
                <h1>{node}</h1>
            }
            )} */}
            <ReactFlowProvider>
                <Sidebar workflow_id={props.workflow_id} />
                <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        fitView
                    >
                        <Controls />
                        <MiniMap />
                        <Background variant="dots" gap={12} size={1} />
                    </ReactFlow>
                </div>
            </ReactFlowProvider>
        </div>
    );
};

export default DnDFlow;