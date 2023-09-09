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
      form1: { firstName: '', last_name: '', address: '', email: '', phone_number: '', birth_date: '', linkedin: '' },
      form2: { bio_text: '' },
      form3: { school_name: '', from_date: '', to_date: '' },
      form4: { company_name: '', position_title: '', skills_required: '', from_date: '', to_date: '' },
    });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hey that is a submit')
  }

  const handleChange = (e) => {
    // Get the field name
    const name = e.target.name;
    // Get the field value
    const newValue = e.target.value;

    setValue((value) => ({
      ...value,
      form1: {
        ...value.form1,
        [name]: newValue
      }
    }));

    console.log('hey that is a change', name);
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
          <PersonalDataOutput firstName={value.form1.firstName} />
        </div>
      </div>
    </>
  )
}

export default App
