import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
//action
import { getContact, upadteContact } from '../../actions/contactAction';
//import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
//access data from contactDetails
import { useParams } from 'react-router-dom';

const EditContact = () => {

    let { id } = useParams();
    //alert(id);

    let history = useHistory();

    const dispatch = useDispatch();
    const contact = useSelector( (state) => state.contact.contact);
    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("")



    useEffect ( () => {
        if(contact != null) {
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id));
    }, [contact]);

    const getAndUpdateContact = (e) => {
        e.preventDefault();
        const update_contact = Object.assign(contact, {name: name, phone: phone, email:email});
        //console.log(update_contact);

        dispatch(upadteContact(update_contact));
        history.push("/");
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
                <form onSubmit={ (e) => getAndUpdateContact(e)}>
                    <div className="form-group">
                        <input className="form-control"
                               type="text"
                               placeholder="Enter Your Name" 
                               value={name}
                               onChange={ (e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                               type="phone"
                               placeholder="Enter Your Phone Number" 
                               value={phone} 
                               onChange={ (e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                               type="email"
                               placeholder="Enter Your Email Address" 
                               value={email} 
                               onChange={ (e) => setEmail(e.target.value)} />
                    </div>
                    <button className="btn btn-warning" type="submit">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact;



/*
const update_contact = {
            name : name,
            phone: phone,
            email: email,
        };
        console.log(update_contact)
*/