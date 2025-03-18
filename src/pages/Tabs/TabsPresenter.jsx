import React, {useState} from 'react';
import {tabs} from './data/tabs.js';
import Tabs from "./components/Tabs.jsx";

function TabsPresenter() {
    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }

    return (
        <>
            <h1>Custom Tabs</h1>
            <Tabs tabsContent={tabs} onChange={handleChange}/>
        </>
    );
}

export {TabsPresenter};