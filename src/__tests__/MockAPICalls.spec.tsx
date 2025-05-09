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
  rest.post('http://localhost:3000/products', async (req , res, ctx) => {
    console.log(req);
    return res(
      ctx.json([
        {
            id: 0,
            title: "test post",
            price: 0.1,
            description: "test post description",
            category: "test post category",
            image: "test post image"
        },
      ]),
    )
  }),
];

const server = setupServer(...handlers)

// for unhandle request, {warn" (Default), "error"	Print an error and halt request execution and "error"	Print an error and halt request execution.}
beforeAll(() => server.listen({
    onUnhandledRequest: 'bypass'
  }));
beforeEach(() => render(<FakeProducts />));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Mock Service Worker", () => {
  const user = userEvent.setup();
  test('GET Fake Products', async () => {
    await waitFor(() => {
      expect(
        screen.getByText("Fake products")).toBeInTheDocument();
    })
    expect(screen.getByText('test title')).toBeInTheDocument();
  });

  test('POST New Fake Products', async () => {
    await waitFor(() => {
      expect(
        screen.getByText("Fake products")).toBeInTheDocument();
    });
    const addNewProductBtn = screen.getByRole("button", {name: "Add New Product"});
    await user.click(addNewProductBtn);
    const submitBtn = screen.getByRole("button", {name: "Submit"});
    await user.click(submitBtn);

    expect(screen.getByText('test post')).toBeInTheDocument();
  })

  // test('DELETE New Fake Products', async () => {
  //   await waitFor(() => {
  //     expect(
  //       screen.getByText("Fake products")).toBeInTheDocument();
  //   });
  //   const addNewProductBtn = screen.getByRole("button", {name: "Add New Product"});
  //   await user.click(addNewProductBtn);

  //   const submitBtn = screen.getByRole("button", {name: "Submit"});
  //   await user.click(submitBtn);

  //   expect(screen.getByText('test post')).toBeInTheDocument();
  // })
});
