import React from 'react';
import Select from '../../components/atoms/select/select';

const SelectPage: React.FC = () => {
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    return (
        <div className='page-container'>
            <h1>Select Demo Page</h1>

            <div className='example-block'>
                <div>
                    <h2>Single Select</h2>
                    <Select options={options} label="Choose an option" />

                </div>
                <div>
                    <h2>Multiple Select</h2>
                    <Select options={options} multiple label="Choose multiple options" />
                </div>
            </div>
        </div>
    );
};

export default SelectPage;
