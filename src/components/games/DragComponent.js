import React, { useContext, useEffect, useRef, useReducer } from "react";
import gsap from "gsap";
import { goodAnswer, wrongAnswer } from "../../utils/sounds";
import { GameContext } from "../../context/GameContext";
import {
  reducerDragComponent,
  initialize,
} from "../../reducer/components/games/dragComponentReducer";

const DragComponent = ({
  children,
  divResponse,
  word,
  setStatusWord,
  statusWord,
}) => {
  const containerRef = useRef(null);
  const dragItemRef = useRef(null);
  const { dispatch } = useContext(GameContext);

  const [state, dispatchDrag] = useReducer(reducerDragComponent, initialize());

  useEffect(() => {
    let dragitem = dragItemRef.current;
    let { x, y } = dragitem.getBoundingClientRect();
    if (state.positionInitial) {
      const tl = gsap.timeline();
      console.log(x, y);
      tl.fromTo(
        dragitem,
        { x: state.actualX, y: state.actualY },
        {
          x: 0,
          y: 0,
          duration: 1,
          onComplete: function () {
            dispatchDrag({ type: "INITIAL_POSITION" });
          },
        }
      );
    }
  }, [state]);

  useEffect(() => {
    let container = containerRef.current;
    let dragItem = dragItemRef.current;
    let currentNode;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      dragItem.classList.add("active");
      dragItem.onselectstart = function () {
        return false;
      };
      let initialX, initialY;
      let active;

      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - state.xOffset;
        initialY = e.touches[0].clientY - state.yOffset;
      } else {
        initialX = e.clientX - state.xOffset;
        initialY = e.clientY - state.yOffset;
      }

      active = true;
      currentNode = divResponse.reduce((prev, item) => {
        let { x, y } = item.current.getBoundingClientRect();
        let node = dragItem.getBoundingClientRect();
        if (x === node.x && y === node.y) prev.push(item.current);
        return prev;
      }, []);
      if (currentNode.length > 0) {
        currentNode[0].classList.remove("containerCorrect");
        currentNode[0].classList.remove("containerWrong");
      }
      dispatchDrag({
        type: "START_DRAG",
        data: {
          initialX,
          initialY,
          active,
        },
      });
    }

    function dragEnd(e) {
      dragItem.classList.remove("active");
      dispatchDrag({
        type: "END_DRAG",
        data: {
          initialX: state.currentX,
          initialY: state.currentY,
        },
      });
      let node = divResponse.reduce((prev, item) => {
        if (isInResponse(item.current, dragItem)) prev.push(item.current);
        return prev;
      }, []);
      let snd;
      let item;
      if (node.length > 0) {
        let positionX;
        let positionY;

        let { left, top } = node[0].getBoundingClientRect();
        let { x, y } = container.getBoundingClientRect();

        positionX = left - x;
        positionY = top - y - 13;

        dispatchDrag({
          type: "SET_DRAG_POSITION",
          data: {
            initialY: positionY,
            yOffset: positionY,
            currentY: positionY,
            initialX: positionX,
            xOffset: positionX,
            currentX: positionX,
          },
        });
        setTranslate(positionX, positionY, dragItem);
        let responseWord = node[0].dataset.word;
        if (word.toLowerCase() === responseWord) {
          node[0].classList.add("containerCorrect");
          item = goodAnswer[Math.floor(Math.random() * goodAnswer.length)];
          snd = new Audio(item);
          snd.play();
          if (!state.lockResponse) {
            dispatch({
              type: "ADD_POINTS",
              value: 1,
            });
            dispatchDrag({
              type: "LOCK_RESPONSE",
              data: {},
            });

            let index = node[0].dataset.response;
            setStatusWord({ ...statusWord, [index]: true });
          }
        } else {
          node[0].classList.add("containerWrong");
          item = wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)];
          snd = new Audio(item);
          snd.play();
          if (!state.lockResponse) {
            dispatch({
              type: "ADD_POINTS",
              value: -1,
            });
          }
          setTimeout(() => {
            dispatchDrag({
              type: "WRONG_ANSWER",
              data: {
                actualX: state.currentX,
                actualY: state.currentY,
              },
            });
            node[0].classList.remove("containerWrong");
          }, 2000);
        }
      }
    }

    function drag(e) {
      if (state.active) {
        e.preventDefault();
        let currentX;
        let currentY;
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - state.initialX;
          currentY = e.touches[0].clientY - state.initialY;
        } else {
          currentX = e.clientX - state.initialX;
          currentY = e.clientY - state.initialY;
        }

        setTranslate(currentX, currentY, dragItem);
        dispatchDrag({
          type: "ON_DRAG",
          data: {
            xOffset: currentX,
            yOffset: currentY,
            currentX,
            currentY,
          },
        });
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate(" + xPos + "px, " + yPos + "px)";
    }

    return () => {
      container.removeEventListener("touchstart", dragStart);
      container.removeEventListener("touchend", dragEnd);
      container.removeEventListener("touchmove", drag);

      container.removeEventListener("mousedown", dragStart);
      container.removeEventListener("mouseup", dragEnd);
      container.removeEventListener("mousemove", drag);
    };
  }, [divResponse, word, state, statusWord, setStatusWord]);

  useEffect(() => {
    let dragItem = dragItemRef.current;
    if (statusWord.word1 && statusWord.word2) {
      dispatchDrag({
        type: "RESET_DRAG",
        data: {},
      });
      dragItem.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
      divResponse.forEach((element) => {
        element.current.classList.remove("containerCorrect");
        element.current.classList.remove("containerWrong");
      });
    }
  }, [statusWord, divResponse]);

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
  if (left <= positionResponse.left && right >= positionResponse.left) {
    if (top <= positionResponse.top && bottom >= positionResponse.top) {
      // setear posicion de respuesta
      node = containerResponse;
    } else if (
      top <= positionResponse.bottom &&
      bottom >= positionResponse.bottom
    ) {
      // setear posicion respuesta
      node = containerResponse;
    }
  } else if (
    left <= positionResponse.right &&
    right >= positionResponse.right
  ) {
    if (top <= positionResponse.top && bottom >= positionResponse.top) {
      // setear posicion de respuesta
      node = containerResponse;
    } else if (
      top <= positionResponse.bottom &&
      bottom >= positionResponse.bottom
    ) {
      // setear posicion respuesta
      node = containerResponse;
    }
  }
  return node;
}

export default DragComponent;
