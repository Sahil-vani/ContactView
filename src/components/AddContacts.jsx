import React, { useState, useRef, useEffect } from "react";

import { RxCross2 } from "react-icons/rx";
import useContact from "../context/contact";

function AddContacts() {
  const { setContacts, contacts, contactForm, setContactForm } = useContact();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const addRef = useRef();

  useEffect(() => {
    let addHandler = (e) => {
      if (!addRef.current.contains(e.target)) {
        setContactForm(false);
      }
    };

    document.addEventListener("mousedown", addHandler);
    return () => {
      document.removeEventListener("mousedown", addHandler);
    };
  }, []);

  const resetForm = (e) => {
    e.preventDefault();
    // console.log("palak");
    setAddress("");
    setEmail("");
    setMobile("");
    setName("");
    document.getElementById("warning").innerHTML = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name != "" && mobile != "" && email != "" && address != "") {
      const dataObj = {
        id: contacts.length + 1,
        name: name,
        mobile: mobile,
        email: email,
        address: address,
      };

      setContacts([...contacts, dataObj]);
      setAddress("");
      setEmail("");
      setMobile("");
      setName("");
      document.getElementById("warning").innerHTML = "";
      setContactForm(false);
    } else {
      document.getElementById("warning").innerHTML = "* Fill All Details";
    }
  };

  return (
    <div
      className={
        contactForm
          ? "w-full max-w-[300px] p-6 mx-4 bg-white rounded-lg shadow-md"
          : "hidden w-full max-w-[300px] p-6 mx-4 bg-white rounded-lg shadow-md"
      }
      ref={addRef}
    >
      <h5
        className=" mb-2 flex items-center justify-between text-xl font-bold text-gray-800 border-b-2
       border-gray-500"
      >
        Add Contact <RxCross2 onClick={() => setContactForm(false)} />
      </h5>

      <form id="form__submit" className="flex flex-col">
        <input
          type="text"
          className="p-2 mb-1 rounded-md bg-gray-100 text-gray-800 border-0  focus:bg-gray-200
           focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Full Name"
          id="full_name"
          autoComplete="off"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          className="p-2 mb-1 rounded-md bg-gray-100 text-gray-800 border-0 focus:bg-gray-200 
          focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Email"
          id="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="number"
          className="p-2 mb-1 rounded-md bg-gray-100 text-gray-800 border-0 focus:bg-gray-200 
          focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Mobile Number"
          id="mobile_number"
          autoComplete="off"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />

        <textarea
          name="message"
          className="p-2 mb-1 rounded-md bg-gray-100 text-gray-800 border-0 focus:bg-gray-200
           focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="address"
          id="Address"
          autoComplete="off"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        ></textarea>

        <div className="flex items-center justify-center">
          <button
            className="w-1/2 mt-2 m-1 p-2 rounded-md bg-indigo-500 hover:bg-indigo-600 transition ease-in-out duration-150"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="w-1/2 mt-2 m-1 p-2 rounded-md bg-red-500 hover:bg-red-600  transition ease-in-out duration-150"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
        <h6
          id="warning"
          className="my-1 text-base text-red-600 text-center"
        ></h6>
      </form>
    </div>
  );
}

export default AddContacts;
