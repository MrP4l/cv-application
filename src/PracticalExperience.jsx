import { useState } from 'react'
import './PracticalExperience.css'

function PracticalExperience({ companyName, positionTitle, skillsRequired, fromDate, toDate, handleChange, handleSubmit }) {
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Practical Experience</h2>
                    <label>
                        Company Name
                        <input
                            value={companyName}
                            placeholder='Company Name'
                            type='text'
                            name='company_name'
                            id='companyName'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Position Title
                        <input
                            value={positionTitle}
                            placeholder='Position Title'
                            type='text'
                            name='position_title'
                            id='positionTitle'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Skills Required
                        <input
                            value={skillsRequired}
                            placeholder='Skills Required'
                            type='text'
                            name='skills_required'
                            id='skillsRequired'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        From
                        <input
                            value={fromDate}
                            type='date'
                            name='from_date'
                            id='fromDate'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        To
                        <input
                            value={toDate}
                            type='date'
                            name='to_date'
                            id='toDate'
                            onChange={handleChange}
                        />
                    </label>
                    <button
                        type="submit"
                        name="edit"
                        id="edit"
                    > Edit
                    </button>
                    <button
                        type="submit"
                        name="submit"
                        id="submit"
                    > Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default PracticalExperience

