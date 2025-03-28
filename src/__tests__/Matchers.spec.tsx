import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe("Matchers", () => {
 
    test("toBeInTheDocument - fullName Input", () => {
        render(<input type="text" name="fullName" id="fullName" />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    test("toBeDisabled - Age Input", () => {
        render(<input type="number" name="age" data-testid="age" disabled />);
        expect(screen.getByTestId("age")).toBeDisabled();
    });

    test("toBeEnabled - Age Input", () => {
        render(<input type="number" name="age" data-testid="age" />);
        expect(screen.getByTestId("age")).toBeEnabled();
    });

    test('toBeChecked', async () => {
        const user = userEvent.setup();
        render(<input id="checkbox" type="checkbox" />);
        await user.click(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('not toBeChecked', async () => {
        const user = userEvent.setup();

        render(<input id="checkbox" type="checkbox" />);
        await user.dblClick(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    test('toHaveBeenCalled', async () => {
        const user = userEvent.setup();
        const handleClick = jest.fn();

        render(<input type="button" value="Submit" onClick={handleClick} />);
        await user.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalled();
    });

    test('toHaveBeenCalledTimes', async () => {
        const user = userEvent.setup();
        const handleClick = jest.fn();

        render(<input type="button" value="Submit" onClick={handleClick} />);
        await user.dblClick(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(2);
    });

    test("toHaveValue - Age Input", () => {
        render(<input type="number" name="age" data-testid="age" value="24" readOnly/>);
        expect(screen.getByTestId("age")).toHaveValue(24);
    });
})
