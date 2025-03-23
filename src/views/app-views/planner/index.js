import React, { useState } from "react";
import Board from "./Board";
import ObjectList from "./ObjectList";
import styles from "../../../assets/scss/planner.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDraggedItem, setObjects, setSelectedObject } from "redux/reducers/planner";

const Planner = () => {
  const dispatch = useDispatch();
  const [objects, setObjects] = useState([]);
  // const [draggedItem, setDraggedItem] = useState(null);
  // const [selectedObject, setSelectedObject] = useState(null);	

  const handleDrop = (item, x, y) => {
    setObjects((prev) => [
      ...prev,
      {
        ...item,
        x,
        y,
        id: prev.length + 1,
        image: item.image,
        name: item.name,
        width: item.width,
        height: item.height,
        rotation: 0,
      },
    ]);
    dispatch(setDraggedItem(null));
  };

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("object", JSON.stringify(item));
    dispatch(setDraggedItem(item)); 
  };

  const handleSave = () => {
    const data = JSON.stringify(objects);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "layout.json";
    a.click();
  };

  const handleLoad = (event) => {
	const file = event.target.files[0];
	if (!file) return;
	const reader = new FileReader();
	reader.onload = (e) => {
	  const loadedObjects = JSON.parse(e.target.result);
	  setObjects(loadedObjects);
	  dispatch(setSelectedObject(null));
	};
	reader.readAsText(file);
  };

  const handleDeleteAll = () => {
    setObjects([]); 
  };

  return (
    <div className={styles.container}>
      <ObjectList onDragStart={handleDragStart} />
      <div className={styles.container__board}>
	    <Board objects={objects} onDrop={handleDrop} setObjects={setObjects} />
        <button className={styles.container__board__save} onClick={handleSave}>Сохранить</button>
        <input className={styles.container__board__file} type="file" onChange={handleLoad} />
		    <button className={styles.container__board__delete} onClick={handleDeleteAll}>
          Удалить все
        </button>
      </div>
    </div>	
  );
};

export default Planner;
