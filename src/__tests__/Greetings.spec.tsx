import { Greetings } from "../components/Greetings/Greetings";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe.skip("Greets", () => {
    it("Render", () => {
        render(<Greetings />);
    })

    it("Components has Text Hello", () => {
        render(<Greetings />);
        const textElement = screen.getByText(/Hello/i);
        expect(textElement).toBeInTheDocument();
    })

    it("Component has Hello with Name", () => {
        render(<Greetings name="Glenn" />)
        const textElement = screen.getByText(/hello glenn/i);
        expect(textElement).toBeInTheDocument();
    })
})

