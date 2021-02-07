import { render } from '@testing-library/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GiCalendar } from 'react-icons/gi';
import { LinkButton, Flex } from './styled-elements';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors';
import * as actions from '../redux/actions';
import moment from 'moment-timezone';

export class Calendar extends React.Component {
	state = {
		startDate: this.props.date,
	};
	handleDate = (date) => {
        
        let { session, sessions_list_response, index } = this.props;
        
		let newSession = session;
		let ts = moment(date).unix();
        newSession.createdOn = moment(date).valueOf();
        console.log(newSession);
		let updatedSessions = sessions_list_response.filter((each, i) => i != index);
        updatedSessions.push(newSession);
        console.log(updatedSessions);
        this.props.set_sessions_variable('sessions_list_response', updatedSessions);
        this.props.set_sessions_variable('sessions_list_status', "updatedData");
	};
	renderDatePicker = () => {
		const { startDate } = this.state;

		const CustomInput = ({ onClick }) => (
			<Flex alignItems="center" ml="10%" onClick={onClick}>
				<GiCalendar size="30" />
				<LinkButton>Schedule Again</LinkButton>
			</Flex>
		);
		return <DatePicker selected={startDate} onChange={(date) => this.handleDate(date)} customInput={<CustomInput />} />;
	};
	render() {
		return this.renderDatePicker();
	}
}
const mapStateToProps = (state) => {
	return {
		set_sessions_variable: selectors.set_session_variable(state),
		sessions_list_status: state.sessions.sessions_list_status,
		sessions_list_response: state.sessions.sessions_list_response,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		set_sessions_variable: (key, payload) => {
			dispatch(actions.set_sessions_variable(key, payload));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
