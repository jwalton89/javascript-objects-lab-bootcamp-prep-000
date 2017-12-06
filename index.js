var recipes = {breakfast: 'oatmeal', lunch: 'chipotle', dinner: 'chinese food'}
var Objects = recipes
var object = recipes
var key = launch
var value = 'cava'
var newObj = Object.assign({}, recipes)

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  let res = Object.assign({}, object)
  delete res[key]
  return res
}

function deleteFromObjectByKey(newObj, key) {
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key]
  return object
}
