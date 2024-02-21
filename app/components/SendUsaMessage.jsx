import React from "react";
import SendusMsgImg from "../../public/assets/sendusMsgImg.png";
import BlueBackground from "../../public/assets/BluePlusBackground.png";
import Image from "next/image";
import rightArrow from "../../public/assets/rightArrow.png";

const SendUsaMessage = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%), url(${SendusMsgImg.src})`,
      }}
      className="flex justify-center items-center w-full h-screen bg-cover "
    >
      <div
        class="flex justify-center items-start flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col rounded-2xl border-[8px] border-solid border-[#ABE03C] px-16 py-16 bg-cover"
        style={{
          backgroundImage: `linear-gradient(270deg, rgba(16,35,86,0) 50%, rgba(16,35,86,1) 100%), url(${BlueBackground.src})`,
        }}
      >
        <div className="pr-16">
          <h1 className="font-extrabold text-[36px] font-Inter text-[#ffffff] lg:text-[62px]">
            Send Us a Message
          </h1>
        </div>

        <div className="mx-auto md:px-12">
          <div className="sm:p-12">
            <form className="" action="#" method="POST">
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First name"
                    className="w-full p-4 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Last name"
                    className="w-full p-4 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                  />
                </div>
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="w-full p-4 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
              <div className="mb-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full p-4 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  className="w-full p-4 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                ></textarea>
              </div>
              <div className="flex items-center mb-6">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500"
                />
                <label
                  htmlFor="checkbox-1"
                  className="ml-2 text-sm font-medium text-gray-300"
                >
                  You agree to our privacy policy.
                </label>
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  //   className="px-6 py-3 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out w-full"
                  className="mt-10 bg-[#ABE03C] flex font-medium h-[60px] w-full items-center justify-center rounded-lg text-[#102356]"
                >
                  Submit
                  <Image
                    src={rightArrow}
                    className="ml-2"
                    height={14}
                    width={14}
                    alt="rightArrow"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendUsaMessage;
