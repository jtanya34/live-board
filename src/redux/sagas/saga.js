import { put, call } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

const get_api = (url, token = false) => {
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token',
	};

	return axios({
		method: 'get',
		url: url,
		headers: headers,
	})
		.then((response) => {
			return Promise.resolve(response);
		})
		.catch((error) => {
			return Promise.reject(error);
		});
};

export function* getSessions() {
	try {
		yield put(actions.set_sessions_variable('sessions_list_status', 'loading'));
		const result = yield call(get_api,'https://gist.github.com/65a8b5daa13024b57b2c05aed6a7d694.git');
		// const result = {
		// 	data: [
		// 		{
		// 			name: 'Test Whatsapp',
		// 			region: 'US',
		// 			createdOn: 1559807714999,
		// 			price: [
		// 				{ title: '1 Week - 1 Month', rate: '100' },
		// 				{ title: '6 Months', rate: '100' },
		// 				{ title: '1 Year', rate: '100' },
		// 			],
		// 			csv: 'Some CSV link for Whatsapp',
		// 			report: 'Some report link for Whatsapp',
		// 			image_url: '/assets/apps/small/Feature 2 Copy 2/img/80.png',
		// 		},
		// 		{
		// 			name: 'Super Jewels Quest',
		// 			region: 'CA, FR',
		// 			createdOn: 1559806715124,
		// 			price: [
		// 				{ title: '1 Week - 1 Month', rate: '100' },
		// 				{ title: '6 Months', rate: '100' },
		// 				{ title: '1 Year', rate: '100' },
		// 			],
		// 			csv: 'Some CSV link for Super Jewels Quest',
		// 			report: 'Some report link for Super Jewels Ques',
		// 			image_url: '/assets/apps/small copy/Feature 2 Copy 2/img/80.png',
		// 		},
		// 		{
		// 			name: 'Mole Slayer',
		// 			region: 'FR',
		// 			createdOn: 1559806711124,
		// 			price: [
		// 				{ title: '1 Week - 1 Month', rate: '100' },
		// 				{ title: '6 Months', rate: '100' },
		// 				{ title: '1 Year', rate: '100' },
		// 			],
		// 			csv: 'Some CSV link for Mole Slayer',
		// 			report: 'Some report link for Mole Slayer',
		// 		image_url: '/assets/apps/small copy 2/Feature 2 Copy 2/img/80.png',
		// 		},
		// 		{
		// 			name: 'Mancala Mix',
		// 			region: 'JP',
		// 			createdOn: 1559806680124,
		// 			price: [
		// 				{ title: '1 Week - 1 Month', rate: '100' },
		// 				{ title: '6 Months', rate: '100' },
		// 				{ title: '1 Year', rate: '100' },
		// 			],
		// 			csv: 'Some CSV link for Mancala Mix',
		// 			report: 'Some report link for Mancala Mix',
		// 		image_url: '/assets/apps/small copy 3/Feature 2 Copy 2/img/80.png',
		// 		},
		// 	],
		// };
		yield put(actions.set_sessions_variable('sessions_list_status', 'success'));
		yield put(actions.set_sessions_variable('sessions_list_response', result.data));
	} catch (error) {
		yield put(actions.set_sessions_variable('sessions_list_status', error));
		console.error('sessions error');
	}
}
