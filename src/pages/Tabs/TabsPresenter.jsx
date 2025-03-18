import React, {useState} from 'react';
import {tabs} from './data/tabs.js';
import Tabs from "./components/Tabs.jsx";

function TabsPresenter() {
    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }

    return (
        <>
            <Tabs tabsContent={tabs} onChange={handleChange}/>
        </>
    );
}

export {TabsPresenter};