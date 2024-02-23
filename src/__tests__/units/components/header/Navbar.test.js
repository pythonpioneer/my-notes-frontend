// importing all requirements
const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider, useSelector } from 'react-redux';
import Navbar from '../../../../components/header/Navbar';
import store from '../../../../store';


// testing the navbar components
describe('Testing the Navbar component', () => {
    
    // testing that the navigation bar loading the correct text elements
    test("Testing that the component loading the text 'Notes'", () => {
        
        // rendering the navbar component after wrapping it in store provider
        render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );

        // searching the text in the screen
        const text = screen.getByText(/Notes/);
        expect(text).toBeInTheDocument();
    });

    // testing the functionality of themes
    test("Testing the theme of the app, after clicking on theme icon", () => {

        // fetch the status of theme
        const intialTheme = store.getState().user.themeStatus;  // must be an empty string and denoting light theme

        // rendering the navbar component after wrapping it in store provider
        const { container } = render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );

        // select the icon and click on the icon
        const sunIcon = container.querySelector('.fa-sun');
        fireEvent.click(sunIcon);

        // state after first click on the icon
        const themeAfterFirstclick = store.getState().user.themeStatus;  // must be dark

        // select the other icon after theme changing, the icon also changes with state changes
        const moonIcon = container.querySelector('.fa-cloud-moon');
        fireEvent.click(moonIcon);

        // state after second click on the icon
        const themeAfterSecondClick = store.getState().user.themeStatus;  // must be light and then further click make it light and dark

        // now, check that the theme is changing
        expect(intialTheme === '' && themeAfterFirstclick === 'dark' && themeAfterSecondClick === 'light').toBe(true);
    });
});