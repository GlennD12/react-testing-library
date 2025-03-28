import '@testing-library/jest-dom'
import { SampleForm } from '../components/SampleForm/SampleForm';
import { render, screen, fireEvent } from '@testing-library/react';

describe("FireEvent", () => {
    beforeEach(() => {
        render(<SampleForm />);
    })

    test('Clicked Checkbox Correctly', () => {
        fireEvent.click(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

})
