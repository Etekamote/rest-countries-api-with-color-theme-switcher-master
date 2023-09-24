import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import {styled} from "styled-components"


const StyledContainer = styled.div`
padding: 0 2rem;
margin-top: 4rem;
@media (min-width: 800px) {
    padding: 0 5rem;
  }
`


const StyledButton = styled.button`
background-color: ${({theme}) => theme.colors.elements};
color: ${({theme}) => theme.colors.text};
box-shadow: ${({theme}) => theme.name === "light" ?"2px 3px 15px -3px rgba(220, 220, 220, 1)" : "2px 3px 15px -3px rgba(43, 43, 43, 1);" } ;
border: none;
padding: 1rem;
margin-right: 2rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
margin-right: 1rem;
`
const StyledContent = styled.section`
display: flex;
flex-direction: column;
margin-top: 5rem;
@media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
const StyledImg = styled.img`
width: 100%;
@media (min-width: 800px) {
    width: 50%;
  }
`
const StyledRight = styled.div`
display: flex;
flex-direction: column;
`
const StyledName = styled.h2`
font-weight: 800;
margin-top: 3rem;
`

const StyledInfo = styled.div`
display: flex;
flex-direction: column;
gap: 5rem;
@media (min-width: 800px) {
    flex-direction: row;
  }
`

const StyledInfoPart = styled.div``
const StyledInfoItem = styled.span`
display: flex;
gap: 1rem;
font-weight: 800;
`
const Info = styled.span`
font-weight: 300;
`

const StyledBorderCountries = styled.div`
margin-top: 5rem;
`
const StyledTitle = styled.h4`
font-size: 2rem;
`

export const Country = () => {

    const {country} = useParams();
    const {data, isLoading, isError, refetch} = useQuery({
        queryKey: ["countries"],
        queryFn: async () => {
            try{
            const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
            const data = await response.json()
            return data
            }
            catch(error){
                throw error
            }
        }

    })


    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>Error</h2>
    }

    console.log(data)

    const currencies:any[] = []
    const  languages:string[] = []

    if(data[0]){
        for(let x in data[0].currencies){
            currencies.push(data[0].currencies[x])
        }
        for(let x in data[0].languages){
            languages.push(data[0].languages[x])
        }
    }

   
  return (
   <StyledContainer>
    <StyledButton><StyledIcon icon={faArrowLeft} />Back</StyledButton>
    {!data.status && <StyledContent>
        <StyledImg src={data[0].flags.png} alt={data[0].flags.alt} />
        <StyledRight>
        <StyledName>{data[0].name.common}</StyledName>
        <StyledInfo>
            <StyledInfoPart>
             <StyledInfoItem>Native name:
                 <Info>
                    {data[0].name.official}
                 </Info>
                 </StyledInfoItem>   
                 <StyledInfoItem>Population:
                 <Info>
                    {data[0].population}
                 </Info>
                 </StyledInfoItem> 
                 <StyledInfoItem>Region:
                 <Info>
                    {data[0].region}
                 </Info>
                 </StyledInfoItem>
                 <StyledInfoItem>Sub region:
                 <Info>
                    {data[0].subregion}
                 </Info>
                 </StyledInfoItem>  
                 {data[0].capital && <StyledInfoItem>Native name:
                 <Info>
                    {data[0].capital}
                 </Info>
                 </StyledInfoItem>   }   
            </StyledInfoPart>
            <StyledInfoPart>
            <StyledInfoItem>Top level domain:
                 <Info>
                    {data[0].tld[0]}
                 </Info>
                 </StyledInfoItem>
                 <StyledInfoItem>Currencies:
                 <Info>
                    {currencies.map((item: any) => `${item.name}, `)}
                 </Info>
                 </StyledInfoItem>
                 <StyledInfoItem>Languages:
                 <Info>
                    {languages.map((item: any) => `${item}, `)}
                 </Info>
                 </StyledInfoItem>         
            </StyledInfoPart>
        </StyledInfo>
        <StyledBorderCountries>
        <StyledTitle>Border Countries:</StyledTitle>
        <div>{data[0].borders.map((item: string) => <StyledButton>{item}</StyledButton>)}</div>
        </StyledBorderCountries>
        </StyledRight>
    </StyledContent>}
    {data.status && <h3>Cannot find this country</h3>}
   </StyledContainer>
  )
}
