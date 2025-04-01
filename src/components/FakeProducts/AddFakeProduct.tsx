export const AddFakeProduct = (props: any) => {
    const productCategory = [
        "men's clothing",
        "jewelery",
        "electronics",
        "women's clothing"
    ];
    return (
    <>
      <div>{props.isVisible}</div>
      {props.isVisible && (
        <div
          id="crud-modal"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-full max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Product
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                  onClick={props.onCloseAddModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form className="p-4 md:p-5" action={props.onSubmitFakeProducts}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="name"
                      onChange={(e) => {props.onHandleChange(e)}}
                      value={props.formData.title}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type product name"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      onChange={(e) => {props.onHandleChange(e)}}
                      value={props.formData.price}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="$2999"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Category
                    </label>
                    <select
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      name="category"
                      onChange={(e) => {props.onHandleChange(e)}}
                      value={props.formData.category}
                    >
                      <option selected>
                        Select category
                      </option>
                      {productCategory.map((productCat: string) => (
                        <option value={productCat}>{productCat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Image Link
                    </label>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      onChange={(e) => {props.onHandleChange(e)}}
                      value={props.formData.image}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Product Description
                    </label>
                    <textarea
                      id="description"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write product description here"
                      name="description"
                      onChange={(e) => {props.onHandleChange(e)}}
                      value={props.formData.description}
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={props.onSubmitFakeProducts}
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Add new product
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
