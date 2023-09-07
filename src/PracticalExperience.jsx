import { useState } from 'react'
import './PracticalExperience.css'

function PracticalExperience({ companyName, positionTitle, skillsRequired, fromDate, toDate, handleEdit, handleSubmit }) {
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
                        />
                    </label>
                    <label>
                        From
                        <input
                            value={fromDate}
                            type='date'
                            name='from_date'
                            id='fromDate'
                        />
                    </label>
                    <label>
                        To
                        <input
                            value={toDate}
                            type='date'
                            name='to_date'
                            id='toDate'
                        />
                    </label>
                    <button
                        type="submit"
                        name="edit"
                        id="edit"
                        onSubmit={handleEdit}
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

