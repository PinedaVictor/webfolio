import styled, {css} from 'styled-components'

export const BurgerButtonWrap = styled.button `
    width: 24px;
    height: 25px;
    position: relative;    
    background: transparent;
    border: none;
    padding: 0;
    div{
        position: absolute;
        top: 50%;
        border-radius: 10px;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: 4px;
        background-color: ${props => props.theme.colors.themeColor};
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:after, 
        &:before{
            position: absolute;
            background-color: ${props => props.theme.colors.themeColor};
            border-radius: 10px;
            content: "";
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            left: 0;
            width: 100%;
            height: 4px;
        }
        &:before{
            bottom: 8px;
        }
        &:after{
            bottom: -8px;
        }
        ${props => props.whiteColor && css `
            background-color: #fff;
            &:after,
            &:before{
                background-color: #fff;
            }
        `}
    }
    &:hover{
        div{
            background-color: ${props => props.theme.colors.themeColor};
            &:before{
                width: 80%;
                background-color: ${props => props.theme.colors.themeColor};
            }
            &:after{
                width: 60%;
                background-color: ${props => props.theme.colors.themeColor};
            }
        }
    }
`;