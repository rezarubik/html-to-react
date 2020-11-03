import React from "react";
import propTypes from "prop-types";
export default function Section(props) {
  const className = ["section"];
  className.push(props.className);
  if (props.isCenteredContent) className.push("center-content");
  return (
    <section className={className.join(" ")}>
      {/* todo Mengembalikan semua parent yg children kirim */}
      {props.children}
    </section>
  );
}

Section.propTypes = {
  isCenteredContent: propTypes.bool,
  className: propTypes.string,
};
