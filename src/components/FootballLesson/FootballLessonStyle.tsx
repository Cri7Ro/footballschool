import styled from 'styled-components';

export const StyledSection = styled.section`
    color: white;
    background-color: #6D3EA2;
    h2 {
        text-align: center;
        margin-bottom: 7.5rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7.5rem 0 10rem 0;
    img {
        margin-right: 2vw;
        width: 50vw;
    }
    overflow: hidden;

    @media screen and (max-width: 650px) {
        padding: 3rem 0 7rem 0;
        h2 {
            margin-bottom: 5rem;
        }
    }
`; 

export const Wrapper = styled.div`
    padding: 0 5vw 0 5vw; 
    display: flex;    
    div {
        display: flex;
        flex-direction: column;
        p {
            margin-bottom: 1.25rem;
        }
    };

    @media screen and (max-width: 991px) {
        flex-direction: column;
        img {
            margin-right: 0;
            width: 90vw;
        }
    }
`;

export const Li = styled.li<{attr: string}>`
    margin-bottom: 1.25rem;
    list-style-position: inside;
    list-style-image: url(${props => props.attr === 'phone' ? './img/lesson/phone.png' : './img/lesson/letter.png'});
    i {
        position: relative;
        top: -18px;
    }
`; 