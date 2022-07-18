/*** Example of useState to render an avatar or not to handle a possible broken image ***/
import React, { useState } from 'react'

const Avatar = ({ src, username }) => {
    const [error, setError] = useState(false)
    const onError = () => { setError(true) }
    return (
        <>
            {error ? (
                <div>{username}</div>
            ) : (
                <img
                    src={src}
                    alt={username}
                    onError={onError}
                />
            )}
        </>
    )
}

export default Avatar;