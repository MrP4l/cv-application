import { useState } from 'react'
import './EducationalExperience.css'

function EducationalExperience({ schoolName, titleOfStudy, dateOfStudy }) {
    return (
        <>
            <div>
                <form>
                    <h2>Educational Experience</h2>
                    <label>
                        School Name
                        <input
                            value={schoolName}
                            placeholder='School Name'
                            type='text'
                            name='schoolName'
                            id='schoolName'
                            onChange={onChange}
                        />
                    </label>
                </form>
            </div>
        </>
    )
}

export default EducationalExperience