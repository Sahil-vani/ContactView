import React, { useState } from "react";

import { FiPlusCircle } from "react-icons/fi";

import AddContacts from "./AddContacts";
import ContactDetails from "./ContactDetails";
import EditContacts from "./EditContacts";
import useContact from "../context/contact";
import ContactId from "./ContactId";

function AllContacts() {
  const { contacts, setContactForm, setContactDetails, setEditForm } =
    useContact();

  const [searchWord, setSearchWord] = useState("");

  return (
    <div className="w-full h-full flex flex-wrap-reverse items-center justify-center ">
      <div className=" w-96 h-auto mx-4 my-2 flex flex-col items-center justify-center rounded-lg bg-zinc-700">
        {/* AllContacts */}
        <button
          className="w-11/12  p-3 my-2 rounded-md flex items-center justify-center bg-blue-400 cursor-pointer text-white transition duration-150 hover:bg-blue-700 text-lg"
          type="button"
          onClick={() => setContactForm(true)}
        >
          All Contacts <FiPlusCircle size={21} className="mx-2" />
        </button>
        {/* search  */}
        <input
          className="w-11/12 p-2 rounded-full  text-lg placeholder-gray-700 focus:text-gray-800
           focus:outline-none"
          placeholder="Search Contacts"
          id="search"
          autoComplete="off"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        {/* contact lists */}
        <div className="w-11/12 h-auto my-3  ">
          <ul>
            {/* contacts id  */}
            {contacts.length == 0 ? (
              <li className="text-lg text-center text-white font-bold">
                No Contacts
              </li>
            ) : (
              contacts.map((item, arrayIndex) => {
                if (
                  item.name.toLowerCase().includes(searchWord.toLowerCase()) &&
                  searchWord != ""
                ) {
                  return (
                    <li key={arrayIndex}>
                      <ContactId
                        setEditForm={setEditForm}
                        setContactDetails={setContactDetails}
                        contact={item}
                        arrayIndex={arrayIndex}
                      />
                    </li>
                  );
                } else if (searchWord == "") {
                  return (
                    <li key={arrayIndex}>
                      <ContactId
                        setEditForm={setEditForm}
                        setContactDetails={setContactDetails}
                        contact={item}
                        arrayIndex={arrayIndex}
                      />
                    </li>
                  );
                }
              })
            )}
          </ul>
        </div>
      </div>
      <AddContacts />
      <EditContacts />
      <ContactDetails />
    </div>
  );
}

export default AllContacts;
