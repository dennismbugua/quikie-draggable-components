import React from "react";
import MoreDetail from "./moreDetail";
import { connect } from "react-redux";

function Usertable(props) {
  console.log(props.item);

  return (
    <tbody>
      <tr>
        <th class="col-sm-3">{props.item.name}</th>
        <td class="col-sm-3">{props.item.symbol}</td>
        <td class="col-sm-3">{/* <MoreDetail item={item} /> */}</td>
      </tr>
    </tbody>
  );
}

export default Usertable;
