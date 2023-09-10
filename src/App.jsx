import { useState } from 'react'
import './App.css'
import PersonalData from './PersonalData.jsx'
import Bio from './Bio.jsx'
import EducationalExperience from './EducationalExperience.jsx'
import PracticalExperience from './PracticalExperience.jsx'
import PersonalDataOutput from './PersonalDataOutput.jsx'

function App() {
  const [value, setValue] =
    useState({
      form1: { first_name: '', last_name: '', address: '', email: '', phone_number: '', birth_date: '', linkedin: '' },
      form2: { bio_text: '' },
      form3: { school_name: '', from_date: '', to_date: '' },
      form4: { company_name: '', position_title: '', skills_required: '', from_date: '', to_date: '' },
    });

  const handleSubmit = (e) => {
    e.preventDefault()
    // Bug #1 buttonName is empty
    const buttonName = e.target.name;

    console.log('hey that is a submit', buttonName)
    // Bug #2 this reset the output div not the input field
    if (buttonName === "submit_button") {
      setValue((value) => ({
          ...value,
          form1: {
            first_name: '', 
            last_name: '', 
            address: '',
            email: '',
            phone_number: '',
            birth_date: '',
            linkedin: ''
          }
      }));
    } else if (buttonName === "edit_button") {

    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const newValue = e.target.value;

    setValue((value) => ({
      ...value,
      form1: {
        ...value.form1,
        [name]: newValue
      }
    }));
  };

  return (
    <>
      <div id='container'>
        <div id='inputContainer'>
          <PersonalData handleSubmit={handleSubmit} handleChange={handleChange} />
          <Bio />
          <EducationalExperience />
          <PracticalExperience />
        </div>
        <div id='outputContainer'>
          <PersonalDataOutput firstName={value.form1.first_name} lastName={value.form1.last_name} address={value.form1.address} email={value.form1.email} phoneNumber={value.form1.phone_number} birthDate={value.form1.birth_date} linkedin={value.form1.linkedin} />
        </div>
      </div>
    </>
  )
}

export default App
