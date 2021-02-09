import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
	// we init with resources
	resources: {
		en: {
			translations: {
                'Upcoming Campaigns': 'Upcoming Campaigns',
                'Live Campaigns': 'Live Campaigns',
                'Past Campaigns': 'Past Campaigns',
                'Manage Campaigns':'Manage Campaigns'
			},
		},
		de: {
			translations: {
                'Upcoming Campaigns': 'Kommende Kampagnen',
                'Live Campaigns': 'Leben Kampagnen',
                'Past Campaigns': 'Vergangenheit Kampagnen',
                'Manage Campaigns':'Kampagnen verwalten'
			},
		},

		hi: {
			translations: {
                'Upcoming Campaigns': 'आगामी अभियान',
                'Live Campaigns': 'लाइव अभियान',
                'Past Campaigns': 'विगत अभियान',
                'Manage Campaigns':'अभियान प्रबंधित करें'
			},
		},
	},
	fallbackLng: 'en',
	debug: true,

	// have a common namespace used around the full app
	ns: ['translations'],
	defaultNS: 'translations',

	keySeparator: false, // we use content as keys

	interpolation: {
		escapeValue: false, // not needed for react!!
		formatSeparator: ',',
	},

	react: {
		wait: true,
	},
});

export default i18n;
