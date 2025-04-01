import '@testing-library/jest-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event';
import { FakeProducts } from '../components/FakeProducts/FakeProducts'

const handlers = [
  rest.get('http://localhost:3000/products', (req , res, ctx) => {
    console.log(req);
    return res(
      ctx.json([
        {
            id: 0,
            title: "test title",
            price: 0.1,
            description: "test description",
            category: "test category",
            image: "test image"
        },
      ]),
    )
  }),
];

const server = setupServer(...handlers)


beforeAll(() => server.listen());
beforeEach(() => render(<FakeProducts />));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Mock Service Worker", () => {
  const user = userEvent.setup();
  test('Fake Products Renders Correctly', async () => {
    await waitFor(() => {
      expect(
        screen.getByText("Fake products")).toBeInTheDocument();
    })
    expect(screen.getByText('test title')).toBeInTheDocument();
  });

  test('Click Add New Product', async () => {
    await waitFor(() => {
      expect(
        screen.getByText("Fake products")).toBeInTheDocument();
    });
    const addNewProductBtn = screen.getByText('Add New Product');
    await user.click(addNewProductBtn);
    expect(screen.getByText('Create New Product')).toBeInTheDocument();
  })
});
