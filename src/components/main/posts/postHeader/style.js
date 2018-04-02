import Styled from 'styled-components'

export const Grid = Styled.div`
display: grid;
grid-template-columns: 30px 1fr;
grid-auto-flow: column;
align-items: center;
color: #262626;
padding: 16px;
`
export const PostedBy = Styled.div`
font-weight: 600;
font-size: 14px;
cursor: pointer;
`
export const PostedFrom = Styled.div`
font-size: 12px;
cursor: pointer;
`
export const PostedInfo = Styled.div`
margin-left: 12px;
`
export const PostedByImg = Styled.img`
width: 30px; 
height: 30px;
border-radius: 15px; 
`
