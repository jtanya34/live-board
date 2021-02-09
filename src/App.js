import React, { Component, Suspense } from 'react';
import MainApp from './components/index';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { withTranslation, Trans } from "react-i18next";
const store = configureStore();

 class App extends Component {

	render() {
		const {i18n, t} =this.props
		return (
			<Provider store={store}>
				<MainApp i18n={i18n} t={t}/>
			</Provider>
		);
	}
}
export default withTranslation("translations")(App);
