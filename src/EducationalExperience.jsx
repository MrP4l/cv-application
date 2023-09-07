import { useState } from 'react'
import './EducationalExperience.css'

function EducationalExperience({ schoolName, fromDate, toDate, handleChange, handleSubmit }) {
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Educational Experience</h2>
                    <label>
                        School Name
                        <input
                            value={schoolName}
                            placeholder='School Name'
                            type='text'
                            name='school_name'
                            id='schoolName'
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
                        onChange={handleChange}
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

export default EducationalExperience