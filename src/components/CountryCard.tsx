import React from 'react'


type CountryCardProps = {
    name: string,
    native: string,
    population: number,
    region: string,
    subregion: string,
    capital: string,
    domain: string,
    currencies: Object,
    languages: Object,
    borders: string[],
    flag: string,
    flagAlt: string


}


export const CountryCard = ({data} : {data: CountryCardProps}) => {
  return (
    <div>CountryCard</div>
  )
}
