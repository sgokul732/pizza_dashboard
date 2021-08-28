import PizzaCard from "../PizzaCard";
import React, { useEffect, useState } from "react";
import "./style.css";

import { connect } from "react-redux";

import { fetchPizzas } from "../../actions/GetPizzas";
import loadingImg from "../../assets/images/loading.png";
import noData from "../../assets/images/no-data.png";
import SortAndFilterPizzas from "../SortAndFilterPizzas";

const PizzaList = (props) => {
  const { pizzaList, getPizzaList, loading, error } = props;

  useEffect(() => {
    getPizzaList();
  }, []);

  if (loading) {
    return <img className="invalid" src={loadingImg} alt="Loading" />;
  }
  if (error)
    return <img className="invalid" src={noData} alt="No Data Available" />;
  if (pizzaList && pizzaList.length)
    return (
      <>
        <SortAndFilterPizzas size={pizzaList.length} />
        {pizzaList.map((entry) => {
          return (
            <div key={entry.restaurantId}>
              <PizzaCard
                id={entry.restaurantId}
                name={entry.restaurantName}
                img_url={entry.restaurantImage}
                time={entry.displayTime}
                price={entry.displayCostForTwo}
                averageReview={entry.averageReview}
                outlet={entry.outlet}
              />
            </div>
          );
        })}
      </>
    );
  return null;
};
const mapStateToProps = (state) => {
  return {
    pizzaList: state.PizzaListReducer.data,
    loading: state.PizzaListReducer.loading,
    error: state.PizzaListReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPizzaList: () => dispatch(fetchPizzas()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PizzaList);
