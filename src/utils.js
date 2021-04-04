import {useState, useEffect} from "react"

export const useDataAPI = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [url, setUrl] = useState(initialUrl)

    useEffect(() => {
        const fetchData = async() => {
            setIsError(false);
            setIsLoading(true);

            try {
                if(url) {
                    const result = await fetch(url);
                    const json = await result.json();
    
                    setData(json);
                }
            } catch(error) {
                console.error(error)
                setIsError(true);
            }
            setIsLoading(false)
        }

        fetchData();
    }, [url]);

    return [{data, isLoading, isError}, setUrl]
}