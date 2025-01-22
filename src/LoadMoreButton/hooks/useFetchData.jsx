import {useState, useEffect} from 'react';
import {fetchProducts} from "../api/dummyJsonProducts.js";

function useFetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchProducts();
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
