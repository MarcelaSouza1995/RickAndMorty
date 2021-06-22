import styled from 'styled-components';

export const Button = styled.button`
  color: rgb(1,1,1);
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  background-color:green;
  width:80%;

  :disabled {
    background-color: rgb(1,1,1,0.5)
  }
`;

export const Titulo = styled.h1`
 color:black;
 font-size: 100%;
 text-align: center;
`;

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content:center;

@media (max-width: 760) {
  display:flex;
  flex-direction: column;
}
`;

export const ContainerDetails = styled.div`
display: flex;
flex-direction: column;

img{
  width:100px
}
`;

export const Imagem = styled.img`
width: 50%;
height: auto;
border-radius:50%;
`;

export const BoxCards = styled.div`
width:15%;
display:flex;
flex-direction: column;
align-items: center;
border-radius:10px;
align-content:center;
margin: 2px;
background-color: rgb(1,1,1,0.1)`
;

export const GroupButtons = styled.div`
display: flex;
flex-direction: row;
border-radius: 10px;
margin: 2%;
padding:2%;
border: 1px solid gray;

button{
  margin: 0px;
  border: none;
}
`;

export const ImagemHeader = styled.img`
width:50vw;
height:300px;
margin:0px;
`;