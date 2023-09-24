import {styled} from "styled-components"


const StyledSelectContainer = styled.div`
display: flex;
justify-content: center;
position: relative;
width: 50%;
`

const StyledSelect = styled.select`
border: none;
appearance: none;
background-color: ${({theme}) => theme.colors.elements};
color: ${({theme}) => theme.colors.text};
width: 100%;
height: 5rem;
border-radius: 5px;
padding-left: 2rem;
`

const StyledArrow = styled.span`
position: absolute;
right: 2rem;
color: ${({theme}) => theme.colors.text};
display: flex;
height: 100%;
align-items: center;
font-size: 1rem;
`


export const Select = ({setRegion}:{setRegion:React.Dispatch<React.SetStateAction<string>>}) => {


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        e.target.value === "all" ? setRegion("") : setRegion(e.target.value)

    }

  return (
    <StyledSelectContainer>
            <StyledSelect onChange={handleChange}>
                <option disabled selected>Filter by region</option>
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </StyledSelect>
            <StyledArrow>v</StyledArrow>
        </StyledSelectContainer>
  )
}
