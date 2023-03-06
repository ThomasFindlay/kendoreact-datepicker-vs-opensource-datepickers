import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { useState } from 'react';

const ReactDates = () => {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <DateRangePicker
      startDate={date.startDate}
      startDateId="startDateId"
      endDate={date.endDate}
      endDateId="endDateId"
      onDatesChange={({ startDate, endDate }) =>
        setDate({ startDate, endDate })
      }
      focusedInput={focusedInput}
      onFocusChange={setFocusedInput}
    />
  );
};

export default ReactDates;
