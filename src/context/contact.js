import { createContext, useContext } from "react";
import data from "../../contact data/data.json";

export const contactContext = createContext({
  contactForm: false,
  editForm: false,
  contactDetails: false,
  contacts: data,
  index: 1,
});

export const ContactProvider = contactContext.Provider;

export default function useContact() {
  return useContext(contactContext);
}
