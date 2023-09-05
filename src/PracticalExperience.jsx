import { useState } from 'react'
import './PracticalExperience.css'

function PracticalExperience({ companyName, positionTitle, skillsRequired, fromDate, toDate, handleSubmit }) {
    return (
        <>
            <div>
                <form>
                    <h2>Practical Experience</h2>
                    <label>
                        Company Name
                        <input
                            value={companyName}
                            placeholder='Company Name'
                            type='text'
                            name='company_name'
                            id='companyName'
                            onSubmit={handleSubmit}
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
                            onSubmit={handleSubmit}
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
                            onSubmit={handleSubmit}
                        />
                    </label>
                    <label>
                        From
                        <input
                            value={fromDate}
                            type='date'
                            name='from_date'
                            id='fromDate'
                            onSubmit={handleSubmit}
                        />
                    </label>
                    <label>
                        To
                        <input
                            value={toDate}
                            type='date'
                            name='to_date'
                            id='toDate'
                            onSubmit={handleSubmit}
                        />
                    </label>
                    <button
                        type="submit"
                        name="submit"
                        id="submit"
                        onSubmit={handleSubmit}
                    > Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default PracticalExperience

