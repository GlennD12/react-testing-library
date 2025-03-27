import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Skill } from '../components/Skills/Skill';

describe("Skill test", () => {
    const skills = ["React", "Vue", "Angular"];

    test("Renders correctly", () => {
        render(<Skill skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })
})