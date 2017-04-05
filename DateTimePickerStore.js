export const DateTimePickerStore = new Map();

DateTimePickerStore.getInstanceById = function getInstanceById(id) {
  return this.has(id) ? this.get(id) : false;
};

DateTimePickerStore.save = function (id, value) {
  if (!DateTimePickerStore.getInstanceById(id)) {
    DateTimePickerStore.set(id, value);
  }
};

DateTimePickerStore.remove = function (id) {
  DateTimePickerStore.delete(id);
};

