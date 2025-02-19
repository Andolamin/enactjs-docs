import {render} from 'react-dom';
import App from './App';

// TODO: Set up skin appropriately for different themes!
// const appElement = (<App skin="light" />);
const appElement = (<App />);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	render(appElement, document.getElementById('root'));
}

export default appElement;
