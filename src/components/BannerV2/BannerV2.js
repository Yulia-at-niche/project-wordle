import React from "react";

/**
 * This could actually be reused for any banner that needs to be displayed. This is a better react pattern. Pass content as children instead of props.
 */
function BannerV2({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default BannerV2;
