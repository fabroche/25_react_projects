import './MenuItem.css'
import MenuList from "../MenuList/MenuList.jsx";
import {useState} from "react";

function MenuItem({item}) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    const hasChildren = item && item.children && item.children.length > 0;


    function handleToggleChildren(currentItemLabel) {
        setDisplayCurrentChildren(
            {
                ...displayCurrentChildren,
                [currentItemLabel]: !displayCurrentChildren[currentItemLabel]
            }
        );
    }

    return (
        <li style={{padding: '8px'}}>
            <div
                className="menu-item-container"
                onClick={() => handleToggleChildren(item.label)}
            >
                {
                    hasChildren && (
                        <span
                            className="menu-item-expandBtn"
                        >
                            {displayCurrentChildren[item.label] ? '-' : '+'}
                        </span>
                    )

                }
                <p className="menu-item">{item.label}</p>

            </div>
            {
                hasChildren && displayCurrentChildren[item.label] && (
                    <MenuList list={item.children}/>
                )
            }
        </li>
    );
}

export default MenuItem;