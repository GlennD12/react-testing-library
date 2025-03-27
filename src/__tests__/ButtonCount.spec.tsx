import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { ButtonCount } from "../components/ButtonCount/ButtonCount";

describe("Button Count", () => {

    test("Button Clicked once and Count is 1", async () => {
        render(<ButtonCount />);
        const user = userEvent.setup();
        const elemButton = screen.getByRole("button");
        const countContainer = screen.getByRole("strong");
        
        await user.click(elemButton);
        expect(countContainer).toHaveTextContent("1");

    });

});