import React, { useState } from "react";
import styles from "../../../assets/scss/planner.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedObject } from "redux/reducers/planner";

const Board = ({ onDrop, objects, setObjects }) => {
  const [showGrid, setShowGrid] = useState(true);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [draggedItemSize, setDraggedItemSize] = useState({ width: 0, height: 0 });
  const [dragging, setDragging] = useState(false); 
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [visibleButtons, setVisibleButtons] = useState(false);
  const dispatch = useDispatch();
  const selectedObject = useSelector((state) => state.planner.selectedObject);
  const draggedItem = useSelector((state) => state.planner.draggedItem);

  const gridSize = 10;
  const snapToGrid = (value) => Math.round(value / gridSize) * gridSize;

  const handleDragOver = (e) => {
    e.preventDefault();
    if (draggedItem) {
      const { offsetX, offsetY } = e.nativeEvent;

      const newX = snapToGrid(offsetX);
      const newY = snapToGrid(offsetY);

      setPreviewPosition({ x: newX, y: newY });
      setDraggedItemSize({ width: draggedItem.width, height: draggedItem.height });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("object"));
    const { offsetX, offsetY } = e.nativeEvent;

    const finalX = snapToGrid(offsetX);
    const finalY = snapToGrid(offsetY);

    onDrop(item, finalX, finalY);
  };

  const handleSelect = (e, object) => {
    e.stopPropagation();
    if (selectedObject === object.id) {
      dispatch(setSelectedObject(null)); 
      setVisibleButtons(false);
    } else {
        dispatch(setSelectedObject(object.id)); 
        setVisibleButtons(true); 
    }
  };

  const handleMouseDown = (e, object) => {
    e.preventDefault();
    e.stopPropagation();

    if (selectedObject === object.id) {
      setDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e) => {
    if (dragging && selectedObject !== null) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      setObjects((prev) =>
        prev.map((obj) =>
          obj.id === selectedObject
            ? { ...obj, x: obj.x + deltaX, y: obj.y + deltaY }
            : obj
        )
      );

      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    if (dragging) {
      setDragging(false);
      setVisibleButtons(false);
    }
  };

  const handleRotate = () => {
    if (selectedObject !== null) {
      setObjects((prev) =>
        prev.map((obj) =>
          obj.id === selectedObject
            ? { ...obj, rotation: (obj.rotation + 90) % 360 }
            : obj
        )
      );
    }
  };
  
  const handleDelete = () => {
    if (selectedObject !== null) {
      setObjects((prev) => prev.filter((obj) => obj.id !== selectedObject));
      dispatch(setSelectedObject(null)); 
      setVisibleButtons(false);
    }
  };

  return (
   <div className={styles.board}>
    <div className={styles.board__buttons}>
    <button className={styles.board__buttons__net} onClick={() => setShowGrid(!showGrid)}>
      {showGrid ? "Скрыть сетку" : "Показать сетку"}
    </button>

    {visibleButtons && ( 
   <>
     <button className={styles.board__buttons__turn} onClick={handleRotate}>
      Повернуть
    </button>

    <button className={styles.board__buttons__delete} onClick={handleDelete}>
      Удалить элемент
    </button>
   </>
    )}
  </div>
    <div className={styles.board__container} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
     <h3>Карта заведения</h3>
      <div className={styles.board__container__table} onDragOver={handleDragOver} onDrop={handleDrop}
        style={{ boxShadow:" 0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
            backgroundImage: showGrid
              ? `linear-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 0, 0, 0.2) 1px, transparent 1px)`
              : "none",
            backgroundSize: `${gridSize}px ${gridSize}px`,
        }}>
        {draggedItem && (
          <div
            style={{
              position: "absolute",
              top: previewPosition.y,
              left: previewPosition.x,
              width: `${draggedItemSize.width}px`,
              height: `${draggedItemSize.height}px`,
              border: "2px dashed red",
              pointerEvents: "none",
            }}
          />
        )}
  
        {objects.map((object) => (
          <div
            key={object.id}
            onClick={(e) => handleSelect(e, object)}
            onMouseDown={(e) => handleMouseDown(e, object)} 
            style={{
              position: "absolute",
              top: object.y,
              left: object.x,
              transform: `rotate(${object.rotation}deg)`,
              cursor: "move",
              border: selectedObject === object.id ? "2px solid blue" : "none", 
            }}
          >
            <img
              src={object.image}
              alt={object.name}
              width={object.width}
              height={object.height}
            />
          </div>
        ))}
      </div>
    </div>
   </div>
  );
  
};

export default Board;
