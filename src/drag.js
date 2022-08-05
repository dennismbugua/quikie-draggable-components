import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class DragDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.children
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({ items });
  }

  render() {
    return (
      <>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable" direction={this.props.direction}>
            {provided => (
              <div
                className="Draggable_Wrap"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.state.items.map((item, index) => (
                  <Draggable
                    key={item.props.id}
                    draggableId={item.props.id}
                    index={index}
                  >
                    {provided => (
                      <div
                        className="Draggable_Item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </>
    );
  }
}

export default DragDrop;
