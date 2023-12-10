export const Todo = (
  data = { title: '', description: '', dueDate: '', priority: '', status: '' }
) => {
  const TYPE_VALIDATIONS = {
    string: (prop) => typeof prop === 'string',
    // Ths validation is validating that the date is an object, not a date itself
    date: (prop) => typeof prop === 'object',
  };
  const PROP_VALIDATIONS = {
    title: (prop) => {
      const isString = TYPE_VALIDATIONS.string(prop);

      if (!isString)
        throw new Error(
          `the title prop must be a string, currently is a ${typeof prop}`
        );
    },
    description: (prop) => {
      const isString = TYPE_VALIDATIONS.string(prop);
      if (!isString)
        throw new Error(
          `the desc prop must be a string, currently is a ${typeof prop}`
        );
    },
    // convert the local date to the UTC date to then compare dates
    dueDate: (prop) => {
      const regEx = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
      const isString = TYPE_VALIDATIONS.string(prop);

      const date = new Date();
      const day = ('0' + date.getDate()).slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();

      const userDate = prop;
      const currentDate = year + '-' + month + '-' + day;

      if (!isString)
        throw new Error(
          `the dueDate prop must be a string, currently is a ${typeof prop}`
        );
      else {
        const validFormat = prop.match(regEx);
        const wrongDate = userDate < currentDate;

        if (!validFormat)
          throw new Error(
            `The dueDate prop must have a valid format: "yyyy-mm-dd", instead its format is: "${prop}"`
          );

        if (wrongDate)
          throw new Error(
            `current date: "${currentDate}", is gratear than the date you gave: "${userDate}". use a date grater or equal to the current date `
          );
      }
    },
    priority: (prop) => {
      const isString = TYPE_VALIDATIONS.string(prop);

      const checkPrio = () => {
        const AVALIABLE_OPTIONS = ['low', 'medium', 'high'];
        const foundedOption = AVALIABLE_OPTIONS.find(
          (option) => option === prop.toLowerCase()
        );

        if (!foundedOption)
          throw new Error(
            `Available priority options are [low, medium, high]. its current value is "${prop}"`
          );
      };

      if (!isString)
        throw new Error(
          `the priority prop must be a string, currently is a ${typeof prop}`
        );
      else checkPrio();
    },
    status: (prop) => {
      const isString = TYPE_VALIDATIONS.string(prop);

      const checkStatus = () => {
        const AVALIABLE_OPTIONS = ['not started', 'doing', 'done'];
        const foundedOption = AVALIABLE_OPTIONS.find(
          (option) => option === prop.toLowerCase()
        );

        if (!foundedOption)
          throw new Error(
            `Available priority options are [not started, doing, done]. its current value is "${prop}"`
          );
      };

      if (!isString)
        throw new Error(
          `the status prop must be a string, currently is a ${typeof prop}`
        );
      else checkStatus();
    },
  };

  const checkData = () => {
    const { title, description, dueDate, priority, status } = data;

    PROP_VALIDATIONS.title(title);
    PROP_VALIDATIONS.description(description);
    PROP_VALIDATIONS.dueDate(dueDate);
    PROP_VALIDATIONS.priority(priority);
    PROP_VALIDATIONS.status(status);
  };
  const changeProp = (prop, newValue) => {
    const validation = PROP_VALIDATIONS[prop](newValue);
    if (validation instanceof Error) return;
    else data[prop] = newValue;
  };

  const validation = checkData();

  if (validation instanceof Error) return validation;
  else
    return {
      data,
      changeProp,
    };
};

const checkData = () => {
  const { title, desc, priority, status, dueDate } = data;
  if (
    typeof title !== 'string' ||
    typeof desc !== 'string' ||
    typeof priority !== 'string' ||
    typeof status !== 'string'
  ) {
    return new Error(
      'The next props should be string: [title, des, priority, status]. Check one of these searching for the incorrect one.'
    );
  }

  if (typeof dueDate !== 'object')
    return new Error(
      `You must insert valid data type for the dueDate, its actuall value is ${dueDate}`
    );
};
