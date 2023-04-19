const Report = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/3 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">Total Sales</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                1,600
              </p>
              <p className="text-sm text-center text-gray-500">
                25% From Last Week
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">
                Total Customer
              </h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                {" "}
                1,890
              </p>
              <p className="text-sm text-center text-gray-500">
                76% From Last Week
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">
                Total Orders
              </h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                8,900
              </p>
              <p className="text-sm text-center text-gray-500">
                32% From Last Week
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row">
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">Vendors</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                657
              </p>
              <p className="text-sm text-center text-gray-500">
                56% From Last Week
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">
                Total Revenue
              </h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                8900
              </p>
              <p className="text-sm text-center text-gray-500">
                70% From Last Week
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">Total Users</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">15</p>
              <p className="text-sm text-center text-gray-500">
                0.15% From Last Week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
