import React from 'react'
import styled from 'styled-components'



let Container = styled.div`
    border: 1px solid gray;
    display: flex;
    flex-direction: grid;
    margin: auto;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 450px;
    width: 350px;
    justify-content: center;
    text-align: center;
    border-radius: 20px;
    box-shadow: .5px .5px 2px 2px rgba(0, 0, 0, 0.2) ;
    background: #fff;
    box-sizing: border-box;
    textarea:focus, input:focus{
    outline: none;
}
`

let Input1 = styled.input`
position: absolute;
display: block;
top: 20%;
border-style: hidden;
border-bottom-style: solid;
background-color: transparent;
text-align: center;
border-width: 1px;
width:60%;



::placeholder{
    color: purple;
}
`



let Input2 = styled.input`
position: absolute;
display: block;
top: 40%;
border-style: hidden;
border-bottom-style: solid;
background-color: transparent;
text-align: center;
border-width: 1px;
width:60%;


::placeholder{
    color: purple;
}

`


let Forgot = styled.p`
position: absolute;
font-family: sans-serif;
display: flex;
justify-content: flex-start;
font-size: 10px;
top: 42%;
color:gray;
`


let Button = styled.button`

`



const SubmitForm = () => {
    return (

        <Container>


            <Input1 placeholder='email' />
            <Input2 placeholder='password' />
            <Forgot>Forgot Password?</Forgot>
            {/* <Button /> */}

        </Container>
    )
}

export default SubmitForm
