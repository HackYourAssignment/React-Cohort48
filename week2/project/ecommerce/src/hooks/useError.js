import { useState, useEffect } from 'react';

export const useError = (asyncFunction) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        const executeAsyncFunction = async () => {
            try {
                await asyncFunction();
            } catch (err) {
                setError(err.message);
            }
        };

        executeAsyncFunction();
    }, [asyncFunction]);

    return error;
};
