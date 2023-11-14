import { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
const Time = ({ onChange, value }) => {

    console.log(value);
    return (
        <div>
            <TimePicker amPmAriaLabel='AM/Pm' onChange={onChange} value={value} />

        </div>
    );
}
export default Time;