const validation = new JustValidate(
  '#form',
  {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: '#FF6F6F',
      textDecoration: 'underlined',
    },
    // errorLabelCssClass: 'is-label-invalid',
    // focusInvalidField: true,
    // lockForm: true,
    // errorContainer: '.errors-container',
  },
);

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя должно содержать более 2-х символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя должно привышеть более 30 символов',
    },
    {
      rule: 'required',
      errorMessage: 'Как Вас зовут?',
    },
  ])
  .addField('#mail', [
    {
      rule: 'required',
      errorMessage: 'Укажите Вашь Email',
    },
    {
      rule: 'email',
      errorMessage: 'Почта указана не корректно',
    },
  ])
  .addField('#about__textarea', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Вопрос должен содержать более 2-сомволов',
    },
    {
      rule: 'required',
      errorMessage: 'Укажите поле',
    },
  ]);
