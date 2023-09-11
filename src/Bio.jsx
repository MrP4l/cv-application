import './Bio.css'

function Bio({ formData, handleChange, handleSubmit, handleClick }) {
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Me</h2>
                    <label>
                        Describe yourself
                        <textarea
                            id='textArea'
                            name='bio_text'
                            type='text'
                            onChange={handleChange}
                            value={formData.form2.bio_text ?? ''}
                        />
                    </label>
                    <button
                        type="submit"
                        name="edit_form2_button"
                        id="editForm1Button"
                        onClick={handleClick}
                    > Edit
                    </button>
                    <button
                        type="submit"
                        name="submit_form2_button"
                        id="submitForm1Button"
                        onClick={handleClick}
                    > Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Bio