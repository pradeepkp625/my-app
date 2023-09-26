import { GiHamburgerMenu } from 'react-icons/gi';

const Category = () => {
  let FilterList = [
    'All',
    'Fresh',
    'Buy again',
    "Today's deal",
    'Best Sellers',
    'Home & Kitchen',
    'Amazon miniTv',
    'Sell',
    'Amazon Pay',
    'Gift Cards',
    'Coupons',
    'Gift ideas'
  ];

  return (
    <div className="category-wrapper d-flex-spaceBetween d-flex-row">
      <div className="category-container">
        <ul className="d-flex-row">
          {FilterList.map((item, i) =>
            item !== 'All' ? (
              <li key={i}>{item}</li>
            ) : (
              <div key={item} className="d-flex-row">
                <GiHamburgerMenu />
                <li key={i}>{item}</li>
              </div>
            )
          )}
        </ul>
      </div>
      <div className="new-launches">New Launches from Mobile, Electronics & more</div>
    </div>
  );
};
export default Category;
