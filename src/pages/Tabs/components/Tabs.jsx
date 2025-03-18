import React, {useState} from 'react';
import './Tabs.css';
import TabHeading from './TabHeading.jsx';

function Tabs({tabsContent, onChange}) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    function handleOnClick(index) {
        setCurrentTabIndex(index)
        onChange(index)
    }

    return (
        <>
            <div className="heading">
                {
                    tabsContent.map((tab, index) => (
                        <TabHeading
                            key={index}
                            tab={tab}
                            index={index}
                            isSelected={currentTabIndex === index}
                            handleOnClick={handleOnClick}
                        />
                    ))
                }
            </div>
            <div className="content">
                {
                    tabsContent[currentTabIndex]?.content
                }
            </div>
        </>
    );
}

export default Tabs;