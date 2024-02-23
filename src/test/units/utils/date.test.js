import { getCurrentDate } from "../../../utility";

// testing the utility function of changing datetime into different and readable format
describe('Testing the utility "getCurrentDate" method to refactor the date format', () => {

    // testing with a fixed datetime timestamp  // 1708703655911 => Fri, 23 Feb 09:24 PM
    test('Testing getCurrentDate with fixed datetime', () => {
       expect(getCurrentDate(1708703655911)).toBe('Fri, 23 Feb 09:24 PM');
    });
});