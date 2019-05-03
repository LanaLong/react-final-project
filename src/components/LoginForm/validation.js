export const formValidation = values => {
  const errors = {};
  const emptyMessage = "Это обязательное поле";
  if (!values.login) {
    errors.login = emptyMessage;
  }
  if (!values.password) {
    errors.password = emptyMessage;
  }
  return errors;
};
