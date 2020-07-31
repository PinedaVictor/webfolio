import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { theme } from '../../../../theme/index'
// color: ${props => props.theme.colors.black};
export const NavLinkStyled = css`
    display: flex;    
    justify-content: center;    
    align-items: center;
    font-size: 20px;
    font-style: bold;    
    font-weight: 500;
    line-height: .01;
    padding-right: 21px;
    ${props => props.hassubmenu === "false" && css`
        padding: 0;
    `}
    
    &:before{
        position: absolute;
        content: '';
        left: 0;
        top: 0%;
        width: 100%;
        height: 100%;
    }
    &.active{
        color: ${props => props.theme.colors.themeColor};
    }
    span{
        display: inline-block;                
        margin: auto;
        font-style: bold;
        padding: 31px 0;        
        color: ${theme.colors.themeColor};
        &:before{
            content: '';
            width: 0;
            height: 3px;
            bottom: 0;
            position: absolute;
            left: 0;
            background-color: ${props => props.theme.colors.themeColor};
            transition: ${props => props.theme.transition};
        }        
    }
    & > .icon{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 23px;
        height: 23px;
    }
`

export const AnchorTag = styled.a`
    ${NavLinkStyled}
`;

export const NavLinkWrap = styled(Link)`
    ${NavLinkStyled}
`;

export const SmoothScroll = styled(AnchorLink)`
    ${NavLinkStyled}
`;