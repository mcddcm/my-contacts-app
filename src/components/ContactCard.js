import React from 'react';

const ContactCard = ({ id, name, phone, email }) => {
  return (
    <div className='tc bg-lightest-blue dib br3 pa2 ma3 grow bw2 shadow-5 bg-animate hover-bg-washed-yellow'>
      <img alt="my contact" src={`https://robohash.org/${id}?100x100`} />
      <div>
        <h2>{name}</h2>
        <p>T: {phone}</p>
        <p>E: <a href={`mailto:${email}`}>{email}</a></p>
      </div>
    </div>
  );
}

export default ContactCard;