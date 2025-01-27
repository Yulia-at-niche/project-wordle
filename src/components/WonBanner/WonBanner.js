import React from "react";
import BannerV2 from "../Bannerv2/Bannerv2";

/**
 * This moves the won banner into its own component. The child prop can be passed by putting the value between the tags. This clears up the weird logic of the banners needing different props.
 */
function WonBanner({ numOfGuesses }) {
  return (
    <BannerV2 status={"happy"}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </BannerV2>
  );
}

export default WonBanner;
