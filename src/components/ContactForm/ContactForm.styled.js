import styled from '@emotion/styled';

export const Title = styled.h1`
    margin: 20px;
`;

export const Form = styled.form`
    float:left;
    margin-right: 20px;
    margin-left: 20px;
`;

export const Button = styled.button`
    margin-top: 8px;
    padding: 8px 24px;
    border: 0;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover,
    &:focus {
        background-color: #1976d2;
        color: #fff;
    }
`;

export const Label = styled.label`
    display: block;
`;

export const InputName = styled.p`
    margin-top: 8px;
    margin-bottom: 4px;
`;