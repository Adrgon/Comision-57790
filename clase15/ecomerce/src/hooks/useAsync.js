import { useEffect, useState } from "react";

export const useAsync = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setLoading(true)
        asyncFunction()
        .then((data)=>{
            setData(data)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=> {
            setLoading(false)
        })
    }, dependencies);

    return {
        data,
        loading,
        error
    }
}
