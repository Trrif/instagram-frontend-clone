import Styled from 'styled-components'

export const Mark = Styled.div`
color: white;
font-size: 14px;
background-color: #000;
user-select: none;
position: absolute;
cursor: pointer;
visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
padding-left: 10px;
padding-right: 10px;
border-radius: 4px;
top: ${props => props.top}px;
left ${props => props.left}px;
&:before {
  content: '';
  border: 6px solid transparent;
  border-bottom: 6px solid #000;
  position: absolute;
  top: -75%;
  left: 50%;
  margin-left: -6px;
  width: 0;
}
`
export const PostContent = Styled.img`
cursor: ${props => props.isHaveMarks ? 'pointer' : 'default'};
user-select: none;
width: 100%;
`
export const PostBodyStyle = Styled.div`
position: relative;
text-align: center;
`
