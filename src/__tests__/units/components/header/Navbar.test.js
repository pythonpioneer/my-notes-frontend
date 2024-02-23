// importing all requirements
const { render, screen } = require("@testing-library/react");
import { Provider } from 'react-redux';
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

        const text = screen.getByText(/Notes/);
        expect(text).toBeInTheDocument();
    })
});