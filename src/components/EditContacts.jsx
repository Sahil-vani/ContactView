import React, { useState, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import useContact from "../context/contact";

function EditContacts() {
  const { index, setIndex, setContacts, contacts, editForm, setEditForm } =
    useContact();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const editRef = useRef();

  useEffect(() => {
    let editHandler = (e) => {
      if (!editRef.current.contains(e.target)) {
        setEditForm(false);
      }
    };

    document.addEventListener("mousedown", editHandler);
    return () => {
      document.removeEventListener("mousedown", editHandler);
    };
  }, []);

  const updateForm = (e) => {
    e.preventDefault();

    const updatedItems = [...contacts];
    const prevItems = updatedItems[index - 1];

    const dataObj = {
      id: index,
      name: name == "" ? prevItems.name : name,
      mobile: mobile == "" ? prevItems.mobile : mobile,
      email: email == "" ? prevItems.email : email,
      address: address == "" ? prevItems.address : address,
    };

    updatedItems[index - 1] = dataObj;

    setContacts(updatedItems);
    setIndex(1);
    setAddress("");
    setEmail("");
    setMobile("");
    setName("");
    setEditForm(false);
  };

  const resetForm = (e) => {
    e.preventDefault();

    setAddress("");
    setEmail("");
    setMobile("");
    setName("");
  };

  return (
    <div
      className={
        editForm
          ? "w-full max-w-[300px] mx-4 bg-white rounded-lg shadow-md p-6"
          : "hidden w-full max-w-[300px] mx-4 bg-white rounded-lg shadow-md p-6"
      }
      ref={editRef}
    >
      <h5 className="mb-2 flex items-center justify-between text-xl font-bold text-gray-800  border-b-2 border-gray-500">
        Edit Contact <RxCross2 onClick={() => setEditForm(false)} />
      </h5>

      <form className="flex flex-col">
        <input
          type="text"
          className="p-2 mb-1 rounded-md bg-gray-100 text-gray-800 border-0 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Full Name"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="p-2 mb-1 rounded-md bg-gray-100 text-gray-800 border-0 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Email"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          className="p-2 mb-1 rounded-md bg-gray-100 text-gray-800 border-0 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Mobile Number"
          id="mobile_number"
          autoComplete="off"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <textarea
          name="message"
          className="p-2 mb-1 rounded-md bg-gray-100 text-gray-800 border-0 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="address"
          id="address"
          autoComplete="off"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>

        <div className="flex items-center justify-center">
          <button
            className="w-1/2 mt-2 m-1 p-2 rounded-md bg-indigo-500 hover:bg-indigo-600 transition ease-in-out duration-150"
            onClick={updateForm}
          >
            Update
          </button>
          <button
            className="w-1/2 mt-2 m-1 p-2 rounded-md bg-red-500 hover:bg-red-600  transition ease-in-out duration-150"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditContacts;
