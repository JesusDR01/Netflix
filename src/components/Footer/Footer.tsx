import React from "react";
import { StyledFooter } from "./Footer.styled";

export const Footer = () => {
    return (
        <StyledFooter>
            <ol>
                {[
                    "Términos de uso",
                    "Declaración de privacidad",
                    "Preferencias de cookies",
                    "Centro de ayuda",
                ].map((item, idx) => {
                    return (
                        <li key={idx}>
                            <a  href="#">
                                {item}
                            </a>
                        </li>
                    );
                })}
            </ol>
        </StyledFooter>
    );
};
