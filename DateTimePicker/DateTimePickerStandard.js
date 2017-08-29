import React from 'react';
// eslint-disable-next-line import/no-unresolved
import $ from 'jquery';

import { DateTimePickerStore } from '../DateTimePickerStore';
import { dateTimePickerPropTypes } from './prop-types';
import { getViewOptionsByType } from './view-types';

import '../lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min';
import '../lib/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';


const defaultDateTimePickerOptions = {
  weekStart: 1, // Monday
  autoclose: true,
  todayBtn: true,
  todayHighlight: true,
  showMeridian: true, // display am/pm
};


export default class DateTimePickerStandard extends React.Component {
  constructor(props) {
    super(props);

    this.saveDateTimePicker = this.saveDateTimePicker.bind(this);
  }

  componentDidMount() {
    const { id, options, type, onDateChanged } = this.props;

    const additionalOptions = getViewOptionsByType(type);

    const datetimePickerOptions = Object.assign(
      defaultDateTimePickerOptions,
      additionalOptions,
      options
    );

    this.dateTimePicker = $(this.dateTimePickerElement).datetimepicker(datetimePickerOptions);

    if (typeof onDateChanged === 'function') {
      this.dateTimePicker.on('changeDate', ({ date }) => {
        this.dateTimePicker.datetimepicker('setDate', date);

        onDateChanged(date, id);
      });
    }

    DateTimePickerStore.save(id, this.dateTimePicker);

    // this.dateTimePicker.datetimepicker('setValue');
  }

  componentWillUnmount() {
    DateTimePickerStore.remove(this.props.id);
    this.dateTimePicker.datetimepicker('remove');
  }

  saveDateTimePicker(element) {
    this.dateTimePickerElement = element;
  }

  render() {
    const { id, classNames, placeholder } = this.props;

    return (
      <div className="input-append date form_datetime">
        <input
          type="text"
          ref={this.saveDateTimePicker} id={id}
          className={classNames}
          placeholder={placeholder || ''}
        />
      </div>
    );
  }
}


DateTimePickerStandard.propTypes = dateTimePickerPropTypes;
