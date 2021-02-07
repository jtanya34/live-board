
import { Div, Flex, CampaignButton, Heading, Line } from '../sub-components/styled-elements';
import TableData from './table';
import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors';
import * as actions from '../redux/actions';
import { timeDiff } from '../util_functions';
import Header from '../sub-components/header';

class MainApp extends React.Component {
	state = {
		campaign: 'upcoming',
		sessions: { upcoming: [] },
	};

	componentDidMount() {
		if (this.props.sessions_list_status === 'none') {
			this.props.getSessions();
		} else if (this.props.sessions_list_status === 'success') {

			this.handleSessionRearrange(this.props.sessions_list_response);
		}
	}

	componentDidUpdate(prevProps, props) {
		if (prevProps.sessions_list_status === 'loading' && this.props.sessions_list_status === 'success') {
			this.handleSessionRearrange(this.props.sessions_list_response);
		}
	}

	handleSessionRearrange = (sessions) => {
		let sessionsObj =  { upcoming: [] } ;
		sessions.map((session, i) => {
			if (sessionsObj[timeDiff(session.createdOn)]) {
				sessionsObj[timeDiff(session.createdOn)].push(session);
			} else {
				sessionsObj[timeDiff(session.createdOn)] = [];
				sessionsObj[timeDiff(session.createdOn)].push(session);
			}
		});
		console.log(sessionsObj);
		this.setState({ sessions: sessionsObj });
	};

	onHandleClick = (e) => {
		let type = e.target.value;
		this.setState({ campaign: type });
		if( this.props.sessions_list_status === "updatedData"){
			
			this.props.set_sessions_variable('sessions_list_status',"success")
			this.handleSessionRearrange(this.props.sessions_list_response);
		}
	};

	render() {
		return (
			<Div position="absolute" width="100%" height="100%" top="0" left="0">
				<Header />
				<Heading color="#2B416C" ml="10%">
					Manage Campaigns
				</Heading>
				<Flex m="0 5% 5% 5%">
					<CampaignButton
						selected={this.state.campaign === 'upcoming'}
						ml="5%"
						value="upcoming"
						onClick={(e) => this.onHandleClick(e)}
					>
						Upcoming Campaigns
						{this.state.campaign === 'upcoming' && <Line />}
					</CampaignButton>

					<CampaignButton selected={this.state.campaign === 'live'} value="live" onClick={(e) => this.onHandleClick(e)}>
						Live Campaigns
						{this.state.campaign === 'live' && <Line />}
					</CampaignButton>
					<CampaignButton selected={this.state.campaign === 'past'} value="past" onClick={(e) => this.onHandleClick(e)}>
						Past Campaigns
						{this.state.campaign === 'past' && <Line />}
					</CampaignButton>
				</Flex>
				<TableData sessions={this.state.sessions[this.state.campaign]} />
			</Div>
		);
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
		getSessions: (payload) => {
			dispatch(actions.getSessions(payload));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
