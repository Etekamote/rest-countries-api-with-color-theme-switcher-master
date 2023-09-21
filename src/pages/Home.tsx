import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import {useQuery} from "@tanstack/react-query"
import { CountryCard } from '../components/CountryCard';

export const Home = () => {
    const [searchedCountry, setSearchedCountry] = useState("Poland")
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
    {data.map((item: any) => <CountryCard key={item.name.common} data={{
        name: item.name.common,
        native: item.name.native,
        population: item.population,
        region: item.region,
        subregion: item.subregion,
        capital: item.capital[0],
        domain: item.tld[0],
        currencies: item.currencies,
        languages: item.languages,
        borders: item.borders,
        flag: item.flags.png,
        flagAlt: item.flags.alt 


    }}/>)}
    </>
  )
}
