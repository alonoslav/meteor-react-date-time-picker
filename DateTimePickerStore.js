export const DateTimePickerStore = new Map();

DateTimePickerStore.getInstanceById = function getInstanceById(id) {
  return this.has(id) ? this.get(id) : false;
};

DateTimePickerStore.save = function save(id, value) {
  if (!DateTimePickerStore.getInstanceById(id)) {
    DateTimePickerStore.set(id, value);
  }
};

DateTimePickerStore.remove = function remove(id) {
  DateTimePickerStore.delete(id);
};

