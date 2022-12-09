import styled from "styled-components";


export const Container=styled.div`


background:black;

  
`
export const Main=styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
margin-inline:auto;
`



export const Interface=styled.div`
  width:100%;
  padding:3rem;
`
export const Form=styled.form`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:0.2rem 0;
padding:1.5rem 0;

background:rgb(32,32,36);


h2{
  color:white;
  font-size: 1.5rem;
  margin-bottom:2rem;
}
input{
  width:80%;
  padding:0 0.5rem;
  height:4rem;
  border-radius:0.25rem;

  border:1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight:400;
  font-size:1rem;

  &::placeholder{
    color: var(--text-body)
  }
  & +input {
    margin-top:.5rem;
  }
}
button[type="submit"]{
  width:80%;
  padding: 0 1.5rem;
  height:4rem;
  background:rgb(130, 87, 229);
  color: #fff;
  border-radius:0.25rem;
  border:0;
  font-size:1rem;
  margin-top:1.5rem;

  &:hover{
    filter:brightness(0.9)
  }


}




`
export const Content=styled.div`
  width:80%;
  margin-left: 2rem;
  gap:2rem;

h2{
  font-size:3rem;
  color:white;
}
h4{
  color:white;
  margin: 3rem 0;

}

a{
  font-size:1rem;
  font-weight:600;
  text-decoration: none;
  color:rgb(130,87,230);
  
  }
`