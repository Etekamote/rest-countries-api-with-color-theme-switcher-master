import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {styled} from "styled-components"
import { ThemeType } from '../styles/Theme';
import { light, dark } from '../styles/Theme';


type HeaderProps = {
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>,
    theme: ThemeType
}


const StyledHeader = styled.header`
background-color: ${({ theme }) => theme.colors.elements};
color: ${({theme}) => theme.colors.text};
padding: 0 1rem;
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
box-shadow: ${({theme}) => theme.name === "light" ? "-1px 6px 7px -9px rgba(175, 175, 175, 1)" : "-1px 6px 7px -9px rgba(43, 43, 43, 1)"};
`

const StyledTitle = styled.h1`
font-weight: 800;
font-size: 14px;
`

const StyledThemeSwitch = styled.span`
font-weight: 600;
font-size: 12px;
`

const StyledIcon = styled(FontAwesomeIcon)`
color: ${({theme}) => theme.colors.text}
`

export const Header = ({setTheme, theme} : HeaderProps) => {


  const handleSwitch = () =>{
    theme.name === "light" ? setTheme(dark) : setTheme(light)
  }

  return (
    <StyledHeader>
        <StyledTitle>Where in the world?</StyledTitle>
        <StyledThemeSwitch onClick={handleSwitch}>
            {theme.name === "light" ? <div><StyledIcon icon={faMoon} /> Dark Mode</div> : <div><StyledIcon icon={faSun} />Light Mode</div>}
        </StyledThemeSwitch>
    </StyledHeader>
  )
}
