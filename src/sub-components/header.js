import { Div, Img } from './styled-elements';
import React from 'react';
import logo from '../assets/image 1.png';
function Header() {
	return (
		<>
			<Div bg="#1F2640" position="relative" width="100%" height="10%" left="0px" top="0px">
				<Img
					src={logo}
					width="100px"
					margin="auto"
					padding="10px"
					position="absolute"
					max-width="100%"
					height="auto"
					left="10%"
					top="10%"
				></Img>
			</Div>
		</>
	);
}

export default Header;
