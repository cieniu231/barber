import { useState } from 'react';
import "./forminput.css"
import {useTheme} from "./ThemeContext";
const FormInput = (props) => {

    const darkTheme = useTheme();

    const themeStyles = {

    }

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const handleFocus = (e) => {
        setFocused(true);
    }


    return (
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput