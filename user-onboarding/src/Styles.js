import styled from 'styled-components'

export const HeadingStyledDiv = styled.div`
margin: 2rem 1.2rem;
background-color: #c7edd4;
border: 1px solid black;
border-radius: 2rem;
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

#error {
    background-color: red;
    color: white;
}
`

export const BodyStyledDiv = styled(HeadingStyledDiv)`
background-color: #9be8d3 ;



form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

span {
    background-color: #6255ea ;
}

button {
    width: 20%;
    height: 3rem;
    font-size: 2rem;
}

#income {
    display: flex;
    justify-content: center;
    width: 10%;
    input {
        width: 1.5rem;
    }
}

.alot {
    background-color: #94ff83 ;
}

.good {
    background-color:  #f2ff83 ;
}

.bad {
    background-color: #f16868 ;
}

#inputParent {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 1rem 2rem;
    border-radius: 2rem;
    background-color: #559fea  ;

    input {
        text-align: center;
        font-size: 2rem;
    }

    #selectterms {
        width: 1.2rem;
    }
}
`
