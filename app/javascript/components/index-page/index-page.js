import React from "react";
import { Link } from "react-router-dom";

import ContainerBlock from "components/container-block/container-block";

import "./index-page.scss";

const IndexPage = ({
  title,
  shadowTitleLeft,
  shadowTitleRight,
  body,
  linkList,
  children
}) => {
  const links = linkList.map(link => (
    <div className="link-option" key={link.url}>
      <p>
        <Link to={link.url}>{link.name}</Link> - {link.description}
      </p>
    </div>
  ));

  return (
    <div className="index-page">
      <h1>
        <span className="shadow-title">{shadowTitleLeft}・</span>
        {title}
        <span className="shadow-title">・{shadowTitleRight}</span>
      </h1>
      <ContainerBlock>
        <p>{body}</p>
        {children}
        <hr />
        {links}
      </ContainerBlock>
    </div>
  );
};

export default IndexPage;
