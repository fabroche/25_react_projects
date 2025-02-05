import {useState, useEffect} from 'react';
import {fetchDummyJSONProducts} from "../api/dummuJsonProducts.js";

function useFetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const data = await fetchDummyJSONProducts();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return {data, loading, error};
}

export default useFetchData;
