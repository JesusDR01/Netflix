import styled from "styled-components";

export const StyledInfoModal = styled.div`
    z-index: 3;
    position: fixed;
    width: 76vw;
    background-color: #141414;
    left: 50%;
    color: white;
    border: 3px inset white;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 39%;
    max-width: 563px;

    .info {
        display: flex;
        flex-direction: column;
        margin: auto;
        height: 100%;
        align-items: center;
        justify-content: center;
        width: 93%;
        max-width: 218px;
        text-align: justify;
        h2 {
            margin-top: 0;
            margin-bottom: 0px;
        }

        .buttons {
            display: flex;
            justify-content: space-between;
            width: 100%;
            a {
                background-color: white;
                padding: 7px;
                height: 36px;
                box-sizing: border-box;

                & span {
                    height: 25px !important;
                }
                &:hover{
                    box-shadow: 0px 0px 0 4px #0273b0;
                }
            }
             button {
                border: 3px inset white;
                background: black;
                color: white;
                cursor: pointer;
                &:hover {
                    border: 3px solid white;
                }
            }
        }
    }
`;
