import '@testing-library/jest-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import { FakeProducts } from '../components/FakeProducts/FakeProducts'

const server = setupServer(
  // Describe network behavior with request handlers.
  // Tip: move the handlers into their own module and
  // import it across your browser and Node.js setups!
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
        {
            id: 1,
            title: "tes1",
            price: 0.11,
            description: "test1",
            category: "test1",
            image: "test1"
        },
      ]),
    )
  }),
)

// Enable request interception.
beforeAll(() => server.listen())

// Reset handlers so that each test could alter them
// without affecting other, unrelated tests.
afterEach(() => server.resetHandlers())

// Don't forget to clean up afterwards.
afterAll(() => server.close())

it('displays the list of recent posts', async () => {
  render(<FakeProducts />)

  // 🕗 Wait for the posts request to be finished.
//   await waitFor(() => {
//     expect(
//       screen.getByLabelText('Fetching latest posts...'),
//     ).not.toBeInTheDocument()
//   })

  // ✅ Assert that the correct posts have loaded.
//   expect(screen.getByTestId("test")).toBeInTheDocument()
  expect(screen.getAllByRole("textbox")).toBeInTheDocument()

//   expect(
//     screen.getByTestId("test1"),
//   ).toBeInTheDocument()
})