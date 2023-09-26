import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const Rating = ({ rating }) => {
  let ratfilled = Math.round(rating);
  let arrayValue = Array.from({ length: 5 }, (_, index) => index);
  return (
    <div className="d-flex">
      <h5 className="product-rate ">
        <div>{rating}</div>
      </h5>
      <div className="rating-star">
        {arrayValue.map((_, i) => {
          if (ratfilled <= i) {
            return (
              <IconContext.Provider key={i} value={{ color: '#E67A00' }}>
                <AiOutlineStar />
              </IconContext.Provider>
            );
          } else {
            return (
              <IconContext.Provider key={i} value={{ color: '#E67A00' }}>
                <AiFillStar />
              </IconContext.Provider>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Rating;
