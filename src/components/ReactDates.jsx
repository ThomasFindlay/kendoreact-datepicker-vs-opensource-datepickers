import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { useState } from 'react';

const ReactDates = () => {
  const [date, setDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <SingleDatePicker
      date={date}
      onDateChange={setDate}
      focused={focusedInput}
      onFocusChange={setFocusedInput}
    />
  );
};

export default ReactDates;
