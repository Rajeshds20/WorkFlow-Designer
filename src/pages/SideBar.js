/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import "../css/button.css"
import "../css/extra.css"

export default function Sidebar() {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const [nodes, setNodes] = useState(['input']);

    return (
        <aside>
            <div style={{ fontSize: "24px" }} className="description">You can drag these nodes to the pane on the right.</div>
            {/* <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                Input Node
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Default Node
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Output Node
            </div> */}

            {nodes && nodes.map(node =>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                    {node.value}
                </div>
            )}

        </aside>
    );
};
