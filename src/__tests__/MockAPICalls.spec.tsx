import '@testing-library/jest-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import { FakeProducts } from '../components/FakeProducts/FakeProducts'

const server = setupServer(
  rest.get('https://fakestoreapi.com/products', (req , res, ctx) => {
    console.log(req);
    return res(
      ctx.json([
        {
            id: 0,
            title: "test",
            price: 0.1,
            description: "test",
            category: "test",
            image: "test"
        },
      ]),
    )
  }),
)


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('displays the list of recent posts', async () => {
  render(<FakeProducts />)

  await waitFor(() => {
    expect(
      screen.getByText("Posts:")).toBeInTheDocument();
  })

  expect(screen.getByTestId("test")).toBeInTheDocument()
})