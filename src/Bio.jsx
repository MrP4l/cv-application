import { useState } from 'react'
import './Bio.css'

function Bio({ bioText, handleChange, handleSubmit }) {
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Me</h2>
                    <label>
                        Describe yourself
                        <textarea
                            id='textArea'
                            value={bioText}
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

export default Bio