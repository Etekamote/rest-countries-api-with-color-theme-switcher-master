import React from 'react'
import {styled} from "styled-components"
import { Link } from 'react-router-dom'


type CountryCardProps = {
    name: string,
    native: string,
    population: number,
    region: string,
    subregion: string,
    capital?: string | null,
    domain?: string | null,
    currencies: Object,
    languages: Object,
    borders: string[],
    flag: string,
    flagAlt: string


}

const StyledCard = styled.div`
display: flex;
flex-direction: column;
background-color: ${({theme}) => theme.colors.elements};
box-shadow: ${({theme}) => theme.name === "light" ?"2px 3px 15px -3px rgba(220, 220, 220, 1)" : "2px 3px 15px -3px rgba(43, 43, 43, 1);" } ;
height: 300px;
color: ${({theme}) => theme.colors.text};
margin-bottom: 4rem;
@media (min-width: 800px) {
  width: 22%;
}
`

const StyledImg = styled.img`
height: 50%;
`

const StyledContent = styled.div`
padding: 2rem;
font-size: 1.2rem;
`
const StyledName = styled(Link)`
margin-bottom: 2rem;
text-decoration: none;
color: ${({theme}) => theme.colors.text};
font-size: 1.8rem;
font-weight: 600;
`

const StyledInfoName = styled.div`
font-weight: 600;
`

const StyledInfo = styled.span`
font-weight: 300;
`

export const CountryCard = ({data} : {data: CountryCardProps}) => {
  return (
    <StyledCard>
        <StyledImg src={data.flag} alt={data.flagAlt} />
        <StyledContent>
            <StyledName to={`/country/${data.name.toLowerCase()}`}>{data.name}</StyledName>
            <StyledInfoName>Population: <StyledInfo>{data.population}</StyledInfo></StyledInfoName>
            <StyledInfoName>Region: <StyledInfo>{data.region}</StyledInfo></StyledInfoName>
           {data.capital && <StyledInfoName>Capital: <StyledInfo>{data.capital}</StyledInfo></StyledInfoName>}
        </StyledContent>
    </StyledCard>
  )
}
