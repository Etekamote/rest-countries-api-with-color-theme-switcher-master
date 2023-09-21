import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import {useQuery} from "@tanstack/react-query"

export const Home = () => {
    const [searchedCountry, setSearchedCountry] = useState("")
    const [region, setRegion] = useState("")
    const {data, isLoading, isError, refetch} = useQuery({
        queryKey: ["countries"],
        queryFn: async () => {
            const response = await fetch(`https://restcountries.com/v3.1/${(!searchedCountry && !region && "all") ||(searchedCountry && `name/${searchedCountry}`) || (region && `region/${region}`) }`)
            const data = await response.json()
            return data
        }

    })


  return (
    <>
    <SearchBar />
    </>
  )
}
