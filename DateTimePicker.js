import React, { PropTypes } from 'react';
import $ from 'jquery';

import './lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min';
import './lib/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';


const getOptionsByType = (type) => {
  // only for datepicker type
  const datePickerOptions = {
    minView: 2, // month view
    format: 'yyyy-mm-dd',
  };

  // only for datetimepicker type
  const dateTimePickerOptions = {
    minView: 0, // hours view
    format: 'yyyy-mm-dd HH:ii P',
  };

  return type === 'datepicker' ? datePickerOptions : dateTimePickerOptions;
};


class DateTimePicker extends React.Component {
  componentDidMount() {
    const { options = {}, type = 'datetimepicker', onDateChanged } = this.props;

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
      this.dateTimePicker.on('changeDate', (event) => {
        onDateChanged(event.date);
      });
    }
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

        <span className="add-on">
          <i className="icon-remove" />
        </span>

        <span className="add-on">
          <i className="icon-calendar" />
        </span>
      </div>
    );
  }
}


DateTimePicker.propTypes = {
  id: PropTypes.string.isRequired,

  type: PropTypes.oneOf(['datepicker', 'datetimepicker']),
  options: PropTypes.object,
  classNames: PropTypes.string,
  onDateChanged: PropTypes.func,
};


export default DateTimePicker;
