import Styled from 'styled-components'

export const Grid = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
width: 960px;
align-items: center;
`
export const Container = Styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
padding: 10px 40px;
border-bottom: solid 1px #e6e6e6;
margin-bottom: 60px;
background-color: #fff;
position: sticky;
top: 0;
z-index: 1;
`
export const Logo = Styled.img`
height: 40px;
`
