import { FakeProductsTypes } from "../../types/FakeProducts.types";

export const INITIAL_STATE = {
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    data: <FakeProductsTypes[]>[],
    loading: true,
    isAddProductModalVisible: false,
    error: "",
};

export const fakeProductsFormReducer = (state: any, action: any) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.payload.value,
        loading: false,
      };
    case "POST_DATA":
    return {
        ...state,
        data: action.payload.value,
    };
    case "DELETE_DATA":
      return {
          ...state,
          data: action.payload.value,
    };
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: [action.payload.value],
      };
    case "ERROR_GETTING_DATA":
      return {
        ...state,
        loading: false,
        error: "Error:" + action.payload.value,
      };
    case "OPEN_ADD_PRODUCTS_MODAL":
      return {
        ...state,
        isAddProductModalVisible: true,
      };
    case "CLOSE_ADD_PRODUCTS_MODAL":
      return {
        ...state,
        isAddProductModalVisible: false,
      };
    default:
      return state;
  }
};
