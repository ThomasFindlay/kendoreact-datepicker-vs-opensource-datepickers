import React, { useState } from 'react';
import '@progress/kendo-theme-material/dist/all.css';
import { DatePicker as KendoReactDatePicker } from '@progress/kendo-react-dateinputs';

const DatePicker = () => {
  const [date, setDate] = useState(null);
  return (
    <KendoReactDatePicker
      value={date}
      onChange={(event) => {
        setDate(event.value);
      }}
      format="MM-dd-yyyy"
    />
  );
};

export default DatePicker;
