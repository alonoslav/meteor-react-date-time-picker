import React, { PropTypes } from 'react';
import $ from 'jquery';

import './lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min';
import './lib/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';


export const DateTimePickerStore = new Map();

DateTimePickerStore.getInstanceById = function getInstanceById(id) {
  return this.has(id) ? this.get(id) : false;
};

const HOUR_VIEW = 0;
const DAY_VIEW = 1;
const MONTH_VIEW = 2;

const typeOptions = {
  datePicker: {
    minView: MONTH_VIEW,
    format: 'yyyy-mm-dd',
  },

  dateTimePicker: {
    minView: HOUR_VIEW,
    format: 'yyyy-mm-dd HH:ii P',
  },

  timePicker: {
    startView: DAY_VIEW,
    maxView: DAY_VIEW,
    format: 'HH:ii P',
  },
};

const getOptionsByType = (type) => (typeOptions.hasOwnProperty(type) ? typeOptions[type] : {});

class DateTimePicker extends React.Component {
  componentDidMount() {
    const { id, options = {}, type = 'datetimepicker', onDateChanged } = this.props;

    const additionalOptions = getOptionsByType(type);

    const defaultOptions = {
      weekStart: 1, // Monday
      autoclose: true,
      todayBtn: true,
      todayHighlight: true,
      showMeridian: true, // display am/pm
    };

    const datepickerOptions = Object.assign(defaultOptions, additionalOptions, options);

    this.dateTimePicker = $(this.refs.datetimepicker).datetimepicker(datepickerOptions);

    if (typeof onDateChanged === 'function') {
      this.dateTimePicker.on('changeDate', ({ date }) => {
        this.dateTimePicker.datetimepicker('setDate', date);

        onDateChanged(date, id);
      });
    }

    if (!DateTimePickerStore.has(id)) {
      DateTimePickerStore.set(id, this.dateTimePicker);
    }

    this.dateTimePicker.datetimepicker('setValue');
  }

  componentWillUnmount() {
    DateTimePickerStore.delete(this.props.id);
    this.dateTimePicker.datetimepicker('remove');
  }

  render() {
    const { id, classNames } = this.props;

    return (
      <div className="input-append date form_datetime">
        <input
          type="text"
          ref="datetimepicker" id={id}
          className={classNames}
        />
      </div>
    );
  }
}


DateTimePicker.propTypes = {
  id: PropTypes.string.isRequired,

  type: PropTypes.oneOf(Object.keys(typeOptions)),
  options: PropTypes.object,
  classNames: PropTypes.string,
  onDateChanged: PropTypes.func,
};


export default DateTimePicker;
