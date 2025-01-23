import './MenuList.css'
import MenuItem from "../MenuItem/MenuItem.jsx";

function MenuList({list = []}) {

    return (<ul className="menu-list-container">
        {
            list && (
                list.map(
                    (listItem) => <MenuItem
                        key={listItem.label}
                        item={listItem}
                    />
                )
            )
        }
    </ul>);
}

export default MenuList;