import './TreeView.css'
import MenuList from "./components/MenuList/MenuList.jsx";
import {useEffect} from "react";

function TreeView({menus = []}) {

    return (
        <>
            <h1>Tree View</h1>
            <div className="tree-view-container">
                {
                    <MenuList list={menus}/>
                }
            </div>
        </>
    );
}

export default TreeView;