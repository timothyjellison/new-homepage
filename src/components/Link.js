import React from "react";

export default ({
  children,
  to,
}) => (
  <a href={to} target="_blank" rel="noopener">{children}</a>
);
