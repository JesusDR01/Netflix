import Image from "next/image";
import React from "react";
import { StyledBillboard } from "./Billboard.styled";
import  netflixData  from "src/models/netflixData.json";

export const Billboard = () => {
    
    return (
        <StyledBillboard>
            <div className="info">
                <div className="info-text">
                    <Image
                        src={`/api/imageProxy?imageUrl=${netflixData.header.title}`}
                        width="388px"
                        height="155px"
                    />
                    <h2>{netflixData.header.subtitle}</h2>
                    <div>{netflixData.header.description}</div>
                    <div className="billboard-links">
                        <button className="replay">
                            <Image src="/assets/replay.svg" width="30px" height="20px"  />
                            <span>Reproducir</span>
                        </button>
                        <button className="info">
                            <Image src="/assets/info.svg" width="24px" height="24px"  />
                            <span>Más información</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="test">
                <div className="image-wrapper">
                    <Image
                        src={`/api/imageProxy?imageUrl=${netflixData.header.background}`}
                        width="1280px"
                        height="720px"
                    />
                </div>
            </div>
        </StyledBillboard>
    );
};
