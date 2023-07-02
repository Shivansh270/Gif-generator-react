import React, { createContext, useState } from 'react'

export const ResultContext = createContext();

const baseUrl = 'https://google-search72.p.rapidapi.com';

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')

    const getResults = async (type) => {
        setIsLoading(true);

        const res = await fetch(`${baseUrl}${type}`,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e40ea65b67msh5af1f0eff8d9c30p11475ajsn4d172f751a5d',
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        }
      })
        const data = res.json();
        setResults(data);
        isLoading(false)
      }

    const value = {
        results,
        setResults,
        isLoading,
        setIsLoading,
        page,
        searchTerm,
        setSearchTerm,
        getResults
    };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

