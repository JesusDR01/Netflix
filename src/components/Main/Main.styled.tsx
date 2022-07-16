import styled from "styled-components";

export const StyledMain = styled.main`
    padding-left: 60px;
    padding-bottom: 130px;
    display: block;
    margin-top: 60px;
    padding-left: 20px;
    margin-bottom: 2em;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        padding-top: 8vw;
        margin-top: 11vw;
        padding-left: 60px;
        &:hover {
            h2 {
                color: #fff;
                svg {
                    opacity: 1;
                    max-width: 100%;
                }
            }
        }
    }
    @media screen and (min-width: 1200px) {
        padding-top: 3vw;
        margin-top: 0;
        padding-left: 60px;
    }
`;

type StyledSlideProps = {
    isTop: Boolean;
};

export const StyledSlide = styled.div<StyledSlideProps>`
    display: ${({ isTop }) => (isTop ? "none" : "block")};
    padding-bottom: 25px;
    
    @media screen and (min-width: 768px) {
        padding-bottom: 60px;
        display: block;
    }
`;
