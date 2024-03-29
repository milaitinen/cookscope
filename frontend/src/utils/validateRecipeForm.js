
const validateRecipeForm = (values) => {
  let errors = {}
  // title error
  if (!values.title) {
    errors.title = 'Please give your recipe a name.'
  } else if (values.title && !/^(?=.{1,25}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._ ]+(?<![_.])$/i.test(values.title)) {
    errors.title = 'Please give a shorter name for your recipe'
  }
  // imageFile error
  if (Object.entries(values.imageFile).length === 0 && values.imageFile.constructor === Object) {
    errors.imageFile = 'No image selected for the recipe.'
  }
  // timeToCook errors
  if (values.hours === 0 && values.minutes === 0) {
    errors.timeToCook = 'Please provide an estimation of cooking time.'
  } else if (values.hours < 0 || values.hours > 1000 || !Number.isInteger(values.hours)) {
    errors.timeToCook = 'Invalid hours in cooking time!'
  } else if (values.minutes < 0 || values.minutes > 59 || !Number.isInteger(values.minutes)) {
    errors.timeToCook = 'Invalid minutes in cooking time!'
  }
  // servings errors
  if (values.servings <= 0) {
    errors.servings = 'Please provide the number of servings for your recipe.'
  } else if (values.servings < 0 || values.servings > 100 || !Number.isInteger(values.servings)) {
    errors.servings = 'The number of servings is not valid!'
  }
  // categories error
  if (values.categories === undefined || values.categories.length === 0) {
    errors.categories = 'Please select at least one category for your recipe.'
  }
  // ingregients error
  if (values.ingredients === undefined || values.ingredients.length === 0) {
    errors.ingredients = 'You should provide at least one ingredient!'
  } else if (!values.ingredients.some(i => !/^\s*$/.test(i.ingredient))) {
    errors.ingredients = 'You should provide at least one ingredient!'
  }
  // instructions error
  if (values.instructions === undefined || values.instructions.length === 0) {
    errors.instructions = 'Please provide instructions!'
  } else if (!values.instructions.some(i => !/^\s*$/.test(i.instruction))) {
    errors.instructions = 'Please provide at least one instruction!'
  }
  return errors
}

export default validateRecipeForm