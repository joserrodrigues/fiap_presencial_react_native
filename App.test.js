import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from './App';

describe('<App />', () => {
    it('Check Initial Case', async () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(1);
        expect(tree).toMatchSnapshot();
    });

    it('Check Button Press', async () => {
        const page = render(<App />);
        const textInfo = page.getByText("Teste Rubens");
        expect(textInfo).toBeTruthy();

        const button = page.getByTestId('buttonID');
        expect(button).toBeTruthy();
        fireEvent.press(button);

        const successMessage = await waitFor(() =>
            page.getByText("Teste 2")
        );
        expect(successMessage).toBeTruthy();
    });
});