import React from 'react';
import ContactCard from './ContactCard';

const CardList = ({ contacts }) => {
  return (
    <>
      {
        contacts.map((contact, i) => {
          return (
            <ContactCard
              key={i}
              id={contacts[i].id}
              name={contacts[i].name}
              phone={contacts[i].phone}
              email={contacts[i].email}
            />
          );
        })
      }
    </>
  );
}

export default CardList;  