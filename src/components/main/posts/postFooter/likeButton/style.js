import Styled from 'styled-components'

const LikeIconStyle = Styled.div`
color: ${props => props.isLiked ? 'red' : 'gray'};
display: inline-block;
cursor: pointer;
margin-left: -8px;
padding: 8px;
font-size: ${props => props.isSmall ? '14px' : '22px'};
&:active{
  opacity: 0.7;
}
`
export default LikeIconStyle
