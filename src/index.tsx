/**
 * External dependencies
 */
import { render } from '@wordpress/element';
import './data/store';

/**
 * Internal dependencies
 */
import App from './App';

// Import the stylesheet for the plugin.
import './style/tailwind.scss';
import './style/main.scss';

// Render the App component into the DOM
const jobPlaceElement = document.getElementById('jobplace');

if (jobPlaceElement) {
    render(<App />, jobPlaceElement);
}
