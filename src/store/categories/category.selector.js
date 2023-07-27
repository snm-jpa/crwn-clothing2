import { createSelector } from 'reselect';

// const add = (a, b) => a + b;
// add(3,6);


const selectCategoryReducer = (state) => {
    //console.log('selector 1 fired');
    //console.log(state.categories);
    return state.categories;
}

export const selectCategories = createSelector(
    [selectCategoryReducer],                    //input
    (categoriesSlice) => {
        //console.log('selector 2 fired');
        return categoriesSlice.categories
    }
)

// data transformations happens in the selector
// As long as categories array does not change do not run reduce method
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        //console.log('selector 3 fired');
        return categories.reduce((acc, category) => {
            const { title, items } = category
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
    }
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);