import styled from "styled-components";

export const StyledTitle = styled.h2`
    color: #999;
    font-size: 1.2em;
    margin: 0 0 0.5em 0;
    display: flex;
    align-items: center;
    position: relative;
    .title-wrapper {
        display: flex;
        min-width: 0.6em;
        .explore-all-wrapper {
            display: none;
            vertical-align: bottom;
            font-size: 0.9vw;
            width: 139px;
            overflow: visible;
            color: #54b9c5;
            position: relative;
            top: 7px;
            left: 15px;
            .explore-all {
                cursor: pointer;
                display: inline-block;
                font-size: 0.9vw;
                line-height: 0.8vw;
                margin-right: 4px;
                max-width: 0;
                opacity: 0;
                transition: max-width 1s,opacity 1s,transform .75s;
                vertical-align: bottom;
                white-space: nowrap;
                transform: translateX(-100px);
            }
            svg {
                color: #54b9c5;
                cursor: pointer;
                display: inline-block;
                font-size: 0.9vw;
                line-height: 0.8vw;
                margin-right: 4px;
                max-width: 0;
                opacity: 1;
                white-space: nowrap;
                transform: translate(-16px,1px) scale(1.5);
            }
        }
        &:hover {
            .explore-all {
                display: block;
                opacity: 1;
                max-width: 100%;
                transform: translateX(0px);
            }
            .explore-all-wrapper {
                overflow: hidden;
            }
            svg {
                transform: initial;
            }
        }
    }

    @media screen and (min-width: 768px) {
        color: #e5e5e5;
        .title-wrapper {
            .explore-all-wrapper {
                display: flex;
            }
        }
        &:hover{
            svg{
                max-width: 100px !important;
            }
        }
    }
`;
