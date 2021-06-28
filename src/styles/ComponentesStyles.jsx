import styled from 'styled-components';

export const Button = styled.button`

  a{
    text-decoration:none;
    color: black;
  }
`;

export const Titulo = styled.h1`
 font-family: sans-serif;
 color: #579dcc;
 font-size: 1em;
 text-align: center;
 margin: 5%;
 text-shadow:rgb(86, 152, 65) 4px 4px 5px;
 -webkit-text-stroke-width: 0.8px; /* largura da borda */
 -webkit-text-stroke-color: #000;

`;

export const Container = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content:center;
align-items:center;
`;

export const ContainerDetails = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
width: 100%;

h1{
  color: rgb(255,255,255, 0.8);
  font-family: sans-serif;
  text-shadow:rgb(86, 152, 65) 4px 4px 5px;
  margin: 2%;
}

a{
  font-size: 250%;
  color: rgb(255,255,255, 0.8);
  margin: 5%;
}
`;

export const BoxContainer = styled.div`
display: flex;

@media (max-width: 780px) {
  flex-direction: column;
}
`;

export const DetailsSpan = styled.div`
display: flex;
flex-direction: column;
color: rgb(255,255,255, 0.5);
font-size: 20px;
margin-top: 15%;
font-family: sans-serif;

@media (max-width: 780px){
  margin: 5%;
}
`;

export const BasicDetail = styled.div`
display: flex;
flex-direction: column;
margin-right: 10%;
align-items: center;
align-content: center;
`;

export const Imagem = styled.img`
width: 50%;
height: auto;
border-radius:50%;
box-shadow: 10px 5px 5px black;
`;


export const ImagemDetail = styled.img`
width: 100%;
height: auto;
border-radius:50%;
box-shadow: 10px 5px 5px black;
margin: 3%;

@media (max-width: 780px){
  width: 70%;
}
`;

export const BoxCards = styled.div`
width:18%;
display:flex;
flex-direction: column;
align-items: center;
border-radius:10px;
align-content:center;
margin: 0.5%;
border: 2px solid rgb(255,255,255,0.9);
background-color: rgb(255,255,255,0.7);

@media (max-width: 780px){
  width:40%;
  margin: 2%;

  button{
    width:90%;

    a{
      text-align: center;
      font-size: 80%;
    }
  }
}
`;

export const GroupButtons = styled.div`
display: flex;
flex-direction: row;
border-radius: 10px;
margin: 2%;
padding:2%;

button{
  margin: 0px;
  border: none;
  border-radius:0px;
  background-color: transparent;
  font-size: 500%;
  color: white;

  :disabled {
    color: grey;
  }
}
`;

export const ImagemHeader = styled.img`
width: 50vw;
height:300px;
margin: -50px 0px;


@media (max-width: 780px){
  width: 90vw;
  margin: -70px 20px;
  padding: 0px 20px;
}
`;
