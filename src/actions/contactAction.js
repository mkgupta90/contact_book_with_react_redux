import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../constant/types';

//actions
export const addContact = (contact) => ({
    type : CREATE_CONTACT,
    payload: contact,
})


// Get a Contact  (Edit Contact)   //rxa
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
})

// Update Contact
export const upadteContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
})

// delete Contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload :id
})






/*
export const addContact = (contact) => {
    return {
        type : CREATE_CONTACT,
        payload: contact,
    };
};
*/