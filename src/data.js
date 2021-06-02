import data from './data.json'

// Get a list of all categories
const allCategories = data.map(obj => obj.category)

// create an object with each category and its count
const categoriesObj = allCategories.reduce((acc, cat) => {
  if (acc[cat] === undefined) {
    acc[cat] = 1
  }
  else {
    acc[cat] += 1
  }

  return acc

}, {})

// Make a list of all unique categories
const uniqueCategories = Object.keys(categoriesObj)
// Get the categories and their counts
const categoriesAndCounts = categoriesObj

// Create an array of category objects with name and count properties
const categoryCountsObject = uniqueCategories.map((name) => {
  return { name: name, count: categoriesAndCounts[name] }
})

export default data;
export { allCategories, uniqueCategories, categoriesAndCounts, categoryCountsObject }