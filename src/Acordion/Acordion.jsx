import React, {useState} from 'react';
import './Acordion.css';
import data from "./dataMock.js";
import AcordionItem from "./components/AcordionItem.jsx";

function Acordion() {

    const [selected, setSelected] = useState(null)

    const [isEnableMultiSelection, setIsEnableMultiSelection] = useState(false)

    const [multiSelectedAcordionItems, setMultiSelectedAcordionItems] = useState([])


    function toggleMultiSelectionMode(isEnableMultiSelection) {
        setIsEnableMultiSelection(!isEnableMultiSelection);
    }

    return (
        <div className="wrapper">
            <h2>Funny Accordion</h2>
            <button
                className={`btn ${isEnableMultiSelection ? 'btn-active' : ''}`}
                onClick={() => toggleMultiSelectionMode(isEnableMultiSelection)}
            >
                {isEnableMultiSelection ? 'Disable multi selection' : 'Enable multi selection'}
            </button>
            {
                data && data.length > 0
                    ? data.map(
                        dataItem => <AcordionItem
                            key={dataItem.id}
                            data={dataItem}
                            selected={selected}
                            setSelected={setSelected}
                            isEnableMultiSelection={isEnableMultiSelection}
                            multiSelectedAcordionItems={multiSelectedAcordionItems}
                            setMultiSelectedAcordionItems={setMultiSelectedAcordionItems}
                        />
                    )
                    : (<p>Not data found !</p>)
            }
        </div>
    );
}

export {Acordion};