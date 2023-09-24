import { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import {useQuery} from "@tanstack/react-query"
import { CountryCard } from '../components/CountryCard';
import {styled} from "styled-components"
import { Select } from '../components/Select';



const StyledMain = styled.main`
display: flex;
flex-direction: column;
padding: 0 5rem;
@media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const StyledFilters = styled.div`
padding: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;
@media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 5rem;
  }
`





export const Home = () => {

    

      

    const [searchedCountry, setSearchedCountry] = useState("")
    const [region, setRegion] = useState("")
    const {data, isLoading, isError, refetch} = useQuery({
        queryKey: ["countries"],
        queryFn: async () => {
            try{
            const response = await fetch(`https://restcountries.com/v3.1/${(searchedCountry && `name/${searchedCountry}`) || (region && `region/${region}`) || `all`}`)
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
    <StyledFilters>
        <SearchBar setSearchedCountry = {setSearchedCountry} />
        <Select setRegion={setRegion}/>
        </StyledFilters>
    
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
