var fridges = []

export function getFridges() {
  return fridges
}

export function updateFridges(data) {
  var updatedFridge = false;

  for (var updateIndex = 0; updateIndex < fridges.length; updateIndex++) {
    if (data.key === fridges[updateIndex].key) {
      fridges[updateIndex] = constructFridge(data)
      updatedFridge = true
      console.log('Updating corresponding fridge with key ' + data.key)
      break
    }
  }

  if (!updatedFridge) {
    fridges.push(constructFridge(data))
    console.log('Pushing new fridge with key ' + data.key)
  }
}

function constructFridge(data) {
  var result = {
    key: data.key,
    title: 'notitle',
    description: 'nodescription',
    latitude: 0,
    longitude: 0,
    address: 'noaddress',
    imageurl: ''
  }

  if (data.hasChild('title')) {
    result.title = data.child('title').val()
    console.log(result.title)
  }

  if (data.hasChild('description')) {
    result.description = data.child('description').val()
    console.log(result.description)
  }

  if (data.hasChild('latitude')) {
    result.latitude = data.child('latitude').val()
    console.log(result.latitude)
  }

  if (data.hasChild('longitude')) {
    result.longitude = data.child('longitude').val()
    console.log(result.longitude)
  }

  if (data.hasChild('address')) {
    result.address = data.child('address').val()
    console.log(result.address)
  }

  if (data.hasChild('image-url')) {
    result.imageurl = data.child('image-url').val()
    console.log(result.imageurl)
  }

  return result;
}