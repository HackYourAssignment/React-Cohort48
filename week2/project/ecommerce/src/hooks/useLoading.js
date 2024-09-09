import { useState, useEffect } from 'react';

export const useLoading = (asyncFunction) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const executeAsyncFunction = async () => {
            setLoading(true);
            await asyncFunction();
            setLoading(false);
        };

        executeAsyncFunction();
    }, [asyncFunction]);

    return loading;
};
