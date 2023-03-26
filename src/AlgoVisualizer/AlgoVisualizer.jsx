import React, { Component } from "react";
import Node from './Node/Node';

import './AlgoVisualizer.css';

export default class AlgoVisualizer extends Component{
    constructor(props){
        super(props);
        this.state = {
            nodes: [],
        };
    }
    componentDidMount(){
        const nodes = [];
        for(let row = 0; row <=20; row++){
            const cRow = [];
            for(let col = 0; col <= 60; col++){
                cRow.push([]);
            }
            nodes.push(cRow);
        }
        this.setState({nodes});
    }
    render(){
        const{nodes} = this.state;
        console.log(nodes)
        
        return(
            <div className="grid">
                {nodes.map((row, rowIdx) => {
                    return <div key={rowIdx}>
                        {row.map((node, nodeIdx) => {
                            return(
                            <Node 
                                key={nodeIdx} 
                                isStart={true} 
                                test={"Meowwww"} ></Node>
                            );
                        })}
                    </div>
                })}
            </div>
        );
    }
}