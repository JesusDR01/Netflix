import styled from "styled-components";

export const StyledBillboard = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
    }
    padding-bottom: 38%;
    color: white;
    .test {
        background-color: #000;
        height: 56.25vw;
        position: absolute;
        width: 100%;
        top: 0;
        .image-wrapper {
            > span {
                overflow: visible;
                position: unset !important;
                img {
                    background-position: 50%;
                    background-size: cover;
                    bottom: 0;
                    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
                    filter: alpha(opacity=100);
                    left: 0;
                    opacity: 1 !important;
                    position: absolute !important;
                    right: 0;
                    top: 0 !important;
                    transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
                    width: 100% !important;
                }
            }
        }
    }

    .info-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        left: 4%;
        position: absolute;
        top: 11vw;
        max-width: 384px;
        z-index: 1;

        .billboard-links {
            display: flex;
            align-items: center;
            margin-top: 17px;
            span {
                font-weight: bold;
            }
            img {
                margin-right: 2px !important;
            }
            .replay,
            .info {
                height: 36px;
            }
            .replay {
                background-color: white;
                color: black;
                width: 145px;
                align-items: center;
                border: 0;
                border-radius: 4px;
                cursor: pointer;
                margin-right: 1rem;
                display: flex;
                justify-content: center;
                opacity: 1;
                padding: 0.8rem;
                position: relative;
                img {
                    height: 24px;
                }
                &:hover {
                    background-color: rgba(255, 255, 255, 0.75);
                }
            }
            .info {
                width: 183px;
                color: white;
                background-color: rgba(109, 109, 110, 0.7);
                align-items: center;
                appearance: none;
                border: 0;
                border-radius: 4px;
                cursor: pointer;
                display: flex;
                justify-content: center;
                opacity: 1;
                padding: 0.8rem;
                position: relative;
                img {
                    filter: invert(1);
                }
                &:hover{
                    background-color: rgba(109, 109, 110, 0.4);
                }
            }
        }
    }
`;
