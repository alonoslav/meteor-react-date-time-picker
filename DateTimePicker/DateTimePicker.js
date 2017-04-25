/* global window */
import React from 'react';

import DateTimePickerStandard from './DateTimePickerStandard';
import DateTimePickerIos from './DateTimePickerIos';

import { DATE_TIME_PICKER_VIEWS_MAP } from './view-types';
import { dateTimePickerPropTypes } from './prop-types';


const isIosDevice = () => {
  const { userAgent } = window.navigator;

  const iosUserAgentParts = ['iPhone', 'iPad'];

  return iosUserAgentParts.some(part => userAgent.indexOf(part) > -1);
};


const defaultDatePickerProps = { options: {}, type: DATE_TIME_PICKER_VIEWS_MAP.DATE_TIME };


const DateTimePicker = (props) => {
  const datePickerProps = { ...defaultDatePickerProps, ...props };

  if (isIosDevice()) {
    return <DateTimePickerIos {...datePickerProps} />;
  }

  return <DateTimePickerStandard {...datePickerProps} />;
};


DateTimePicker.propTypes = dateTimePickerPropTypes;


export default DateTimePicker;
