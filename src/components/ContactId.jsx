import React from "react";

import { RiAccountCircleLine } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

import useContact from "../context/contact";

function ContactId({ arrayIndex, setEditForm, setContactDetails, contact }) {
  const { setContacts, contacts, setIndex } = useContact();

  const deleteId = () => {
    const deletedItems = [...contacts];

    deletedItems.splice(arrayIndex, 1);
    setContacts(deletedItems);
  };

  return (
    <div
      className="w-full my-1 p-2 bg-white rounded-md flex items-center justify-between text-lg
           text-gray-800 font-medium"
    >
      {/* index */}
      <span className="text-base">{contact.id}</span>
      {/* contact name  */}
      <div className=" flex items-center justify-center">
        <RiAccountCircleLine size={35} className="mx-2 " />
        <div className="flex flex-col items-start justify-center text-sm">
          <h5>{contact.name}</h5>
          <h5>{contact.mobile}</h5>
        </div>
      </div>
      {/* contact options */}
      <div className="flex items-start justify-center">
        {/* contact Details icon */}

        <AiFillEye
          size={22}
          className="mx-1 "
          onClick={() => {
            setIndex(contact.id);
            setContactDetails(true);
          }}
        />
        {/* delete icon  */}
        <RiDeleteBin7Fill size={20} className="mx-1 " onClick={deleteId} />
        {/* edit icon  */}
        <MdModeEdit
          size={20}
          className="mx-1 "
          onClick={() => {
            setIndex(contact.id);
            setEditForm(true);
          }}
        />
      </div>
    </div>
  );
}

export default ContactId;
