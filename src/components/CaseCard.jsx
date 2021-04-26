import React from 'react';
import {CaseCardBody, HeaderText, NumberText} from "../appStyles";

function CaseCard(props) {
    return (
        <CaseCardBody>
            <HeaderText>{props.headerText}</HeaderText>
            <NumberText>{props.numberText}</NumberText>
        </CaseCardBody>
    );
}

export default CaseCard;
