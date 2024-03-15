import { useState, useEffect } from "react";
import "./App.css";
import AllContacts from "./components/AllContacts";
import { ContactProvider } from "./context/contact";
import data from "../contact data/data.json";
// import UserContextProvider from "./context/UserContextProvider";

function App() {
  const [contactForm, setContactForm] = useState(false);
  const [contactDetails, setContactDetails] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [contacts, setContacts] = useState(data);
  const [index, setIndex] = useState(1);

  return (
    <ContactProvider
      value={{
        index,
        editForm,
        contacts,
        contactForm,
        contactDetails,
        setContactDetails,
        setContactForm,
        setEditForm,
        setContacts,
        setIndex,
      }}
    >
      <div className="mainContainer w-screen h-screen flex items-center justify-center bg-zinc-950 text-white flex-wrap-reverse">
        <AllContacts />
      </div>
    </ContactProvider>
  );
}

export default App;
