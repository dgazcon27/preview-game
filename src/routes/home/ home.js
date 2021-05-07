import React, { useEffect, useRef, useState } from "react";
import { useDimesions } from "../../hooks/useDimesion";
import { iconoOpen, iconBack } from "../../utils/imagesResources";
import "../../assets/styles/home.css";

import { useHistory } from "react-router-dom";

const HomeGridComponent = ({ mainTitle, list, mainImage }) => {
  const screen = useDimesions();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  useEffect(() => {
    const slider = document.querySelector(".scroll");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
      console.log(slider);
    });
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    panel.style.display = isOpen ? "block" : "none";
  }, [isOpen]);

  useEffect(() => {
    if (screen.width > 992) setIsOpen(true);
  }, [screen]);

  return (
    <div>
      <div className="letterTitle">
        <div className="rowLetterTitle">
          <img alt={mainTitle} width="40px" height="auto" src={mainImage} />
          <p>{mainTitle}</p>
        </div>
        {screen.width < 992 && (
          <img
            className="iconAccordion"
            alt="iconBack"
            width="40px"
            height="auto"
            src={isOpen ? iconoOpen : iconBack}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      <div className="panel" ref={panelRef}>
        <div className="scroll ">
          <div className="listContainerItem">
            {list.map((it, index) => (
              <div className="row3Cards" key={index}>
                {it.map((item) => (
                  <div
                    className={`cardListGame ${
                      item.especial ? "cardEspecial" : ""
                    }`}
                    key={item.id}
                  >
                    <h2>{item.title}</h2>
                    {item.list.map((elem, index) => (
                      <div className="rowList" key={index}>
                        {elem.map((e) => (
                          <IconItem
                            key={e.id}
                            styles="itemList "
                            title={e.title}
                            img={e.img}
                            link={e.link}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const IconItem = ({ img, title, styles, link }) => {
  const history = useHistory();
  return (
    <div className={styles}>
      <img
        onClick={link ? () => history.push(link) : null}
        alt={title.toLowerCase()}
        width="40px"
        height="auto"
        src={img}
      />
      <p>{title}</p>
    </div>
  );
};

export default HomeGridComponent;
