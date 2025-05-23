import axios from "axios";
import { useReducer, useEffect } from "react";
import { AddFakeProduct } from "./AddFakeProduct";
import { EditFakeProducts } from "./EditFakeProducts";
import { INITIAL_STATE } from "./FakeProductsReducer";
import { fakeProductsFormReducer } from "./FakeProductsReducer";
import { FakeProductsList } from "./FakeProductsList";


export const FakeProducts = () => {
  const [state, dispatch] = useReducer(fakeProductsFormReducer, INITIAL_STATE);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      dispatch({
        type: "GET_DATA",
        payload: { value: response.data },
      });
    } catch (error) {
      dispatch({
        type: "ERROR_GETTING_DATA",
        payload: { value: error },
      });
    }
  };

  const openAddFakeProductsModal = () => {
    dispatch({ type: "OPEN_ADD_PRODUCTS_MODAL" });
  };

  const closeAddFakeProductsModal = () => {
    dispatch({ type: "CLOSE_ADD_PRODUCTS_MODAL" });
  };

  const openEditFakeProductsModal = (targetEditData: any) => {
    dispatch({ 
      type: "OPEN_EDIT_PRODUCTS_MODAL",
      payload: {
        value: targetEditData
      }
    });
  };

  const closeEditFakeProductsModal = () => {
    dispatch({ type: "CLOSE_EDIT_PRODUCTS_MODAL" });
  };

  const updateFakeProducts = async (event: any) => {
    event.preventDefault();
    const id = event.target.id.value;
    // const product = { 
    //   title: event.target.title.value, 
    //   price: event.target.price.value,
    //   description: event.target.description.value,
    //   category: event.target.category,
    //   image: event.target.image
    // };

    // console.log(product);
    // console.log(id);
    try {
      const product = { 
        title: event.target.title.value, 
        price: event.target.price.value,
        description: event.target.description.value,
        category: event.target.category,
        image: event.target.image
      };

      const response = await axios.put('https://localhost:3000/products/' + id, product);
      console.log("response.data", response.data);

    } catch (error) {
      dispatch({
        type: "ERROR_GETTING_DATA",
        payload: { value: error },
      });
    }
  }

  const addFakeProducts = async () => {
    try {
      const product = { 
        title: state.title, 
        price: state.price,
        description: state.description,
        category: state.category,
        image: state.image
      };

      const response = await axios.post('http://localhost:3000/products', product);
      dispatch({ 
        type: "POST_DATA",
        payload: { value: response.data },
      });
    } catch (error) {
      dispatch({
        type: "ERROR_GETTING_DATA",
        payload: { value: error },
      });
    }
  }

  const deleteFakeProducts = async (id: string) => {
    if(confirm("Are you sure you want to delete id: " + id + " ?")){
      try {
        await axios.delete('http://localhost:3000/products/' + id);
        const response = await axios.get("http://localhost:3000/products");
        dispatch({
          type: "GET_DATA",
          payload: { value: response.data },
        });
      } catch (error) {
        dispatch({
          type: "ERROR_GETTING_DATA",
          payload: { value: error },
        });
      }
    }
  }

  const handleChange = (e: any) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    });
    console.log(state.category);
  }
  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {state.loading && (
        <div className="text-center mt-6">
          {state.loading}
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="ml-4">Loading...</span>
          </div>
        </div>
      )}
      {!state.loading && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Fake products
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Fake store rest API for your e-commerce or shopping website prototype
              </p>
              <button
                onClick={() => {
                  openAddFakeProductsModal();
                }}
                className="absolute top-0 right-0 mt-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                Add New Product
              </button>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <FakeProductsList productList={state.data} onDeleteFakeProducts={(deleteFakeProducts)} onEditFakeProducts={(openEditFakeProductsModal)}/>
          </table>
          <AddFakeProduct
            isVisible={state.isAddProductModalVisible}
            onCloseAddModal={closeAddFakeProductsModal}
            onSubmitFakeProducts={addFakeProducts}
            onHandleChange={handleChange}
            formData={state}
          />
          <EditFakeProducts
            isVisible={state.isEditProductModalVisible}
            onCloseEditModal={closeEditFakeProductsModal}
            onSubmitFakeProducts={updateFakeProducts}
            onHandleChange={handleChange}
            formData={state.editData}
          />
        </div>
      )}
    </>
  );
};
