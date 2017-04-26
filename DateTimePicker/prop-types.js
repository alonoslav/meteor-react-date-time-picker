import PropTypes from 'prop-types';

import { dateTimePickerViewTypesList } from './view-types';


export const dateTimePickerPropTypes = {
  id: PropTypes.string.isRequired,

  type: PropTypes.oneOf(dateTimePickerViewTypesList),
  options: PropTypes.object,
  classNames: PropTypes.string,
  onDateChanged: PropTypes.func,
};
