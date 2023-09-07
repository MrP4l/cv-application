import { useState } from 'react'
import './Bio.css'

function Bio({ bioText, handleEdit, handleSubmit }) {
    return (
        <>
            <div>
            <form onSubmit={handleSubmit}>
                    <h2>Me</h2>
                    <label>
                        Describe yourself
                        <textarea
                            value={bioText}
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

export default Bio