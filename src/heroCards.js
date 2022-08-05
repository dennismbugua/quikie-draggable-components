import "./styles.css";
import DragDrop from "./drag";
import Goog from "../GOOGL.png";
import Amzn from "../AMZN.svg";
import Fb from "../FB.png";
import { Draggable, Droppable } from "react-drag-and-drop";
export default function herocard() {
  return (
    <div className="cards" style={{ width: "445px" }}>
      <DragDrop>
        <div id="1" class="order-1 p-2 flex-fill bd-highlight">
          <div class="card">
            <div class="subcard">
              <div style={{ display: "flex" }}>
                <h5 class="card-title" style={{ fontWeight: "bold" }}>
                  GOOGL
                </h5>
                <img src={Goog} alt="Card image cap" />
              </div>
              <div class="card-body">
                <p
                  class="card-text"
                  style={{ fontWeight: "bold", fontSize: "30px" }}
                >
                  1515 USD
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="2" class="order-2 p-2 flex-fill bd-highlight">
          <div class="card">
            <div class="subcard">
              <div style={{ display: "flex" }}>
                <h5 class="card-title" style={{ fontWeight: "bold" }}>
                  FB
                </h5>
                <img src={Fb} alt="Card image cap" />
              </div>
              <div class="card-body">
                <p
                  class="card-text"
                  style={{ fontWeight: "bold", fontSize: "30px" }}
                >
                  266 USD
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="3" class="p-2 flex-fill bd-highlight">
          <div class="card">
            <div class="subcard">
              <div style={{ display: "flex" }}>
                <h5 class="card-title" style={{ fontWeight: "bold" }}>
                  AMZN
                </h5>
                <img src={Amzn} alt="Card image cap" />
              </div>
              <div class="card-body">
                <p
                  class="card-text"
                  style={{ fontWeight: "bold", fontSize: "30px" }}
                >
                  3116 USD
                </p>
              </div>
            </div>
          </div>
        </div>
      </DragDrop>
    </div>
  );
}
