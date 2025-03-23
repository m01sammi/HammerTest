  import React from "react";
  import chair from "../../../assets/img/chair.png";
  import table from "../../../assets/img/table.png";
  import sofa from "../../../assets/img/sofa.png";
  import roundTable from "../../../assets/img/round-table.png";
  import wall from "../../../assets/img/wall.png";
  import grass from "../../../assets/img/grass.png";
  import styles from "../../../assets/scss/planner.module.scss";

  const objectListData = [
    { id: 1, name: "Стул", image: chair, width: 20, height: 20 },
    { id: 2, name: "Стол", image: table, width: 60, height: 30 },
    { id: 3, name: "Перегородка", image: wall, width: 100, height: 20 },
    { id: 4, name: "Диван", image: sofa, width: 60, height: 30 },
    { id: 5, name: "Круглый стол", image: roundTable, width: 30, height: 30 },
    { id: 6, name: "Декорации", image: grass, width: 20, height: 20 },
  ];

  const ObjectList = ({ onDragStart }) => {
    
    return (
      <div className={styles.object}>
        <h2>Выберите объект</h2>
        <div className={styles.object__list}>
          {objectListData.map((item) => (
            <div className={styles.object__list__item} key={item.id} draggable onDragStart={(e) => onDragStart(e, item)}
            >
              <img src={item.image} alt={item.name} width={item.width} height={item.height} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default ObjectList;
