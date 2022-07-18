import React, { useState } from 'react'

const Tooltip = ({ children, tooltip }) => {
    const [entered, setEntered] = useState(false);

    return (
        <>
            <div
                onMouseEnter={() => { setEntered(true) }}
                onMouseLeave={() => { setEntered(false) }}
            >
                {children}
            </div>
            {entered && (
                <div className="__tooltip">
                    {tooltip}
                </div>
            )}
        </>
    )
}

export default Tooltip;