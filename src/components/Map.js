import React from "react";

function Map() {
  return (
    <>
      <iframe
      title="website-map"
        className="google-map"
        samesite="none"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=1000&amp;height=500&amp;hl=en&amp;q=%20New%20York+(NeuroClinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>{" "}
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=c5d953d79fd2e7c3fc041d4f9fc431c5d8898ba5"
      ></script>
    </>
  );
}

export default Map;
