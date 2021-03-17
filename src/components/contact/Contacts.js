import React from 'react';
import { useSelector } from 'react-redux';
import ContactsDetails from './ContactsDetails';

const Contacts = () => {

    const contacts = useSelector( (state) => state.contact.contacts);
    //console.log(contacts);
    return (
        <div>
          <table className="table shadow">
                <thead>
                    <tr>
                    <th>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custon-control-input" />
                            <label className="custon-control-label"></label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map( contact => (
                        <ContactsDetails contact = {contact} key={contact.id} />
                    ))}
                    
                </tbody>
           </table>
        </div>
    )
}

export default Contacts
