import { useOrders } from "../../context/OrderContext";

const Orders = () => {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">No Orders Found</h1>

          <p className="mt-4 text-gray-500">
            You haven't placed any orders yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-4xl font-bold">
        My Orders
      </h1>

      <div className="space-y-8">

        {orders.map((order) => (

          <div
            key={order.id}
            className="rounded-xl bg-white p-6 shadow"
          >

            {/* Order Header */}

            <div className="mb-6 flex flex-col justify-between gap-3 border-b pb-5 md:flex-row">

              <div>

                <h2 className="text-xl font-bold">
                  {order.id}
                </h2>

                <p className="text-gray-500">
                  {order.date}
                </p>

              </div>

              <div className="text-right">

                <span className="rounded-full bg-yellow-500 px-4 py-2 text-sm text-white">
                  {order.status}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-blue-600">
                  ₹{order.total}
                </h3>

              </div>

            </div>

            {/* Shipping */}

            <div className="mb-8 rounded-lg bg-gray-100 p-4">

              <h3 className="mb-2 font-semibold">
                Shipping Address
              </h3>

              <p>
                {order.shipping.firstName}{" "}
                {order.shipping.lastName}
              </p>

              <p>{order.shipping.phone}</p>

              <p>{order.shipping.address}</p>

              <p>
                {order.shipping.city},{" "}
                {order.shipping.state}
              </p>

              <p>
                {order.shipping.country} -
                {" "}
                {order.shipping.pincode}
              </p>

              <p className="mt-2 font-medium">
                Payment :
                {" "}
                {order.shipping.payment}
              </p>

            </div>

            {/* Ordered Products */}

            <div className="space-y-5">

              {order.items.map((item) => (

                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-lg object-cover"
                  />

                  <div className="flex-1">

                    <h3 className="text-lg font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      Quantity :
                      {" "}
                      {item.quantity}
                    </p>

                    <p className="mt-2 font-bold text-blue-600">
                      ₹{item.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Orders;