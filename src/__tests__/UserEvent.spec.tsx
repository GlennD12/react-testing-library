import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { SampleForm } from '../components/SampleForm/SampleForm';

describe("UserEvent", () => {
    beforeEach(() => {
        render(<SampleForm />);
    });

    test('Clicked Checkbox Correctly', async () => {
        const user = userEvent.setup();
        await user.click(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

})
