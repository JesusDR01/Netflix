import Image from "next/image";
import React, { useState } from "react";
import { StyledInfoModal } from "./InfoModal.styled";

export const InfoModal = () => {
    const [showInfoModal, setShowInfoModal] = useState(true);
    return showInfoModal ? (
        <StyledInfoModal>
            <div className="info">
                <h2>⚠️ ATENCIÓN ⚠️</h2>
                <p>
                    Este sitio web es una demo del diseño de Netflix con fines ilustrativos creado
                    para mostrar mis capacidades como desarrollador front end a otras empresas.
                </p>
                <div className="buttons">
                    <a href="https://www.linkedin.com/in/jesusdr/" target="_blank" rel="noopener noreferrer">
                        <Image
                            alt="My LinkedIn"
                            src="/assets/infomodal/linkedin-logo.svg"
                            width={100}
                            height={80}
                        />
                    </a>
                    <button onClick={() => setShowInfoModal(false)}>Continuar</button>
                </div>
            </div>
        </StyledInfoModal>
    ) : (
        <></>
    );
};
