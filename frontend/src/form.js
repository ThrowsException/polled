import React from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";
import { FormElement } from "./element";

const boxTarget = {
  drop(props, monitor) {
    return props.onDrop(monitor.getItem());
  }
};

export class FormPreview extends React.Component {
  render() {
    let items = this.props.items || [];
    let s = items.map(
      x =>
        `
           <label htmlFor=${x.type}>${x.name}</label>
           <input type=${x.type} />
         `
    );
    s = s.join("");
    s = `
    <form>
      ${s}
    </form>`;
    console.log(s);
    return <textarea readOnly value={s} onChange={() => {}} />;
  }
}

class FormArea extends React.Component {
  render() {
    const { canDrop, isOver, connectDropTarget, lastDroppedItem } = this.props;
    const isActive = canDrop && isOver;

    let items = this.props.items || [];
    return connectDropTarget(
      <div>
        {isActive ? "Release to drop" : "Drag a box here"}
        {items.map(x => <FormElement key={x.name} {...x} />)}
      </div>
    );
  }
}

export const Form = DropTarget("element", boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(FormArea);
