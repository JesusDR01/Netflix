import Image from "next/image";
import React from "react";
import { StyledSlidePreview } from "./SlidePreview.styled";
export const SlidePreview = ({
    media,
    isTop,
}: {
    media: { img: string; tags: String[] };
    isTop: boolean;
}) => {
    return (
        <StyledSlidePreview className="mini-modal" mainImage={media.img} isTop={isTop}>
            <div className="preview">
                <div className="videoMerchPlayer-boxart-wrapper">
                    <div className="previewModal-boxart">
                        <img src={media.img} />
                    </div>

                    <div className="previewModal-info">
                        <div className="buttonControls-container">
                            <button className="play">
                                <Image src="/assets/minimodal/play.svg" width={24} height={24} />
                            </button>
                            <button className="save">
                                <Image src="/assets/minimodal/save.svg" width={24} height={24} />
                            </button>
                            <button className="like">
                                <Image src="/assets/minimodal/like.svg" width={24} height={24} />
                                <div className="thumbs">
                                    <div>
                                        <Image
                                            src="/assets/minimodal/dislike.svg"
                                            width={41.85}
                                            height={41.85}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/assets/minimodal/small-like.svg"
                                            width={41.85}
                                            height={41.85}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/assets/minimodal/love.svg"
                                            width={41.85}
                                            height={41.85}
                                        />
                                    </div>
                                </div>
                            </button>
                            <div className="buttonControls-expand-button"></div>
                            <button className="dropdown">
                                <Image
                                    src="/assets/minimodal/dropdownArrow.svg"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>

                        <div className="videoMetadata-container">
                            <div className="first-line">98 % para ti</div>
                            <div className="videoMetadata-second-line">
                                <Image
                                    src={"/assets/minimodal/maturity.svg"}
                                    width={24}
                                    height={24}
                                />
                                <span>8 episodios</span>
                            </div>
                        </div>
                        <div className="previewModal-metadatAndControls-tags-container">
                            <div className="evidence-list">
                                {media.tags.map((tag, index) => (
                                    <div key={index} className="evidence-item">
                                        {index !== 0 && <div className="evidence-separator"></div>}
                                        <div className="evidence-text">{tag}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledSlidePreview>
    );
};
