import { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import {useQuery} from "@tanstack/react-query"
import { CountryCard } from '../components/CountryCard';
import {styled} from "styled-components"



const StyledMain = styled.main`
display: flex;
flex-direction: column;
padding: 0 5rem;
`


export const Home = () => {
    const [searchedCountry, setSearchedCountry] = useState("")
    const [region, setRegion] = useState("")
    const {data, isLoading, isError, refetch} = useQuery({
        queryKey: ["countries"],
        queryFn: async () => {
            try{
            const response = await fetch(`https://restcountries.com/v3.1/${(searchedCountry && `name/${searchedCountry}`) || (region && `region/${region}`) || `all`}`)
            // const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json()
            return data
            }
            catch(error){
                throw error
            }
        }

    })

    useEffect(()=>{
        refetch()
    },[searchedCountry,region])

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>Error</h2>
    }


  return (
    <>
    <SearchBar setSearchedCountry = {setSearchedCountry} />
    <StyledMain>
    {!data.status && data.map((item: any) => <CountryCard key={item.name.common} data={{
        name: item.name.common,
        native: item.name.native,
        population: item.population,
        region: item.region,
        subregion: item.subregion,
        capital: item.capital ? item.capital[0] : null,
        domain: item.tld ? item.tld[0] : null,
        currencies: item.currencies,
        languages: item.languages,
        borders: item.borders,
        flag: item.flags.png,
        flagAlt: item.flags.alt 


    }}/>)}
    {data.status && <h3>Cannot find this country</h3>}
    </StyledMain>
    </>
  )
}
