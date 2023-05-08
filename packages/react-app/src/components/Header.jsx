import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <PageHeader
      title="Generative NFT"
      subTitle="Everyone is talking about generative AI so why not "
      style={{ cursor: "pointer" }}
    />
  );
}
