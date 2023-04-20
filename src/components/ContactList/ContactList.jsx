import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";
import { Contact } from "components/Contact/Contact";
import { ContactListGroup, ContactCard } from "./ContactsList.styled";

export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts)
    
    return (
        <>
            <ContactListGroup>
                {contacts.map(({ id, name, number }) => (
                    <ContactCard key={id}>
                        <Contact name={name} number={number} id={id} />
                    </ContactCard>
                ))}
            </ContactListGroup>
        </>
    );
};
