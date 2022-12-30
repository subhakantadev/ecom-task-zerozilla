import React from "react";
const Profile = () => {

  return (
    <div className=" min-w-screen p-5 mt-0   bg-blue-100">
      <div className="p-3 bg-grey-200">
        <div className="container p-4 rounded-lg">
          <h1 className=" text-center text-3xl">
            <strong>Profile</strong>
          </h1>
        </div>
        <div className=" grid place-items-center container ">

          <img className=" relative rounded-full content-center h-48 w-75 "
            src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Image.png"
            alt="" />
        </div>


        <div className="container p-8 rounded-lg">
          <h1 className=" text-center text-3xl">
            <strong>Personal Information</strong>
          </h1>
        </div>
        <div className=" flex place-content-center">
          <div className="flex flex-col float-left">
            <p className="text-sm font-medium text-gray-900 px-6 py-4 ">
              Name : Subhakanta Sahu
            </p>
            <p className="text-sm font-medium text-gray-900 px-6 py-4 ">
              Phone : +91 7008906913
            </p>
            <p className="text-sm font-medium text-gray-900 px-6 py-4 ">
              Address : Bhubaneswar, Odisha ,751004
            </p>
          </div>
          <div className="flex flex-col float-right">
            <p className="text-sm font-medium text-gray-900 px-6 py-4">
              User Name : subhakanta11
            </p>
            <p className="text-sm font-medium text-gray-900 px-6 py-4 ">
              Email : subhakantaxxx@gmail.com
            </p>
            <p className="text-sm font-medium text-gray-900 px-6 py-4 ">
              Company : xxxxxxxxxx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;