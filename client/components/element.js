import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";

const elementSource = {
  beginDrag(props) {
    return { name: props.name, type: props.type };
  }
};

class DraggableElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      name: props.name,
      type: props.type
    };
  }

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;
    return connectDragSource(<p>{name}</p>);
  }
}

DraggableElement.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "radio", "checkbox"])
};

export const Element = DragSource(
  "element",
  elementSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(DraggableElement);

export class FormElement extends React.Component {
  render() {
    const { name, type } = this.props;
    return (
      <div>
        <label htmlFor={type}>{name}</label>
        <input type={type} />
      </div>
    );
  }
}
