
import '../css/App.css';
import React, { useState } from 'react';
import {
	Div,
	Flex,
	Img,
	Th,
	Tr,
	Td,
	Table,
	SubTitle,
	LinkButton,
	Anchor
} from '../sub-components/styled-elements';
import file from '../assets/file.png';
import report from '../assets/report.png';
import moment from 'moment-timezone';
import { timeDiffString } from '../util_functions';
import ModalView from '../sub-components/modal';
import  Calendar  from '../sub-components/calendar';

function TableData(props) {
	const [popup, setPopup] = useState([]);
	const [type, setType] = useState('');
	const [isClose, setIsClose] = useState(true);
	

	let { sessions, t } = props;

	const handlePricing = (session) => {
		setPopup(session);
		setType('pricing');
		setIsClose(false);
	};
	const handleClose = () => {
		setIsClose(true);
	};
	
	return (
		<>
			{sessions && sessions.length > 0 ? (
				<Div>
					<Table>
						<Tr bg="#f1f1f4;">
							<Th ml="2%" width="40%">
								Date
							</Th>
							<Th width="40%">Campaign</Th>
							<Th width="50%">View</Th>
							<Th width="50%">Actions</Th>
						</Tr>
						{sessions.map((each,index) => (
							<Tr m="2%" key={index+each.createdOn}>
								<Td width="20%">
									{moment(each.createdOn).format('MMM YYYY,DD')}
									<SubTitle>{timeDiffString(each.createdOn)}</SubTitle>
								</Td>
								<Td width="50%">
									<Flex>
										<Img  m="0 15%"  size ="24px"src={each.image_url} alt="game" />
										<Div>
											<Div>{each.name}</Div>
											<SubTitle>{each.region}</SubTitle>
										</Div>
									</Flex>
								</Td>
								<Td width="30%">
									<Flex alignItems="center">
										<Div
											bg="#EBC668"
											borderRadius="50%"
											m="0 1%"
											color="#fff"
											height="20px"
											width="20px"
											textAlign="center"
										>
											$
										</Div>
										<LinkButton onClick={() => handlePricing(each)} opacity="0.5">
											View Pricing
										</LinkButton>
									</Flex>
								</Td>
								<Td width="60%">
									<Flex>
										<Flex ml="5%" alignItems="center"><Img src={file}/><Anchor href={each.csv} download>csv</Anchor></Flex>
										<Flex  ml="8%" alignItems="center"><Img src={report}/><Anchor href={each.report} download>report</Anchor></Flex>
										<Calendar date ={each.createdOn} session={each} index={index}/>
										
									</Flex>
								</Td>
							</Tr>
						))}
					</Table>
				</Div>
			) : (
				<Div m="10%">{t('No campaign available')}</Div>
			)}
			
			<ModalView type={type} data={popup} isClose={isClose} handleClose={handleClose} />
		</>
	);
}

export default TableData;
