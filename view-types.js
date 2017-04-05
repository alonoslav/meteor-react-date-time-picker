const HOUR_VIEW = 0;
const DAY_VIEW = 1;
const MONTH_VIEW = 2;


const dateTimePickerViewTypes = {
  dateTimePicker: {
    minView: HOUR_VIEW,
    format: 'yyyy-mm-dd HH:ii P',
  },

  datePicker: {
    minView: MONTH_VIEW,
    format: 'yyyy-mm-dd',
  },

  timePicker: {
    startView: DAY_VIEW,
    maxView: DAY_VIEW,
    format: 'HH:ii P',
  },
};


export const getViewOptionsByType = (type) => (dateTimePickerViewTypes[type] || {});

export const dateTimePickerViewTypesList = Object.keys(dateTimePickerViewTypes);
