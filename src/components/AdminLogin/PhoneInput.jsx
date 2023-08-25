import React from 'react';
import { useField } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the default styles

const PhoneInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <div className="mb-4">
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className='py-2 mb-4'>
      <PhoneInput
        inputStyle={{width:'274px' , height:'45px' , borderColor:'#eaebef'}}
        buttonStyle={{}}
        dropdownStyle={{}}
        searchStyle={{}}
        {...field}
        {...props}
        country={'in'}
        onChange={(value) =>{ helpers.setValue(`+${value}`) , console.log(value)}}
        onBlur={() => helpers.setTouched(true)}
        value={field.value || ''}
      /></div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default PhoneInputField;
