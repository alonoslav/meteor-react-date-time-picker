const HOUR_VIEW = 0;
const DAY_VIEW = 1;
const MONTH_VIEW = 2;


export const DATE_TIME_PICKER_VIEWS_MAP = {
  DATE_TIME: 'dateTimePicker',
  DATE: 'datePicker',
  TIME: 'timePicker',
};


const dateTimePickerViewTypes = {
  [DATE_TIME_PICKER_VIEWS_MAP.DATE_TIME]: {
    minView: HOUR_VIEW,
    format: 'yyyy-mm-dd HH:ii P',
  },

  [DATE_TIME_PICKER_VIEWS_MAP.DATE]: {
    minView: MONTH_VIEW,
    format: 'yyyy-mm-dd',
  },

  [DATE_TIME_PICKER_VIEWS_MAP.TIME]: {
    startView: DAY_VIEW,
    maxView: DAY_VIEW,
    format: 'HH:ii P',
  },
};


export const getViewOptionsByType = (type) => (dateTimePickerViewTypes[type] || {});


export const dateTimePickerViewTypesList = Object.values(DATE_TIME_PICKER_VIEWS_MAP);
