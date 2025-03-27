import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react"
import { userEvent } from '@testing-library/user-event';
import TodoForm from '../components/TodoForm';
import App from '../App';

describe('TodoForm', () => {
    const handleSubmit = jest.fn();


    beforeEach(() => {
        render(<TodoForm onSubmit={handleSubmit}/>);
        handleSubmit.mockClear();
    })

    it('Renders the TODO Form', () => {
        render(<TodoForm onSubmit={handleSubmit}/>);
    });

    it('Todo App is in the text', () => {
        render(<App />);
        const linkElement = screen.getByText(/Todo App/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('renders the input field', () => {
        const inputAddTodo = screen.getByPlaceholderText('Add Todo') as HTMLInputElement;
        expect(inputAddTodo).toBeInTheDocument();
    })

    // fireEvent Utilizations
    it('fireEvent Utilization - calls handleSubmit with the correct value when form is submitted', () => {
        const inputAddTodo = screen.getByPlaceholderText('Add Todo') as HTMLInputElement;
        const btnAddTodo = screen.getByText('Add');

        // Simulate user typing in the input
        fireEvent.change(inputAddTodo, { target: { value: 'New Todo' } });
        expect(inputAddTodo.value).toBe('New Todo');

        fireEvent.click(btnAddTodo);

        // Check if onSubmit was called with the correct value
        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit).toHaveBeenCalledWith('New Todo');
    });

    // userEvent Utilizations
    it('userEvent Utilization - calls handleSubmit with the correct value when form is submitted', async () => {
        const inputAddTodo = screen.getByPlaceholderText('Add Todo') as HTMLInputElement;
        const btnAddTodo = screen.getByText('Add');

        // Simulate user typing in the input
        await userEvent.type(inputAddTodo, 'New Todo');
        expect(inputAddTodo.value).toBe('New Todo');

        await userEvent.click(btnAddTodo);

        // Check if onSubmit was called with the correct value
        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit).toHaveBeenCalledWith('New Todo');
    });

    it('does not call on submit if input is empty', () => {
        const btnAddTodo = screen.getByText('Add');
        // Simulate form submission with empty input
        fireEvent.click(btnAddTodo);
        // Check if onSubmit was not called
        expect(handleSubmit).not.toHaveBeenCalled();
    })
})