import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img {
        max-width: 100px;
        margin-bottom: 3rem;
    }
    
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

     @media(max-width: 600px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 3rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    width: 30%;
    font-size: .8rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }

     @media(max-width: 600px) {
        border-radius: .25rem;
        width: 85%;
    }

`;

export const Button = styled.button`
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    height: 3rem;
    padding: 0 .5rem;
    font-size: .8rem;
    cursor: pointer;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
        
    }

    @media(max-width: 600px) {
        border-radius: .25rem;
        margin-top: .5rem;
        width: 90%;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: .65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;
