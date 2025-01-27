import React from "react";
import BannerV2 from "~/src/components/BannerV2";

/**
 * This moves the lost banner into its own component. The child prop can be passed by putting the value between the tags. This clears up the weird logic of the banners needing different props.
 */
function LostBanner({ answer }) {
  return (
    <BannerV2 status={"sad"}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </BannerV2>
  );
}

export default LostBanner;
