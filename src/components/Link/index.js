import React, {PureComponent} from "react";

class Link extends PureComponent {
  render() {
    const {to, children} = this.props;
    return (
      <a href={to} target="_blank" rel="noopener">{children}</a>
    );
  }
}

export default Link;