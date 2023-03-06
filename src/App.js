import React from 'react';
import './style.css';
import ReactDatePicker from './components/ReactDatePicker.jsx';
import React_Date_Picker from './components/React_Date_Picker.jsx';
import ReactDates from './components/ReactDates.jsx';
import KendoReactDatePicker from './components/KendoReactDatePicker.jsx';

export default function App() {
  return (
    <div style={{ maxWidth: 500 }}>
      <h1>Datepickers comparison</h1>

      <h2>react-datepicker</h2>
      <ReactDatePicker />

      <h2>react-date-picker</h2>
      <React_Date_Picker />

      <h2>react-dates</h2>

      <ReactDates />
      <h2>KendoReact Datepicker</h2>
      <KendoReactDatePicker />
    </div>
  );
}
