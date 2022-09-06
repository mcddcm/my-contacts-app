import React from 'react';

const SearchBox = ({ filter }) => {
  return (
    <div className="pb4">
      < input
        className='pa3 b--washed-blue bg-lightest-blue'
        type='search'
        placeholder='Search contacts'
        onChange={filter}
      />
    </div >
  );
}

export default SearchBox;