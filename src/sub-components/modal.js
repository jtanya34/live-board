import { Div, Flex, Img, Modal, Heading,CloseButton } from './styled-elements';

import React, { useState, useEffect } from 'react';

function ModalView(props) {
   const {type,data,isClose,handleClose} = props
  
	if (type === 'pricing') {
		var { image_url, name, price, region } = data;
	}
	
  
	return (
		<>
			<Modal background="#fff" close={isClose} onClick={handleClose}>
				<Div width="300px" height="383px" margin="auto" top="30%" left="30%" mbLeft = "12%"position="absolute" bg="#fff">
					<Div cursor="pointer" onClick={handleClose} textAlign="right" fontSize="24px" margin="2%">
						&times;
					</Div>
					{type === 'pricing' && (
						<Div m = "4%">
							<Flex fdir="row" >
								<Img src={image_url} alt="game" />
                                <Div>
								<Div fontSize="16px" fontWeight ="500">{name.toUpperCase()}</Div>
								<Div fontSize="14px" opacity= "0.5">{region}</Div>
                                </Div>
							</Flex>
							<Heading fontSize="16px" fontWeight ="500">Pricing</Heading>
							{price.map((each) => (
								<Flex justifyContent="space-between">
									<Div fontSize="14px" opacity= "0.5">{each.title}</Div>
									<Div fontSize="14px" fontWeight ="500" >${each.rate}</Div>
								</Flex>
							))}
                            <CloseButton  left="40%" bottom="10%"onClick={handleClose} >Close</CloseButton>
						</Div>
					)}
				</Div>
			</Modal>
		</>
	);
}

export default ModalView;
