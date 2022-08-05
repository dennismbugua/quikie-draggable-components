import "./styles.css";
import React from "react";
import { connect } from "react-redux";
import { fetchingItems } from "./action";
import ItemTable from "./itemTable";
import axios from "axios";
import Header from "./header";
import HeroCard from "./heroCards";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "84b2c51e-1b33-443d-8470-a7ca9cc22d82",

      data: [
        {
          name: "141 Capital INC",
          symbol: "ONCP",
          marketCap: "$145.4k",
          currencyPrice: "$0.001 USD"
        },
        {
          name: "142 Capital INC",
          " symbol": "ONCP",
          marketCap: "$145.4k",
          currencyPrice: "$0.001 USD"
        }
      ],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    request(
      "GET",
      "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=" +
        this.state.key
    )
      .then((r1) => {
        var x1 = JSON.parse(r1.target.responseText);
        console.log(x1.data.quote.USD.total_market_cap);
      })
      .catch((err) => {
        console.log(err);
      });

    function request(method, url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
      });
    }
  }

  myFunction = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };
  render() {
    return (
      <div className="App">
        <Header />
        <HeroCard />
        {/* <button onClick={this.props.fetchItem}>Click for Items</button> */}
        {this.props.isLoading ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="container">
            <table class="table table-bordered">
              <div style={{ display: "flex" }}>
                <h3>Stock Details Table</h3>
                <input
                  type="text"
                  id="myInput"
                  onkeyup={this.myFunction}
                  placeholder="Search by company Name.."
                  title="Type in a name"
                />
              </div>
              <table class="table table-bordered">
                <thead class="thead-light">
                  <tr>
                    <th class="col-sm-2">Company Name</th>
                    <th class="col-sm-2">Symbol</th>
                    <th class="col-sm-2">MarketCap</th>
                    <th class="col-sm-2"></th>
                    <th class="col-sm-2">Current Price</th>
                  </tr>
                </thead>

                {this.state.data.map((item, index) => {
                  console.log("---", item);
                  return <ItemTable key={index} item={item} />;
                })}
              </table>
            </table>
          </div>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: () => dispatch(fetchingItems())
  };
};
const mapStateToProps = (state) => ({
  Items: state.items,
  isLoading: state.isLoading
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
