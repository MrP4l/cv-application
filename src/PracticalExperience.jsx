import './PracticalExperience.css'

function PracticalExperience({ formData, handleChange, handleSubmit, handleClick }) {
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Practical Experience</h2>
                    <label>
                        Company Name
                        <input
                            value={formData.form4.company_name ?? ''}
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
                            value={formData.form4.position_title ?? ''}
                            placeholder='Position Title'
                            type='text'
                            name='position_title'
                            id='positionTitle'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        From
                        <input
                            value={formData.form4.from_date ?? ''}
                            type='date'
                            name='from_date'
                            id='fromDate'
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        To
                        <input
                            value={formData.form4.to_date ?? ''}
                            type='date'
                            name='to_date'
                            id='toDate'
                            onChange={handleChange}
                        />
                    </label>
                    <button
                        type="submit"
                        name="edit_form4_button"
                        id="edit"
                        onClick={handleClick}
                        > Edit
                    </button>
                    <button
                        type="submit"
                        name="submit_form4_button"
                        id="submit"
                        onClick={handleClick}
                    > Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default PracticalExperience

