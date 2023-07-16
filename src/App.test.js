// import { render, screen, fireEvent } from '@testing-library/react';
// import App from './App';
// import { replaceCamelWithSpaces } from './App';

// test('button has correct initial color, and updates when click', () => {
//     render(<App />);
//     // find an element with a role of button and text 'Change to Midnight Blue'
//     const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
//     // expect the background color to be Medium Violet Red
//     expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
//     // click button
//     fireEvent.click(colorButton);
//     // expect the background color to be Midnight Blue
//     expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
//     // expect the button text to be 'Change to MediumVioletRed'
//     expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
// });

// test('initial conditions', () => {
//     render(<App />);
//     // check that the button starts out enabled
//     const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
//     expect(colorButton).toBeDisabled();
//     // check that the checkbox starts out unchecked
//     const checkbox = screen.getByRole('checkbox');
//     expect(checkbox).not.toBeChecked();
// });

// test('Checkbox disables button on first click and enables on second click', () => {
//     render(<App />)
//     const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
//     const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
//     // disable button
//     fireEvent.click(checkbox);
//     expect(colorButton).toBeDisabled();
//     // enable button
//     fireEvent.click(checkbox);
//     expect(colorButton).toBeEnabled();
// })

// test('Clicked disabled button has gray background and reverts to Medium Violet Red', () => {
//     render(<App />)
//     const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
//     const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
//     // disable button
//     fireEvent.click(checkbox);
//     expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
//     // enable button
//     fireEvent.click(checkbox);
//     expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
// });

// test('Clicked disabled button has gray background and reverts to Midnight Blue', () => {
//     render(<App />)
//     const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
//     const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
//     // change button to Midnight Blue
//     fireEvent.click(colorButton);
//     // disable button
//     fireEvent.click(checkbox);
//     expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
//     // enable button
//     fireEvent.click(checkbox);
//     expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
// })

// //Combine the test in a described statement
// describe('spaces before camel-case capital letters', () => {
//     test('Works for no inner capital letters', () => {
//         expect(replaceCamelWithSpaces('Red')).toBe('Red');
//     });

//     test('Works for one inner capital letter', () => {
//         expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
//     });

//     test('Works for multiple inner capital letters', () => {
//         expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
//     });
// })

// /**
//  * Unit Tests:
//  *    Tests one unit of code in isolation
//  * Integration Tests
//  *    How multiple units work together
//  * Functional Tests
//  *    Tests a particular function of software
//  * Acceptance / End-to-end (E2E) Tests
//  *    Use actual browser and server (Cypress, Selenium) <> RTL
//  */

// /**
//  * Functions separate from components
//  *    Used by several components
//  *    Complex logic
//  * Unit test if
//  *    Complex logic difficult to test via functional tests
//  *    Too many edge cases
//  */