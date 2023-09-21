import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {styled} from 'styled-components'


const StyledBar = styled.div`
margin: 2rem 2rem;
background-color: ${({theme}) => theme.colors.input};
box-shadow: ${({theme}) => theme.name === "light" ?"2px 3px 15px -3px rgba(220, 220, 220, 1)" : "2px 3px 15px -3px rgba(43, 43, 43, 1);" } ;
display: flex;
padding: 0 2rem;
height: 3rem;
border-radius: 5px;
align-items: center;
gap: 2rem;
color: grey;
`

const StyledInput = styled.input`
width: 80%;
font-size: 12px;
background-color: transparent;
border: none;
outline: none;
color: grey;
&:focus{
    font-size: 14px;
}
`


export const SearchBar = ({setSearchedCountry}: {setSearchedCountry: React.Dispatch<React.SetStateAction<string>>}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchedCountry(e.target.value)
        }
  return (
    <StyledBar>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <StyledInput placeholder="Search for a country..." onChange={handleChange} />
    </StyledBar>
  )
}
