import styled from "styled-components";

type StyledSlidePreviewProps = {
    mainImage: string;
    isTop: boolean;
};
export const StyledSlidePreview = styled.div<StyledSlidePreviewProps>`
    color: white;
    position: absolute;
    transform: scale(0.616);
    width: 352px;
    left: -67px;
    top: -210px;
    z-index: 3;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    transition: transform 0.7s, opacity 0s;
    opacity: 0;
    pointer-events: none;

    .preview {
        background-color: #000;
        cursor: pointer;
        position: relative;
    }
    .videoMerchPlayer-boxart-wrapper {
        height: 100%;
        width: 100%;
        caret-color: transparent;

        .previewModal-boxart {
            background-repeat: no-repeat;
            background-size: ${({ isTop }) => (isTop ? "contain" : "cover")};
            background-position: center;
            height: 192px;
            left: 0;
            top: 0;
        }

        .previewModal-info {
            opacity: 1;
            transform: none;
            background-color: #181818;
            position: relative;
            padding: 18px 16px;

            .buttonControls-container {
                align-items: center;
                display: flex;
                margin-bottom: 1em;
                min-height: 2em;
                .play,
                .save,
                .like,
                .dropdown {
                    cursor: pointer;
                    max-height: 42px;
                    max-width: 42px;
                    min-height: 32px;
                    min-width: 32px;
                    background-color: #fff;
                    border-width: 2px;
                    border-radius: 22px;
                    padding: 8px;
                }
                .save,
                .like,
                .dropdown {
                    background-color: rgba(42, 42, 42, 0.6);
                    border: 2px solid rgba(255, 255, 255, 0.7);
                    color: white;
                    margin: 0.25em;
                }
                .buttonControls-expand-button {
                    margin-left: auto;
                }
                .save,
                .dropdown {
                    &:hover {
                        background-color: #2a2a2a;
                        border-color: #fff;
                    }
                }
                .play {
                    &:hover {
                        background-color: #e6e6e6 ;
                    }
                }
                .like {
                    &:hover {
                        display: block;
                        visibility: visible;
                        .thumbs {
                            opacity: 1;
                            transform: translate(-46px, -36px) scaleX(1);
                        }
                    }
                    .thumbs {
                        cursor: pointer;
                        padding: 12px 0px;
                        width: 85px;
                        height: 31px;
                        background-color: rgb(35, 35, 35);
                        border-radius: 3rem;
                        box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 2px 0px,
                            rgba(0, 0, 0, 0.5) 0px 8px 16px 0px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        opacity: 0;
                        width: 110.1px;
                        height: 42.53px;
                        transition: opacity 0.1s linear 0s,
                            transform 0.3s cubic-bezier(0.5, 0, 0.1, 1) 0s, all 0.2s linear 0s;
                        transform: translate(-46px, -36px) scaleX(0);
                        div {
                            margin-top: 3px;
                            overflow: hidden;
                            span {
                                border-radius: 20px !important;
                                img {
                                    transform: scale(1.5);

                                    &:hover {
                                        background-color: rgba(128, 128, 128, 0.2);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .videoMetadata-container {
                display: flex;
                align-items: center;

                .first-line {
                    margin: 0.25em 0.5em 0.25em 0;
                    max-width: 100%;
                    color: #46d369;
                    white-space: unset;
                    font-weight: bolder;
                }

                .videoMetadata-second-line {
                    align-items: center;
                    display: flex;
                    flex-wrap: wrap;
                    img {
                        transform: scale(1.4);
                        padding: 10px !important;
                    }
                    .videoMetadata-container {
                        align-items: center;
                        color: #fff;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                    }
                }
            }
            .previewModal-metadatAndControls-tags-container {
                display: flex;
                .evidence-list {
                    box-sizing: border-box;
                    display: flex;
                    flex-wrap: wrap;
                    justify-items: flex-start;
                    margin: 0;
                    padding: 0;

                    .evidence-item {
                        display: flex;
                        padding-right: 0.5vw;
                        .evidence-text {
                            font-size: 1.28vw;
                        }
                        .evidence-separator {
                            width: 7px ;
                            height: 6px ;
                            display: inline-block ;
                            background: #646464 ;
                            border-radius: 23px ;
                            vertical-align: middle ;
                            margin: 6px ;
                        }
                    }
                }
            }
        }
    }
`;
