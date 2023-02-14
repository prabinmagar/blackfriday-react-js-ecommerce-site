import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { ProductList, Title } from '../../components/common';
import { useCategoryContext } from '../../context/categoryContext';

const CategoryProductListPage = () => {
  const { categoryKey } = useParams();
  const { getCategoryProducts, categoryProducts, dispatch } = useCategoryContext();

  useEffect(() => {
    getCategoryProducts(dispatch, categoryKey);
    // eslint-disable-next-line
  }, [categoryKey])

  return (
    <main className='bg-secondary'>
      <div className='container'>
        <div className='sc-wrapper py-5'>
          <Title title = {categoryKey} />
          <ProductList products = {categoryProducts} />
        </div>
      </div>
    </main>
  )
}

export default CategoryProductListPage