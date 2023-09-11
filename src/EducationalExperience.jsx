import './EducationalExperience.css'

function EducationalExperience({ formData, handleChange, handleSubmit, handleClick }) {
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Educational Experience</h2>
                    <label>
                        School Name
                        <input
                            value={formData.form3.school_name ?? ''}
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
                            value={formData.form3.from_date ?? ''}
                            type='date'
                            name='from_date'
                            id='fromDate'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        To
                        <input
                            value={formData.form3.to_date ?? ''}
                            type='date'
                            name='to_date'
                            id='toDate'
                            onChange={handleChange}
                        />
                    </label>
                    <button
                        type="submit"
                        name="edit_form3_button"
                        id="edit"
                        onClick={handleClick}
                    > Edit
                    </button>
                    <button
                        type="submit"
                        name="submit_form3_button"
                        id="submit"
                        onClick={handleClick}
                    > Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default EducationalExperience