import React from 'react';

const Person =  (prop) => {
    return (
    <div>
      {prop.num + ' ' + prop.name+' is a '+prop.nature + ' animal'}
      <br></br>
      <br></br>
    
    </div>
    );
}

export default Person;