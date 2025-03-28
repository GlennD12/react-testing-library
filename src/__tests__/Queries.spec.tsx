import '@testing-library/jest-dom'
import { SampleForm } from '../components/SampleForm/SampleForm';
import { render, screen } from '@testing-library/react';

describe("Queries", () => {
    beforeEach(() => {
        render(<SampleForm />);
    });

    test("Renders fullName Input", () => {
        const textElement = screen.getByRole("textbox");
        expect(textElement).toBeInTheDocument();
    });

    test("Renders Age Input", () => {
        expect(screen.getByTestId("age")).toBeInTheDocument();
    });

    test("Renders Checkbox", () => {
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });
});
