import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import { deleteContact } from '../../actions/contactAction';
import { useDispatch } from 'react-redux'


const ContactsDetails = ({contact}) => {

    const dispatch = useDispatch()

    const { id, name, phone, email} = contact
    return (      
        <tr>
             <td>
                 <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custon-control-input" />
                    <label className="custon-control-label"></label>
                 </div>
              </td>
              <td>
                  <Avatar name={name} size="45" round={true} className="mr-2" />
                  {name}
              </td>
              <td>{phone}</td>
              <td>{email}</td>
              <td className="actions">
                  <Link to={`/contact/edit/${id}`}>
                      <span className="material-icons mr-2 text-primary">edit</span>
                  </Link>

                      <span className="material-icons text-danger" 
                      onClick={ () => dispatch(deleteContact(id))}>
                          remove_circle
                      </span>
                  
              </td>
       </tr>
    )
}

export default ContactsDetails
