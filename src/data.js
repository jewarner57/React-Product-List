import data from './data.json'


const allCategories = {}
// Get each product
data.forEach(product => {
  // Get the category name
  let category = product.category

  // If category exists increase it's count by 1
  if (allCategories.hasOwnProperty(category)) {
    allCategories[category] += 1
    return
  }
  // If category does not yet exist then add it to object
  allCategories[category] = 0
});


export default data;
export { allCategories }