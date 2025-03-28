import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe("All UserEvents", () => {
    const user = userEvent.setup();

    test('Click', async () => {
        render(<input id="checkbox" type="checkbox" />);
        await user.click(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('dbClick', async () => {
        render(<input id="checkbox" type="checkbox" />);
        await user.dblClick(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    test('type', async () => {
        render(<input id="fullName" type="text" />);
        await user.type(screen.getByRole('textbox'), 'Glenn Dale!')
        expect(screen.getByRole('textbox')).toHaveValue('Glenn Dale!');
    });

    test('upload', async () => {
        const file = new File(['foo'], 'foo.txt', { type: 'text/plain' });
        render(
            <div>
                <label htmlFor="file-uploader">Upload file:</label>
                <input id="file-uploader" type="file" role=""/>
            </div>,
            );
        
        const input = screen.getByLabelText(/upload file/i) as HTMLInputElement;
        await userEvent.upload(input, file);
        
        expect(input.files).toHaveLength(1)
    });
    
})
