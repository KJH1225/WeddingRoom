import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Calender.scss'; // 스타일 파일을 불러옵니다.

const DateCalendarFormProps = () => {
  const defaultDate1 = dayjs('2022-04-17');
  const defaultDate2 = dayjs('2022-04-20');

  return (
    <div className="two-calendars-container">
      <div className="calendar-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            defaultValue={defaultDate1}
            views={['year', 'month', 'day']}
          />
        </LocalizationProvider>
      </div>

      <div className="calendar-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            defaultValue={defaultDate2}
            views={['year', 'month', 'day']}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default DateCalendarFormProps;
