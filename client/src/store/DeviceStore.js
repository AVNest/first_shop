import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {"id": 1, "name": "Холодильники",},
            {"id": 2, "name": "Смартфоны",},
            {"id": 3, "name": "Ноутбуки",},
            {"id": 4, "name": "Телевизоры",},

        ]
        this._brands = [
            {"id": 1, "name": "samsung",},
            {"id": 2, "name": "apple",},
            {"id": 3, "name": "lenovo",},
            {"id": 4, "name": "asus",}
        ]
        this._devices = [
            {"id": 1, "name": "14 pro", "price": 100000, "rating": 4, "img": "8c53e0ee-5f8e-4e56-8f0f-fd78318628ce.jpg",},
            {"id": 2, "name": "14", "price": 80000, "rating": 5, "img": "00073f09-0836-435a-9369-ef3918ebc6b6.jpg",},
            {"id": 3, "name": "13", "price": 60000, "rating": 4, "img": "e85ea04e-d18f-4351-8649-c254b4261063.jpg",},
            {"id": 4, "name": "13 pro", "price": 80000, "rating": 4, "img": "3f7b3692-edd4-45a7-ba02-54add172fd7e.jpg",},
            {"id": 5, "name": "galaxy s23", "price": 70000, "rating": 5, "img": "7b73eccb-adb7-46ab-9783-51a73abc1bff.jpg",}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}