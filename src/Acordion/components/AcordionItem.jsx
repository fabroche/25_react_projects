import React, {useState} from 'react';
import './AcordionItem.css';

function AcordionItem({
                          data,
                          selected,
                          setSelected,
                          isEnableMultiSelection,
                          multiSelectedAcordionItems,
                          setMultiSelectedAcordionItems
                      }) {

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {

        if (multiSelectedAcordionItems.includes(getCurrentId)) {

            const newSelectedAcordionItems = multiSelectedAcordionItems.filter(item => item !== getCurrentId);
            setMultiSelectedAcordionItems(newSelectedAcordionItems);
            return
        }
        setMultiSelectedAcordionItems([...multiSelectedAcordionItems, getCurrentId]);
    }

    return (
        <div className="item flex-center">
            <div
                className="title flex-center"
                onClick={() => isEnableMultiSelection
                    ? handleMultiSelection(data.id)
                    : handleSingleSelection(data.id)}
            >
                <h3>{data.question}</h3>
                <button className="btn">+</button>
            </div>
            {
                selected === data.id || isEnableMultiSelection && multiSelectedAcordionItems.includes(data.id)
                    ? (<div className="answer">{data.answer}</div>)
                    : null
            }
        </div>
    );
}

export default AcordionItem;