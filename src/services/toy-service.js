import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

const KEY = 'toys_db'
const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]
_createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

function query() {
  return storageService.query(KEY)
}

function getById(toyId) {
  return storageService.get(KEY, toyId)
}

function remove(toyId) {
  return storageService.remove(KEY, toyId)
}

function save(toy) {
  if (toy.id) return storageService.put(KEY, toy)
  return storageService.post(KEY, toy)
}

function getEmptyToy() {
  return {
    name:'',
    price:0,
    labels: [],
    createdAt:Date.now(),
    inStock: true
  }
}

function _createToys() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
      { id: utilService.makeId(), name:'Talking doll', price:55, labels: ['Baby', 'Doll'], createdAt:Date.now(),inStock:true },
      { id: utilService.makeId(), name:'Cop car', price:200, labels: ['On wheels', 'Outdoor'], createdAt:Date.now(), inStock:false },
      { id: utilService.makeId(), name:'LEGO', price:500, labels: ['Box game'], createdAt:Date.now(),inStock:true },
      { id: utilService.makeId(), name:'Basketball', price:30, labels: ['Outdoor'], createdAt:Date.now(),inStock:true },
    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}
