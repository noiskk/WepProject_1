import React, { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import './_style.css';

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <div className='header row'>
      <div className='col col-start'>         {/*display month/year*/}
        <span className='text'>
          <span className='text month'>
            {format(currentMonth, 'M')}월
          </span>
          {format(currentMonth, 'yyyy')}
        </span>
      </div>
      <div className='col col-end'>            {/*arrow icon*/}
        <button onClick={prevMonth}>prevMonth</button>
        <button onClick={nextMonth}>nextMonth</button>
      </div>
    </div>
  );
}

const RenderDays = () => {
  const days = [];
  const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  for(let i = 0; i < 7; i++) {
    days.push(
      <div className='col' key={i}>
        {date[i]}
      </div>,
    )
  }
  
  return <div className='days row'>{days}</div>
}

const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate){
    for(let i = 0; i < 7; i++){
      formattedDate = format(day, 'd');
      const cloneDay = day;
      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : format(currentMonth, 'M') !== format(day, 'M')
              ? 'not-valid'
              : 'valid'
          }`}
          key={day}
          onClick={() => onDateClick(parse(cloneDay))}
        >
          <span
            className={
              format(currentMonth, 'M') !== format(day, 'M')
                ? 'text not-valid'
                : ''
            }
          >
            {formattedDate}
          </span>
        </div>
        
      );
      day = addDays(day, 1);
    } // for
    rows.push(
      <div className='row' key={day}>
        {days}
      </div>
    );
    days = [];
  } // while
  return <div className='body'>{rows}</div>
}




const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  }
  const onDateClick = (day) => {
    setSelectedDate(day);
  }

  return (
    <div className='calendar'>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />
      <RenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </div>
  )
}

export default Calendar;