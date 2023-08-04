import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import PropTypes from "prop-types";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";



const List = ({ rows, currency, handleClick }) => {
//  console.log(rows);
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          {/* Country Currency updated according to the dropdown */}
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows?.map((row, index) => {
          {
            /* updated the orderSubmitted date format to normal human readable format  */
          }
          const timeStamp = new Date(row.timestamps.orderSubmitted);
          // const date = timeStamp.toLocaleDateString();
          const date = timeStamp.toLocaleString();

          {
            /* Didn't use the id mentioned in the json file as it was not unique and there was a 
            conflict in the keys. As Key prop is a unique value that differentiates each element from 
            each other */
          }
          // fixed the key props error

          return (
            <ListRow key={index} onClick={() => handleClick(row["&id"], index)}>
              <ListRowCell>{row["&id"]}</ListRowCell>
              <ListRowCell>
                {row.executionDetails?.buySellIndicator}
              </ListRowCell>
              <ListRowCell>{row.executionDetails?.orderStatus}</ListRowCell>
              <ListRowCell>{date}</ListRowCell>
              {/* Updated the order volume values on the type of country currency selected */}
              <ListRowCell>
                {row.bestExecutionData?.orderVolume?.[currency]}
              </ListRowCell>
            </ListRow>
          );

          
        })}
      </tbody>
    </table>
  );
};

List.propTypes = {
  rows: PropTypes.array,
  currency: PropTypes.string,
  handleClick: PropTypes.func,
}

export default List;
