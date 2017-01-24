# meteor-react-date-time-picker

This MeteorJS package provide React DateTimePicker component for your applications.

More about bootstrap datetimepicker used for this package you can read [here](https://github.com/smalot/bootstrap-datetimepicker).

### Peer dependencies
* react
* react-dom

### Example

```jsx harmony

const onDateChanged = (date) => console.log('DATE', date);

 <DateTimePicker
    id="test-datetimepicker"
    classNames="form-control"
    onDateChanged={onDateChanged}
    type="datepicker"
/>
```

### Props

| Name |Description|
| ---- | --------- |
| id (required) | ID of datetimepicker input field |
| classNames | classes for input field |
| options | Datetimepicker options |
| type | Possible values: *datepicker, datetimepicker* |
| onDateChanged | Callback for handling date changing |
