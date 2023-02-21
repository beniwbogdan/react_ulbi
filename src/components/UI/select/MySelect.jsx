import React from 'react'

function MySelect({ options, defaultOption, value, onChange }) {

    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option disabled hidden value="">{defaultOption}</option>
            {options.map(option => {
                return <option
                    key={option.value}
                    value={option.value}>
                    {option.name}
                </option>
            }

            )}


        </select>
    )
}

export default MySelect