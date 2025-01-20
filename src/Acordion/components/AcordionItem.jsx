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

    const answer = (<div className="answer">{data.answer}</div>)

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
                isEnableMultiSelection
                    ? multiSelectedAcordionItems.includes(data.id)
                        ? answer
                        : null
                    : selected === data.id
                        ? answer
                        : null
            }

        </div>
    );
}

export default AcordionItem;