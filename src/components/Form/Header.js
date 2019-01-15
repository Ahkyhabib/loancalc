import React, { Component } from "react";
import PageHeader from "react-bootstrap/lib/PageHeader";

class Header extends Component {
  render() {
    return (
      <PageHeader className="header">
        This page header <small>Subtext for header</small>
      </PageHeader>
    );
  }
}
export default Header;
