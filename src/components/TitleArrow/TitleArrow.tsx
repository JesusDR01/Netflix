import React from "react";
import fontawesome from "@fortawesome/fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
fontawesome.library.add(faChevronRight);
export const TitleArrow = () => {
    return <FontAwesomeIcon icon="chevron-right" className="arrow"></FontAwesomeIcon>;
};
