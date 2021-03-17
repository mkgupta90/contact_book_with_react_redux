import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
//action
import { addContact } from '../../actions/contactAction';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';

const AddContact = () => {

    let history = useHistory();

    const dispatch = useDispatch()
    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("")

    const createContact = e => {
        e.preventDefault();   
        //console.log(name, phone, email) 
        const new_Contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email :email,
        } 
        dispatch(addContact(new_Contact));
        history.push("/");
        setName('');
        setPhone('');
        setEmail('');   
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
                <form onSubmit={ (e) => createContact(e)}>
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
                    <button className="btn btn-primary" type="submit">Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
