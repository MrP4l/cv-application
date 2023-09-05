import { useState } from 'react'
import './App.css'
import PersonalData from './PersonalData.jsx'
import EducationalExperience from './EducationalExperience.jsx'
import PracticalExperience from './PracticalExperience'

function App() {

  return (
    <>
      <div id='container'>
        <h1>Hi</h1>
        <PersonalData />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    </>
  )
}

export default App
