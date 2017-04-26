import React from 'react';
import PropTypes from 'prop-types';

import { dateTimePickerPropTypes } from './prop-types';
import { DateTimePickerStore } from '../DateTimePickerStore';
import { DATE_TIME_PICKER_VIEWS_MAP } from './view-types';
import { getFormattedDate, getFormattedTime } from './date-helpers';


const inputTypesMap = {
  [DATE_TIME_PICKER_VIEWS_MAP.TIME]: 'time',
  [DATE_TIME_PICKER_VIEWS_MAP.DATE]: 'date',
  [DATE_TIME_PICKER_VIEWS_MAP.DATE_TIME]: 'datetime-local',
};


const isDatePicker = type => type === DATE_TIME_PICKER_VIEWS_MAP.DATE;
const isTimePicker = type => type === DATE_TIME_PICKER_VIEWS_MAP.TIME;

const formatDate = type => date => {
  if (!date) {
    return '';
  }

  const formattedDate = getFormattedDate(date);
  const formattedTime = getFormattedTime(date);

  if (isDatePicker(type)) {
    return formattedDate;
  }

  if (isTimePicker(type)) {
    return formattedTime;
  }

  return `${formattedDate}T${formattedTime}`;
};


const DateInput = ({ type, date, min, max, onChange }) => (
  <input
    type={type}
    value={date}
    min={min}
    max={max}
    onChange={event => onChange(event.target.value)}
  />
);


DateInput.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


class DateTimePickerIos extends React.Component {
  constructor(props) {
    super(props);

    const { startDate, endDate, initialDate } = props.options;

    this.state = {
      startDate,
      endDate,
      date: initialDate || new Date(),
    };

    this.dateTimePicker = {
      datetimepicker: () => {
      },
    };

    this.onDateChanged = this.onDateChanged.bind(this);
  }

  componentDidMount() {
    // bootstrap datetimepicker stub
    this.dateTimePicker = {
      datetimepicker: (methodName, value = null) => {
        const methodsMap = {
          getDate: () => new Date(this.state.date),
          setDate: date => this.setState({ date }),
          setStartDate: date => this.setState({ startDate: date }),
          setEndDate: date => this.setState({ endDate: date }),
        };

        const method = methodsMap[methodName];

        return method && method(value);
      },
    };

    DateTimePickerStore.save(this.props.id, this.dateTimePicker);
  }

  componentWillUnmount() {
    DateTimePickerStore.remove(this.props.id);
  }

  onDateChanged(date) {
    const { id, onDateChanged } = this.props;

    if (typeof onDateChanged === 'function') {
      this.dateTimePicker.datetimepicker('setDate', date);

      onDateChanged(new Date(date), id);
    }
  }

  render() {
    const { type } = this.props;
    const { date, startDate, endDate } = this.state;

    const formatWithType = formatDate(type);

    return (
      <DateInput
        type={inputTypesMap[type]}
        date={formatWithType(date)}
        min={formatWithType(startDate)}
        max={formatWithType(endDate)}
        onChange={this.onDateChanged}
      />
    );
  }
}


DateTimePickerIos.defaultProps = {
  options: {},
};


DateTimePickerIos.propTypes = dateTimePickerPropTypes;


export default DateTimePickerIos;
