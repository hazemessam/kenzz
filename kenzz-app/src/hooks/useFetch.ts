import { useState, useEffect } from "react";


export function useFetch(url: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function fetchData() {
        fetch(url)
            .then(res => {
                if (res.status != 200) throw Error("Failed to load images");
                return res.json();
            })
            .then(data => setData(data))
            .catch(err => {
                console.log(err);
                setError(err);
            })
            .finally(() => setLoading(false));
    }

    function reFetch() {
        setLoading(true);
        fetchData();
    }

    useEffect(fetchData, []);

    return [data as any, loading, error, reFetch];
}
