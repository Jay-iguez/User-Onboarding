import styled from 'styled-components'

export const HeadingStyledDiv = styled.div`
margin: 2rem 1.2rem;
background-color: #c7edd4;
border: 1px solid black;
border-radius: 3rem;
color: #2b3a33 ;
font-family: 'Jost';
font-size: 1.3rem;

h1 {
    font-size: 3rem;
    margin: 1rem;
}
p {
    font-size: 2rem;
    margin: 1rem;
}
span {
    background-color: #79c8bd ;
    width: 20%;
}

#mainHeading {
    display: flex;
    justify-content: space-between;
}

#disclaimer {
    font-size: 1rem;
}
`

export const BodyStyledDiv = styled(HeadingStyledDiv)`
background-color: #9be8d3 ;
`
