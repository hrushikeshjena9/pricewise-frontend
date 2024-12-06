import React from "react";
import { formatTime } from "../../../utils/TimeHelper";

const WhySelectuUs = ({ data }) => {
  return (
    <>
      <div className="why-selectUs">
        <div className="container">
          <ul>
            <li>
              <i class="fas fa-box"></i> Order Above €{data.order_above} Get
              Free Devlivery
            </li>
            {data.order_time && (
              <li>
                <i class="fas fa-boxes"></i> Ordered before{" "}
                {formatTime(data.order_time)}, delivered tomorrow
              </li>
            )}
            <li>
              <i class="fas fa-people-carry"></i> Tot wel{" "}
              {data.reflection_periodformatTime} dagen bedenktijd{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WhySelectuUs;
