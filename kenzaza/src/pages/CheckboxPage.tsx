import React from 'react';
import Checkbox from '../components/atoms/checkbox/Checkbox'


function CheckboxPage() {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.nextSibling){
            e.target.checked ? e.target.nextSibling.textContent = "Uncheck me" : e.target.nextSibling.textContent = "Check me";
        }
    }

  return (
    <div>
      <h1>Checkbox Page</h1>
      <Checkbox label="Check me" defaultChecked={false} onChange={(e) => (handleChange(e))} />
      <Checkbox label="Uncheck me" defaultChecked={true} onChange={(e) => (handleChange(e))} />
    </div>
  );
}

export default CheckboxPage;