import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiEdit,
  FiCreditCard,
  FiLogOut,
} from "react-icons/fi";

import user from "../../data/user";

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4">

        <h1 className="mb-8 text-4xl font-bold">
          My Profile
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left Card */}

          <div className="rounded-xl bg-white p-8 shadow">

            <div className="flex flex-col items-center">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-white">

                <FiUser size={60} />

              </div>

              <h2 className="mt-5 text-2xl font-bold">
                {user.name}
              </h2>

              <p className="text-gray-500">
                Frontend Developer
              </p>

              <button className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">

                <FiEdit />

                Edit Profile

              </button>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-8 lg:col-span-2">

            {/* Personal Info */}

            <div className="rounded-xl bg-white p-8 shadow">

              <h2 className="mb-6 text-2xl font-bold">
                Personal Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div className="flex items-center gap-3">

                  <FiUser className="text-blue-600" />

                  <div>

                    <p className="text-gray-500">
                      Full Name
                    </p>

                    <p className="font-semibold">
                      {user.name}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <FiMail className="text-blue-600" />

                  <div>

                    <p className="text-gray-500">
                      Email
                    </p>

                    <p className="font-semibold">
                      {user.email}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <FiPhone className="text-blue-600" />

                  <div>

                    <p className="text-gray-500">
                      Phone
                    </p>

                    <p className="font-semibold">
                      {user.phone}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <FiCalendar className="text-blue-600" />

                  <div>

                    <p className="text-gray-500">
                      Date of Birth
                    </p>

                    <p className="font-semibold">
                      {user.dob}
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Address */}

            <div className="rounded-xl bg-white p-8 shadow">

              <h2 className="mb-6 text-2xl font-bold">
                Shipping Address
              </h2>

              <div className="flex items-start gap-4">

                <FiMapPin
                  className="mt-1 text-blue-600"
                  size={22}
                />

                <div>

                  <p>{user.address.street}</p>

                  <p>
                    {user.address.city},{" "}
                    {user.address.state}
                  </p>

                  <p>
                    {user.address.pincode}
                  </p>

                  <p>{user.address.country}</p>

                </div>

              </div>

            </div>

            {/* Payment */}

            <div className="rounded-xl bg-white p-8 shadow">

              <h2 className="mb-6 text-2xl font-bold">
                Saved Payment
              </h2>

              <div className="flex items-center gap-4">

                <FiCreditCard
                  className="text-blue-600"
                  size={24}
                />

                <div>

                  <p className="font-semibold">
                    Visa Ending **** 4587
                  </p>

                  <p className="text-gray-500">
                    Expires 12/28
                  </p>

                </div>

              </div>

            </div>

            {/* Logout */}

            <div>

              <button className="flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-white hover:bg-red-600">

                <FiLogOut />

                Logout

              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;