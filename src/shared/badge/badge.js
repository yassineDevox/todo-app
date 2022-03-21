import { useHelper } from "helpers/helpers";
import React from "react";

export const Badge = ({ content }) => {
  return (
    <span
      className={`badge bg-${useHelper.getColorByStatusTask(content)} me-1`}
    >
      {content} :
    </span>
  );
};