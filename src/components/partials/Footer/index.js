import { isExtraneousPopstateEvent } from "history/DOMUtils";
import React from"react";
import {FooterArea} from './styled'

const Footer = () => {
    return ( 
        <FooterArea>
            Todos os direitos reservados
            <br/>
           felipesites.com
        </FooterArea>
    );
}

export default Footer; 