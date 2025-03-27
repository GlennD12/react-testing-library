import '@testing-library/jest-dom'
import { SampleForm } from '../components/SampleForm/SampleForm';
import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe("Sample Form", () => {

    test("Renders fullName Input", () => {
        render(<SampleForm />);
        const textElement = screen.getByRole("textbox");
        expect(textElement).toBeInTheDocument();
    });

    test("Renders Age Input", () => {
        render(<SampleForm />);
        expect(screen.getByTestId("age")).toBeInTheDocument();
    });

    test("Renders Checkbox", () => {
        render(<SampleForm />);
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    test('calls onClick prop when clicked', () => {
        const handleClick = jest.fn()
        render(<input type="button" onClick={handleClick} value="Click me" />)
        fireEvent.click(screen.getByText(/click me/i))
        expect(handleClick).toHaveBeenCalledTimes(1)
    });

    test('Clicked Checkbox', async () => {
        const user = userEvent.setup();
        render(<SampleForm />);
        await user.click(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

})
