// Type
//
import React from 'react';
import PropTypes from 'prop-types';
import kind from '@enact/core/kind';
import {parseLink} from '../DocParse.js';

import css from './Type.less';

const identifyType = (str) => {
	if (str.indexOf('/') >= 0) {
		return 'module';
	}
	return str ? str.toLowerCase().replace(/^.*\.(.+)$/, '$1') : '';
};

const readable = (typeContent) => {
	if (typeContent.indexOf('/') >= 0) {
		let shortText = typeContent.replace(/^.*\.(.+)$/, '$1');
		typeContent = parseLink({children: [{text: shortText, value: typeContent}]});	// mapping to: child.children[0].value
	}
	return typeContent;
};

const Type = kind({
	name: 'Type',

	propTypes: {
		children: PropTypes.string.isRequired
	},

	styles: {
		css,
		className: 'type'
	},

	computed: {
		className: ({children, styler}) => styler.append(identifyType(children)),
		children: ({children}) => readable(children)
	},

	render: (props) => (
		<var {...props} />
	)
});

export default Type;
export {Type, identifyType, readable}