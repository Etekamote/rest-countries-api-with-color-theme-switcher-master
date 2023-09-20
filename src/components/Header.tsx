import React from 'react'


type HeaderProps = {setTheme: React.Dispatch<React.SetStateAction<{
    background: string;
    text: string;
    elements: string;
    input: string;
}>>}


export const Header = ({setTheme} : HeaderProps) => {
  return (
    <div>Header</div>
  )
}
