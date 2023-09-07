import { useState } from 'react'
import './App.css'
import PersonalData from './PersonalData.jsx'
import Bio from './Bio.jsx'
import EducationalExperience from './EducationalExperience.jsx'
import PracticalExperience from './PracticalExperience.jsx'
import PersonalDataOutput from './PersonalDataOutput.jsx'

function App() {

  return (
    <>
      <div id='container'>
        <h1>Hi</h1>
        <PersonalData />
        <Bio />
        <EducationalExperience />
        <PracticalExperience />
        <PersonalDataOutput />
      </div>
    </>
  )
}

export default App
