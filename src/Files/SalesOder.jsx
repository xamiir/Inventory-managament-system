import { useState } from "react";
//import { Link } from "react-router-dom";
import {
  FaTrash,
  FaShoppingCart,
  FaMinus,
  FaPlus,
  //FaPrint,
  //FaCog,
  //FaFileInvoice,
} from "react-icons/fa";
//import addStyle from "./AddCustomer.model.css";
// import { fetchCustomer } from "../services/api-calls";
import useSWR from "swr";
import {
  //fetchOrdersMeta,
  fetchProducts,
  fetchCustomer,
  createOrder,
} from "../services/api-calls";
import { toast } from "react-toastify";
import { useCart } from "../context/CartProvider";
import "../Component/App.css";
import useAuth from "../context/useAuth";



const SalesOrder = () => {
  const { data, isLoading } = useSWR("/products", fetchProducts);
  const { data: customers } = useSWR("/customers", fetchCustomer);
  const {
    state: cartState,
    addToCart,
    //removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getQuantity,
    emptyCart,
  } = useCart();

  //
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    query: "",
    customer: "",
    discount: "",
    dateordered: "",
  });
  const { user } = useAuth();
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    if (formNo === 1) {
      setFormNo(formNo + 1);
    } else if (formNo === 2 && state.customer) {
      setFormNo(formNo + 1);
    } else {
      toast.error("Please fill all the fields");
    }
  };


  const finalSubmit = async (e) => {
    e.preventDefault();
    // cartState have items array and contains array of object so ineed to map it and only id of array
    const items = cartState.items.map((item) => {
      return {
        _id: item._id,
        quantity: item.quantity,
      };
    });

    const reqObject = {
      customer: state.customer,
      items,
      total: cartState.total,
      orderedBy: user !== null ? user._id : null,
    };

    try {
      const res = await createOrder(reqObject);
      toast.success(res.message);

      emptyCart();
      setState({
        query: "",
        customer: "",
        discount: "",
      });

      setFormNo(formArray[0]);
    } catch (error) {
      toast.error(error.message);
    }
    // resetForm();
  };

  const pre = () => {
    setFormNo(formNo - 1);
  };

  const searchingProduct = filteredArray(data, state.query);

  const getCustomerName = (id) => {
    const customer = customers?.find((customer) => customer._id === id);
    return customer?.name;
  };

  return (
    <div class="hide-print flex flex-row h-screen antialiased text-blue-gray-800">
      <div class="flex flex-row w-auto flex-shrink-0 pl-4 pr-2 py-4">
        {/* <div class="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-gray-600 rounded-3xl">
          <Link
            href="#"
            class="flex items-center justify-center h-12 w-12 bg-cyan-50 text-gray-700 rounded-full"
          >
            <FaFileInvoice className="w-6 h-6" />
          </Link>
          <ul class="flex flex-col space-y-2 mt-12">
            <li>
              <Link href="#" class="flex items-center">
                <span class="flex items-center justify-center h-12 w-12 rounded-2xl text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" class="flex items-center">
                <span class="flex items-center justify-center text-cyan-100 hover:bg-cyan-400 h-12 w-12 rounded-2xl">
                  <FaCog className="w-6 h-6" />
                </span>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
      {/* content menu */}
      {formNo === 1 && (
        <div class="flex-grow flex">
          <div class="flex flex-col bg-blue-gray-50 h-full w-full py-4">
            <div class="flex px-2 flex-row relative">
              <div class="absolute left-5 top-3 px-2 py-2 rounded-full bg-gray-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                class="bg-white rounded-3xl shadow text-lg full w-full h-16 py-4 pl-16 transition-shadow focus:shadow-2xl focus:outline-none"
                placeholder="Cari menu ..."
                //x-model="keyword"

                onChange={inputHandle}
                name="query"
                value={state.query}
              />
            </div>
            <div className="h-full overflow-hidden mt-4">
              <div className="h-full overflow-y-auto px-2">
                <div class="grid grid-cols-3 gap-4 pb-3 ">
                  {isLoading && <p>Loading...</p>}
                  {searchingProduct?.map((product) => {
                    const { _id, name, cost, image } = product;
                    return (
                      <div
                        key={_id}
                        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        role="button"
                      >
                        <div class="flex items-center justify-between px-4 py-3 border-b">
                          <img
                            class="p-8 rounded-t-lg"
                            src={
                              image ||
                              "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a50-sm-a505f-ds-1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div class="px-5 pb-5">
                          <div className="flex justify-between">
                            <h5 class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                              {name}
                            </h5>
                          </div>

                          <div class="flex justify-between mt-2">
                            <span class="text-2xl font-bold text-gray-900 dark:text-white">
                              ${cost}
                            </span>
                            <button
                              onClick={() => {
                                addToCart(product);
                              }}
                              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col w-[50%] bg-white rounded-3xl shadow-lg">
            <div class="flex flex-row justify-between items-center px-4 py-3 border-b">
              <button
                onClick={() => {
                  emptyCart();
                }}
                class="flex items-center justify-center px-4 py-2 text-sm text-red-500 rounded-md"
              >
                <FaTrash className="w-4 h-4 mr-2" />
              </button>

              <button
                class="flex items-center justify-center px-4 py-2 text-sm text-green-600 rounded-md"
                onChange={addToCart}
              >
                <FaShoppingCart className="w-4 h-4 mr-2" />
                <span class="font-medium text-gray-900 ">
                  {cartState.items.length}
                </span>
              </button>
            </div>

            <div class="flex flex-col flex-grow overflow-hidden">
              <div class="flex flex-col flex-grow overflow-y-auto">
                <div class="flex flex-col">
                  {cartState.items.map((product) => {
                    return (
                      <div
                        key={product._id}
                        class="flex flex-row justify-between items-center px-4 py-3 border-b bg-gray-100 m-3"
                      >
                        <div className="flex items-center">
                          <img
                            src={
                              product.image ||
                              "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a50-sm-a505f-ds-1.jpg"
                            }
                            alt=""
                            className="object-cover w-12 h-12"
                          />
                          <div className="ml-2">
                            <p className="text-sm font-semibold">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {product.cost}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => {
                              decrementQuantity(product);
                            }}
                            disabled={product.quantity === 1}
                            className="text-gray-600 hover:text-gray-800  font-bold py-2 px-4 rounded-full"
                          >
                            <FaMinus />
                          </button>
                          <p className="px-2">{getQuantity(product._id)}</p>
                          <button
                            onClick={() => {
                              incrementQuantity(product);
                            }}
                            className="text-gray-600 hover:text-gray-800   font-bold py-2 px-4 rounded-full"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div class="flex flex-row justify-between items-center px-4 py-3 border-t">
              <p class="text-xl font-semibold">Total</p>
              <p class="text-xl font-semibold">${cartState.total}</p>
            </div>

            <div class="flex flex-row justify-between items-center px-4 py-3 border-t">
              <button
                class="flex items-center justify-center px-4 py-2 text-white font-bold w-full bg-gray-700 rounded-md "
                onClick={next}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {formNo === 2 && (
        <div className=" rounded-3xl shadow-lg h-96 flex justify-center m-28 w-full">
          <div className="w-[50%]">
            <div className="flex flex-col justify-between px-4 py-3 border-b">
              <label className="text-xl font-semibold ml-0">Ordered By</label>
              <input
                className="border border-gray-300 rounded-md px-2 py-1 w-[67%]"
                disabled
                name="customer"
                defaultValue={
                  user !== null ? user.name : "Please login to place an order"
                }
              />
            </div>
            <div className="flex flex-col justify-between px-4 py-3 border-b">
              <label className="text-xl font-semibold ml-0">
                Customer Name
              </label>
              <select
                className="border border-gray-300 rounded-md px-2 py-1 w-[67%]"
                onChange={inputHandle}
                name="customer"
                value={state.customer}
              >
                <option value="" disabled>
                  Select Customer
                </option>
                {customers.map((customer) => (
                  <option value={customer._id}>{customer.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-between px-4 py-3 border-b">
              <label className="text-xl font-semibold ml-0">Date:</label>
              <input
                className="border border-gray-300 rounded-md px-2 py-1 w-[67%]"
                type="date"
                onChange={inputHandle}
                name="dateordered"
                value={state.dateordered}
              />
            </div>
            <div className="flex flex-row justify-between items-center px-4 py-3 border-b gap-3">
              <button
                class="flex items-center justify-center px-4 py-2 text-white font-bold w-full bg-gray-700 rounded-md "
                onClick={pre}
              >
                Previous
              </button>
              <button
                class="flex items-center justify-center px-4 py-2 text-white font-bold w-full bg-gray-700 rounded-md "
                onClick={next}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {formNo === 3 && (
      <div className="printable-content">
        <div className="">
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-3/4 bg-white shadow-lg m-10">
              <div className="flex justify-between p-4">
                <div>
                  <h1 className="text-3xl italic font-extrabold tracking-widest text-indigo-500">
                    DAHAB ELECTRONICS
                  </h1>
                  <p className="text-base">
                    waxaa ka helee shirkada dahab electronics telephone high
                    quality
                  </p>
                </div>
                <div className="p-2">
                  <ul className="flex">
                    <li className="flex flex-col items-center p-2 border-l-2 border-indigo-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      <span className="text-sm">www.dahab.com</span>
                    </li>
                    <li className="flex flex-col p-2 border-l-2 border-indigo-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm">
                        Bakaaro wadada shirkada ,Sobe, KM4 , Mogadishu , Somalia
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full h-0.5 bg-indigo-500"></div>
              <div className="flex justify-between p-4">
                <div>
                  <h6 className="font-bold">
                    Order Date :{" "}
                    <span className="text-sm font-medium">
                      {" "}
                      {state.dateordered}
                    </span>
                  </h6>
                  {/* <h6 className="font-bold">
                    Order ID :{" "}
                    <span className="text-sm font-medium"> 12/12/2022</span>
                  </h6> */}
                </div>
                <div className="w-40">
                  <address className="text-sm">
                    <span className="font-bold"> User order by : </span>
                    {user !== null ? user.name : ""}
                  </address>
                </div>
                <div className="w-40">
                  <address className="text-sm">
                    <span className="font-bold">customer :</span>
                    {getCustomerName(state.customer)}
                  </address>
                </div>
                <div></div>
              </div>
              <div className="flex justify-center p-4">
                <div className="border-b border-gray-200 shadow">
                  <table className="">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-xs text-gray-500 ">#</th>
                        <th className="px-4 py-2 text-xs text-gray-500 ">
                          Product Name
                        </th>
                        <th className="px-4 py-2 text-xs text-gray-500 ">
                          Quantity
                        </th>
                        <th className="px-4 py-2 text-xs text-gray-500 ">
                          Rate
                        </th>
                        <th className="px-4 py-2 text-xs text-gray-500 ">
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {cartState.items.map((item) => (
                        <tr className="whitespace-nowrap" key={item.id}>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {cartState.items.indexOf(item) + 1}
                          </td>

                          <td className="px-6 py-4 text-sm text-gray-500">
                            {item.name}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">
                              {item.quantity}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">
                              ${item.cost}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {" "}
                            ${item.cost * item.quantity}
                          </td>
                        </tr>
                      ))}

                     
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center px-4 py-3 border-b">
                <div className="flex-row justify-between flex items-center w-[50%]">
                  <p className="text-2xl text-gray-600 font-semibold">
                    Total: ${cartState.total}
                  </p>
                </div>
              </div>
              <div className="flex justify-between p-4">
                <div>
                  <h3 className="text-xl">Terms And Condition :</h3>
                  <ul className="text-xs list-disc list-inside">
                    <li>
                      Please make sure you have the right recipient and address
                    </li>
                    <li>
                      If you have any questions concerning this invoice, contact
                    </li>
                    <li>contact us at : 061-555-5555 or dahab@gmail.com :</li>
                  </ul>
                </div>
                <div className="p-4">
                  <h3>Signature</h3>
                  <div className="text-4xl italic text-indigo-500">AAA</div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-indigo-500"></div>

              <div className="p-4">
                <div className="flex items-center justify-center">
                  Thank you very much for doing business with us.
                </div>

                <div
                  className="flex items-end justify-end space-x-3 "
                  id="no-printme"
                >
                  <button
                    className="px-4 py-2 text-sm text-green-600 bg-green-100"
                    onClick={pre}
                  >
                    Previous
                  </button>
                  <button
                    className="px-4 py-2 text-sm text-blue-600 bg-blue-100"
                    onClick={finalSubmit}
                  >
                    sumbit
                  </button>
                  <button
                    className="px-4 py-2 text-sm text-red-600 bg-red-100 "
                    onClick={() => window.print()}
                  >
                    <span className="ml-2">print</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
  function filteredArray(arr, query) {
    return arr?.filter((el) => {
      return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }
};

export default SalesOrder;
