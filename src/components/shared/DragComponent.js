import React, { useEffect, useRef } from "react";

const DragComponent = ({ children, divResponse, word }) => {
  const containerRef = useRef(null);
  const dragItemRef = useRef(null);
  useEffect(() => {
    var container = containerRef.current;
    var dragItem = dragItemRef.current;

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      dragItem.classList.add("active");
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;
      active = false;

      let node = divResponse.reduce((prev, item) => {
        if (isInResponse(item.current, dragItem)) prev.push(item.current);
        return prev;
      }, []);
      if (node.length > 0) {
        let { left, top } = node[0].getBoundingClientRect();
        let { x, y } = container.getBoundingClientRect();
        let positionX = left - x;
        let positionY = top - y - 13;
        currentY = initialY = yOffset = positionY;
        currentX = initialX = xOffset = positionX;
        setTranslate(positionX, positionY, dragItem);
        console.log(word, node[0].dataset.word);
      }
      dragItem.classList.remove("active");
    }

    function drag(e) {
      if (active) {
        e.preventDefault();

        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, dragItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }

    return () => {
      container.removeEventListener("touchstart", dragStart);
      container.removeEventListener("touchend", dragEnd);
      container.removeEventListener("touchmove", drag);

      container.removeEventListener("mousedown", dragStart);
      container.removeEventListener("mouseup", dragEnd);
      container.removeEventListener("mousemove", drag);
    };
  }, [divResponse, word]);

  return (
    <div ref={containerRef} className="drag-container">
      <div ref={dragItemRef} className="boxWords item">
        {children}
      </div>
    </div>
  );
};

function isInResponse(containerResponse, dragItem) {
  let { top, right, left, bottom } = containerResponse.getBoundingClientRect();
  let positionResponse = dragItem.getBoundingClientRect();
  let node;
  if (left < positionResponse.left && right > positionResponse.left) {
    // console.log(1111);
    if (top < positionResponse.top && bottom > positionResponse.top) {
      // setear posicion de respuesta
      node = containerResponse;
    } else if (
      top < positionResponse.bottom &&
      bottom > positionResponse.bottom
    ) {
      // setear posicion respuesta
      node = containerResponse;
    }
  } else if (left < positionResponse.right && right > positionResponse.right) {
    if (top < positionResponse.top && bottom > positionResponse.top) {
      // setear posicion de respuesta
      node = containerResponse;
    } else if (
      top < positionResponse.bottom &&
      bottom > positionResponse.bottom
    ) {
      // setear posicion respuesta
      node = containerResponse;
    }
  }
  return node;
}

export default DragComponent;
