import styled from 'styled-components';

export const StyledMapBox = styled.div`
    width: 50vw;
    height: 50vh;
    margin: 5vh auto;
    border-radius: 20px;

    @media screen and (max-width: 767px) {
        width: 90vw;
    }    
`;

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #2E0062;
    color: white;
    padding-bottom: 3.5rem;
    p {
        text-align: center;
    }
`; 

export const StyledSection = styled.section` 
    a {
        color: inherit;
    }
    div {
        margin-right: 3vw;
    }
    display: flex;
    align-items: center;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        div:last-child {
            order: -1;
        }
        div {
            margin-right: 0;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
        }
    }
`;

export const Li = styled.li<{attr: string}>`
    margin-bottom: 1.25rem;
    list-style-position: inside;
    list-style-image: url(${props => {
        switch (props.attr) {
            case 'phone': {
                return './img/footer/phone.png';
            }
            case 'e-mail': {
                return './img/footer/letter.png';
            }
            case 'question': {
                return './img/footer/question.png';
            }
            case 'time': {
                return './img/footer/time.png';
                
            }
        }
    }});
    i {
        position: relative;
        top: -18px;
    }
`;

export const StyledButton = styled.button`
    color: #2E0062;
    background-color: #FFE197;
    box-shadow: 0px 4px 0px #AB8A38;
    border: 0;
    border-radius: 50px;
    font-size: 1.5rem;
    line-height: 2.25rem;
    &: focus {
        outline: none;
    }
    display: flex;
    align-items: center;
    padding: .75rem 4vw;
    margin: 4rem 0 1.7rem;
    cursor: pointer; 
    img {
        margin-right: 8px;
    }

    @media screen and (max-width: 767px) {
        margin: 2.5rem 0 2rem;
    }    
`;