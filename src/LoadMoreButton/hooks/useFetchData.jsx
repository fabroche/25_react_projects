import {useState, useEffect} from 'react';
import {fetchProducts} from "../api/dummyJsonProducts.js";

function useFetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const result = await response.json();

                setData([...data, ...result.products]);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return {data, setData, loading, error};
}

export default useFetchData;
