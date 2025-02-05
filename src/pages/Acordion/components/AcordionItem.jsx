import './AcordionItem.css';
import {useEffect, useState} from "react";

function AcordionItem({
                          data,
                          selected,
                          setSelected,
                          isEnableMultiSelection,
                          multiSelectedAcordionItems,
                          setMultiSelectedAcordionItems
                      }) {

    const [isShowedAnswer, setIsShowedAnswer] = useState(false);

    const isActivateItem = (isEnableMultiSelection && isShowedAnswer || selected === data.id);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {

        if (multiSelectedAcordionItems.includes(getCurrentId)) {

            const newSelectedAcordionItems = multiSelectedAcordionItems.filter(item => item !== getCurrentId);
            setMultiSelectedAcordionItems(newSelectedAcordionItems);
            setIsShowedAnswer(false);
            return
        }
        setMultiSelectedAcordionItems([...multiSelectedAcordionItems, getCurrentId]);
        setIsShowedAnswer(true);
    }


    return (
        <div className={`item flex-center ${isActivateItem ? 'item--active' : ''}`}>
            <div
                className="title flex-center"
                onClick={() => isEnableMultiSelection
                    ? handleMultiSelection(data.id)
                    : handleSingleSelection(data.id)}
            >
                <h3>{data.question}</h3>
                <button className={`item-btn ${isActivateItem ? 'item-btn--active' : ''}`}>{'>'}</button>
            </div>
            <em className={`answer ${ isActivateItem ? 'answer--active' : ''}`}>{data.answer}</em>
        </div>
    );
}

export default AcordionItem;