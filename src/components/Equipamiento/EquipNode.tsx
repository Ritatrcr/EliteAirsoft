import React from "react";

type EquipNodeProps = {
  className?: string;
  img: string;
  title: string;
  desc?: string;
};

const EquipNode: React.FC<EquipNodeProps> = React.memo(({ className = "", img, title, desc }) => {
  return (
    <div className={`equip-node ${className}`} aria-label={title}>
      <img className="equip-node__img" src={img} alt="" loading="lazy" decoding="async" />
      <div className="equip-node__text">
        <p className="equip-node__name">{title}</p>
        {desc ? <p className="equip-node__desc">{desc}</p> : null}
      </div>
    </div>
  );
});

EquipNode.displayName = "EquipNode";
export default EquipNode;
