import React, { useState, useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import useContact from "../context/contact";

function ContactDetails() {
  const { index, contacts, contactDetails, setContactDetails } = useContact();

  const detailsRef = useRef();

  useEffect(() => {
    let detailsHandler = (e) => {
      if (!detailsRef.current.contains(e.target)) {
        setContactDetails(false);
      }
    };

    document.addEventListener("mousedown", detailsHandler);
    return () => {
      document.removeEventListener("mousedown", detailsHandler);
    };
  }, []);

  const details = contacts[index - 1];
  // console.log(details);

  return (
    <div
      className={
        contactDetails
          ? "w-full max-w-[300px] p-6 mx-4 bg-white rounded-lg shadow-md"
          : "hidden w-full max-w-[300px] p-6 mx-4 bg-white rounded-lg shadow-md"
      }
      ref={detailsRef}
    >
      <h5 className="mb-2 flex items-center justify-between text-xl font-bold text-gray-800 border-b-2 border-gray-500">
        Contact Details <RxCross2 onClick={() => setContactDetails(false)} />
      </h5>
      {/* Contact details  */}
      <div
        className="w-full mb-2 mx-1
       flex flex-col items-start justify-center text-gray-800 text-base font-medium"
      >
        {contacts.length == 0 ? (
          <h5 className="mx-1 text-lg text-white font-bold">
            No Contacts Available
          </h5>
        ) : (
          <>
            <h5 className="mb-1">
              Name: <span className="mx-1">{details.name}</span>
            </h5>
            <h5 className="mb-1">
              Email: <span className="mx-1">{details.email}</span>
            </h5>
            <h5 className="mb-1">
              Contact: <span className="mx-1">{details.mobile}</span>
            </h5>
            <h5 className="mb-1">
              Address: <span className="mx-1">{details.address}</span>
            </h5>
          </>
        )}
      </div>
    </div>
  );
}

export default ContactDetails;
