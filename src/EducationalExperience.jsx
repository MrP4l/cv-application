import { useState } from 'react'
import './EducationalExperience.css'

function EducationalExperience({ schoolName, fromDate, toDate, handleEdit, handleSubmit }) {
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
                            name='school_name'
                            id='schoolName'
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
                        name="edit"
                        id="edit"
                        onSubmit={handleEdit}
                    > Edit
                    </button>
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

export default EducationalExperience