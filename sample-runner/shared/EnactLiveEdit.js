import * as React from 'react';
import PropTypes from 'prop-types';
import Spotlight from '@enact/spotlight';

import {
	LiveProvider,
	LiveEditor,
	LiveError,
	LivePreview
} from 'react-live';

import css from './EnactLiveEdit.less';

class App extends React.Component {

	static displayName = 'App';

	static propTypes = {
		code: PropTypes.string,
		components: PropTypes.object,
		extraScope: PropTypes.object
	};

	constructor () {
		super();
		this.state = {
			ready: false
		};
	}

	componentDidMount = () => {
		// eslint-disable-next-line react/no-did-mount-set-state
		this.setState({ready: true});
	};

	render = () => {
		if (this.state.ready) {
			const {code, components, extraScope = {}} = this.props;

			return (
				<LiveProvider code={code} scope={{React, ...components, ...extraScope}}>
					<LiveEditor onFocus={Spotlight.pause} onBlur={Spotlight.resume} tabIndex={-1} />
					<LiveError className={css.error} />
					<div className={css.sandbox}>
						<LivePreview />
					</div>
				</LiveProvider>
			);
		} else {
			return null;
		}
	};
}

export default App;
