import "@testing-library/jest-dom";

beforeAll(() => {
    console.log("Starting Program");
});

afterAll(() => {
    console.log("Ending Program");
});

beforeEach(() => {
    console.log("File Connection");
});

beforeEach(() => {
    console.log("File Teardown");
});

describe("Describe 1", () => {
    beforeEach(() => {
        console.log("Test 1 File Connection");
    });

    afterEach(() => {
        console.log("Test 1 File Teardown");
    });

    test("Test 1", () => {
        expect("1").toBe("1");
    })
});


describe("Describe 2", () => {
    beforeEach(() => {
        console.log("Test 2 File Connection");
    });

    afterEach(() => {
        console.log("Test 2 File Teardown");
    });

    test("Test 2", () => {
        expect("1").toBe("1");
    })
});