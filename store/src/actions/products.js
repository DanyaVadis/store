export const filterProducts = (categories, category) => {
    const parentId = categories.filter(item => item.pathName === category)[0].id;
    const categoriesId = categories.filter(item => item.parentId === parentId).map(item => item.id);
    return {
        type: 'FILTER_PRODUCTS',
        payload: categoriesId
    }
}
export const changeSubCategory = (categories, subCategory) => {
    return {
        type: 'CHANGE_SUBCATEGORY',
        payload: categories.filter(item => item.pathName === subCategory)[0]
    }
}
export const changePriceRange = () => {
    return {
        type: 'CHANGE_PRICE_RANGE'
    }
}
export const changeManufacturersFilte = (idManufacturer) => {
    return {
        type: 'CHANGE_MANUFACTURERS',
        payload: idManufacturer
    }
}
export const changePriceFilter = (priceFilter) => {
    return {
        type: 'CHANGE_PRICE_FILTER',
        payload: priceFilter
    }
}
