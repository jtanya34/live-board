import { border, space, layout, typography, color, position, flexbox, shadow } from 'styled-system';
import styled, { createGlobalStyle, css } from 'styled-components';

export const Heading = styled.h1`
	${typography}
	${color}
    ${space}
    font-weight:bold;
`;

export const Div = styled.div`
	${border}
	${space}
    ${layout}
    ${typography}
    ${color}
    ${position}
    ${shadow}
	${flexbox}
	@media (max-width: 938px) {
		left: ${(props) => (props.mbLeft ? props.mbLeft: '')}
	  }
	
`;

export const SubTitle = styled.div`
	${border}
	${space}
    ${layout}
    ${typography}
    ${color}
    ${position}
    ${shadow}
	${flexbox}
	padding-top:5px;
	font-size: 12px;
	opacity: 0.5;
`;

export const Flex = styled.div`
	display: flex;
	${border}
	${color}
    ${flexbox}
    ${layout}
    ${space}
	${position}
	@media (max-width: 938px) {
	  flex-direction: ${(props) => (props.fdir ? "row": 'column')};
	  align-items: center;
	}

	
`;

export const Modal = styled.div`
	position: fixed; 
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%; 
	height: 100%;
	overflow: auto; 
	background-color: rgb(0, 0, 0); 
	background-color: rgba(0, 0, 0, 0.4);
	display: ${(props) => (props.close ? 'none' : 'block')};
`;
export const Anchor = styled.a`
	${position}
color:#7788A3;
margin-left:5%;
text-decoration:none;
	cursor: pointer;
`;

export const Img = styled.img`
	${layout}
	${space}
  ${position}
`;

export const Line = styled.hr`
	width: 150px;
	height: 2px;
	background: #83a515;
	@media (max-width: 938px) {
		margin:1px
	  }
`;
/**
 * BUTTON & LINKS
 */

export const Button = styled.button`
	${border}
	${space}
  ${layout}
  ${typography}
  ${color}
  ${position}
  ${shadow}
  ${flexbox}
  cursor:pointer;
	outline: none;
`;

// Styled component named StyledButton
export const CloseButton = styled.button`
${position}
     position:absolute;
	border: 1px solid #181b34;
	box-sizing: border-box;
	cursor: pointer;
	outline: none;
	background-color:transparent;
`;

export const LinkButton = styled.button`
	${layout}
	${space}
	color:#7788A3;
	cursor: pointer;
	outline: none;
	background: transparent;
	border: none;
`;

export const CampaignButton = styled.button`
	${layout}
	${space}
	position: relative;
	height: 28px;
	font-family: Roboto, Sans-serif;
	font-style: normal;
	font-weight: 500;
	line-height: 28px;
	background: transparent;
	border: none;
	font-size: 16px;
	margin-left: 5%;
	cursor: pointer;
	outline: none;
	color: ${(props) => (props.selected ? '#83A515' : '#7788a3')};
`;

/** Table Style Elements */
export const Table = styled.table`
	${border}
	${space}
${layout}
${typography}
${color}
${position}
${shadow}
${flexbox}
position: relative;
	background: #ffffff;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	width: 80%;
	min-height: 500px;
	margin: 0 10% 10% 10%;
`;
export const Th = styled.th`
	${border}
	${space}
${layout}
${typography}
${color}
${position}
${shadow}
${flexbox}
position: relative;
	font-weight: 500;
	height: 30px;
	background: #f1f1f4;
	text-align: left;
	padding: 10px;
`;

export const Tr = styled.tr`
	${border}
	${space}
${layout}
${typography}
${color}
${position}
${shadow}
${flexbox}
position: relative;
	display: flex;
`;

export const Td = styled.td`
	${border}
	${space}
${layout}
${typography}
${color}
${position}
${shadow}
${flexbox}
position: relative;
	font-size: 14px;
	font-weight: normal;
	color: #2b416c;
`;
