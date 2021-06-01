import data from './data.json'


const allCategoriesObject = {}
// Get each product
data.forEach(product => {
  // Get the category name
  let category = product.category
  // If category does not yet exist then add it to object
  if (!allCategoriesObject.hasOwnProperty(category)) {
    allCategoriesObject[category] = true
  }
});

// Convert the category object to an array
const allCategories = Object.keys(allCategoriesObject)

export default data;
export { allCategories }