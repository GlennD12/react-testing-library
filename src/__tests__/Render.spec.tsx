import '@testing-library/jest-dom'
import { SampleForm } from '../components/SampleForm/SampleForm';
import { render, screen } from '@testing-library/react';



describe("Render", () => {
    beforeEach(() => {
        render(<SampleForm />);
    });

    test("Renders fullName Input", () => {
        const textElement = screen.getByRole("textbox");
        expect(textElement).toBeInTheDocument();
    });
});
