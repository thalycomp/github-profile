import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 80px;
    background: #2166d6; 
    border-bottom: 1px solid #e1e4e8;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        margin-left: 10px;
        color: #f6f8fa;
    }

    h1 {
        color: #f6f8fa;
        font-size: 20px;
    }
`;

export const Div = styled.div`
    max-width: 650px;
    border-radius: 4px;
    background: #fff;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #e1e4e8;

    p {
        margin-top: 10px;
        color: red;
        font-size: 12px;
    }
`;


export const Form = styled.form.attrs(props => ({
    notFound: props.notFound,
  }))`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    input {
        flex: 1;
        border: 2px solid ${props => (props.notFound ? 'red': '#2166d6' )};
        padding: 10px 10px;
        font-size: 18px;
        border-radius: 4px;
        margin-right: 10px;
    }
`;

export const Button = styled.button.attrs(props => ({
  disabled: props.disabled,
}))`
    padding: 14px;
    border-radius: 2px;
    border: none;
    background: #2166d6;
    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
    }
    
    svg {
        color: #f6f8fa;
    }
`;

export const ConteinerUser = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 650px;
    border-radius: 4px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border: 1px solid #e1e4e8;

    img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        padding: 2px;
        border: 2px solid #2166d6;
    }

    div {
        display: flex;
        flex-direction: column;
        margin: auto 20px;
        
        a {
            text-decoration: none;
            color: #2166d6;
            font-size: 18px;
            margin-bottom: 8px;
            font-weight: bold;
        }

        span {
            font-size: 12px;
            color: #667583;
            margin-top: 2px;

            strong {
            font-size: 12px;
            color: #2166d6;
            }
        }
    }

`;

export const Followers = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: flex-end;
    align-items: flex-start;
    width: 200px;
    flex-wrap: wrap;
    margin-top: 10px;
    
    
    li {
        display: flex;
        flex: wrap;
        flex-shrink: 0;
        margin: 1px 1px;

        a {
            
            img {
                width: 35px;
                height: 35px;
                padding: 2px;
                border: 2px solid #2166d6;
                margin: 0px; 
            }
    }

    
}
`;

export const ButtonFollow = styled.button.attrs(props => ({
    disabled: props.disabled,
  }))`

    display: flex;
    align-content: flex-end;
    align-items: center;
    margin: 1px;
    justify-content: center;
    width: 34px;
    height: 34px;
    border: none;
    margin: 1px 1px;
    border-radius: 50%;
    background: #2166d6;

    &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
    }

    svg {
        display: flex;            
        color: #f6f8fa;
    }
    


`;

export const ConteinerRepo = styled.div`
    margin: 0 auto;
    max-width: 650px;
    background: #fff;
    padding: 20px;
    border: 1px solid #e1e4e8;
    border-left: 2px solid #2166d6;
    margin-top: 10px;

    li {
        list-style: none;
        display: flex;
        justify-content: space-between;
         
    }

    &:last-child {
        margin-bottom: 15px;
    }
`;

export const InfoRepo = styled.div`
    a {
        text-decoration: none;
        color: #2166d6;
        font-size: 16px;
        font-weight: bold;
    }

    p {
        color: #667583;
        margin-top: 15px;
        font-size: 14px;
        padding-right: 15px;
    }
`;

export const InfoForkStar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    

    span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #2166d6;
        font-size: 12px;
        > svg {
            margin-left: 5px;
        }
    }
`;

