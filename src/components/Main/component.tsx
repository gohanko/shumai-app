import React from "react";
import Sidebar from "../Sidebar/component";
import Explorer from "../Explorer";
import Workspace from '../Workspace';

const Main = () => (
    <div className="w-full flex-1 flex">
        <Sidebar />
        <Explorer />
        <Workspace />
    </div>
)

export default Main