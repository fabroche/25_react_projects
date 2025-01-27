import React, {useEffect, useState} from 'react';


const getLocalStorageItem = (key, defaultValue) => {
    try {
        const savedItem = localStorage.getItem(key);
        return savedItem ? JSON.parse(savedItem) : defaultValue;
    } catch (error) {
        console.error("Error parsing localStorage item:", error);
        return defaultValue;
    }
};

const setLocalStorageItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error saving localStorage item:", error);
    }
}

function useLocalStorage({key, defaultValue}) {
    const [itemValue, setItemValue] = useState(() => getLocalStorageItem(key, defaultValue));

    useEffect(() => {
        setLocalStorageItem(key, itemValue);
    }, [key, itemValue]);

    return {
        itemValue,
        setItemValue,
    };
}

export default useLocalStorage;