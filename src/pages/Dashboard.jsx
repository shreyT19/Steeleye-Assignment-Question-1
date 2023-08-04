import { useEffect, useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  {
    /* merged both the json files data in one to print the date values in the list  */
  }
  const mergedDataJSONs = mergeData();
  console.log(mergedDataJSONs);
  const [currentListData, setCurrentListData] = useState(mergedDataJSONs);

  const handleClickOrderSelect = (orderId, idx) => {
    const selectedOrder = mergedDataJSONs?.filter((item, index) => {
      return idx === index && item["&id"] === orderId;
    });

    const orderExecutionDetails = selectedOrder[0]?.executionDetails;
    const timeStampDetails = selectedOrder[0]?.timestamps;

    //setting the values of order details and timestamps 
    setSelectedOrderDetails(orderExecutionDetails);
    setSelectedOrderTimeStamps(timeStampDetails);
    
  };

  //search functionality to search the order id
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value.trim().toUpperCase());
  };
  // useEffect to update the list data based on the search results
  useEffect(() => {
    if (searchText === "") {
      setCurrentListData(mergedDataJSONs);
    } else {
      const filteredData = mergedDataJSONs.filter((item) => {
        return item["&id"].includes(searchText);
      });
      setCurrentListData(filteredData);
    }
  }, [searchText]);

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          // updated the title to show the number of orders based on the search results found
          secondaryTitle={`${currentListData.length} orders`}
        />
        <div className={styles.actionBox}>
          <Search value={searchText} onChange={handleSearchInputChange} />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List
          rows={currentListData}
          currency={currency}
          handleClick={handleClickOrderSelect}
        />
        <p><b>Submitted by </b>Shreyansh Tripathy</p>
      <p><b>Registration Number : </b>12014860</p>
      </div>
      
    </div>
  );
};

//function to merge both the json data's
const mergeData = () => {
  const mergedData = mockData?.results?.map((mockItem) => {
    const timeStampItem = timestamps?.results?.find(
      (timeStampItem) => timeStampItem["&id"] === mockItem["&id"]
    );
    return { ...mockItem, ...timeStampItem };
  });
  return mergedData;
};

export default Dashboard;
