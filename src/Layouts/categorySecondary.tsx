import { GiHamburgerMenu } from 'react-icons/gi';
import Dropdown from '../common/shared/dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { ProductGroupTS } from '../pages/Home/product';
import { fetchPosts, setSelectedFilter } from '../redux/actions/product.actions';

let filterType = [
  'Price : Low to high',
  'Price : High to low',
  'Avg. customer review',
  'Newest arrivals'
];

const CategorySecondary = () => {
  let dispatch = useDispatch()
  const onSelectFilter = (value: string) => {
    dispatch(setSelectedFilter(value))
  }
  return (
    <div className="category-wrapper-secondary d-flex-spaceBetween d-flex-row">
      <div>1-48 of over 50,000 results for "ear"</div>
      <Dropdown onSelect={onSelectFilter} filterType={filterType} />
    </div>
  );
};
export default CategorySecondary;
