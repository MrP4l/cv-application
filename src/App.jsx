import { useState } from 'react'
import './App.css'
import PersonalData from './PersonalData.jsx'
import Bio from './Bio.jsx'
import EducationalExperience from './EducationalExperience.jsx'
import PracticalExperience from './PracticalExperience.jsx'
import PersonalDataOutput from './PersonalDataOutput.jsx'

function App() {
  const [data, setData] =
    useState({
      form1: { firstName: '', lastName: '', address: '', email: '', phoneNumber: '', birthDate: '', linkedin: '' },
      form2: { bioText: '' },
      form3: { schoolName: '', fromDate: '', toDate: '' },
      form4: { companyName: '', positionTitle: '', skillsRequired: '', fromDate: '', toDate: '' },
    });

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div id='container'>
        <h1>Hi</h1>
        <PersonalData handleSubmit={handleSubmit} handleChange={handleChange} />
        <Bio />
        <EducationalExperience />
        <PracticalExperience />
        <PersonalDataOutput />
      </div>
    </>
  )
}

export default App
