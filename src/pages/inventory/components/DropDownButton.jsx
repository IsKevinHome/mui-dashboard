import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const data = [
    {
        value: 1,
        label: "Product 1",
    },
    {
        value: 2,
        label: "Product 2",
    },
    {
        value: 3,
        label: "Product 3",
    },
    {
        value: 4,
        label: "Product 4",
    },
    {
        value: 5,
        label: "Product 5",
    },
];

const DropDown = (props) => {
    const [selectedValue, setSelectedValue] = useState([]);

    const handleChange = (obj) => {
        setSelectedValue(obj);
    };

    const customStyles = {};

    return (
        // the width here is to adapt to the length of the placeholder
        <div style={{ fontSize: "14px", width: `${8 * props.placeholder.length + 60}px` }}>
            <Select
                styles={customStyles}
                onChange={handleChange}
                value={selectedValue}
                options={data}
                placeholder={props.placeholder}
                isSearchable
                // isMulti
            />
            {/* <br />
            <b>Selected Value:</b>
            <pre>{JSON.stringify(selectedValue, null, 2)}</pre> */}
        </div>
    );
};

export default DropDown;

// Dependency: reat-select - npm
