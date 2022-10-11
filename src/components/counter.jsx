import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     console.log("Constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        <div className="">
          {/* <div>{this.renderTags()}</div> */}
          <div>
            <div className={this.getBadgeClasses()}>{this.formatValue()}</div>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary m-2"
            >
              <i className="bi bi-arrow-up m-2"></i>
              Increment
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger m-2"
            >
              <i className="bi bi-trash"></i> Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
