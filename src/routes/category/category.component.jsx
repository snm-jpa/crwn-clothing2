import { useState, useEffect, useContext, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import './category.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';

const Category = () => {
    const { category } = useParams();
    //const { categoriesMap } = useContext(CategoriesContext);

    //useSelector gets the state from the redux store
    const categoriesMap = useSelector(selectCategoriesMap);     

    const isLoading = useSelector(selectCategoriesIsLoading);

    console.log(isLoading);

    const [products, setProducts] = useState(categoriesMap[category]);

    console.log('render/re-rendering category componenet');

    useEffect(() => {
        console.log('effect fired calling setProduct');
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {
                isLoading ? (
                    <Spinner />
                ): (
            <div className='category-container'>

                {products &&

                    products.map((product) =>
                        <ProductCard key={product.id} product={product} />)
                }
            </div> ) }
        </Fragment>
    )
}

export default Category;