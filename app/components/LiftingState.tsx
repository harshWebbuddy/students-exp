import React, { useState } from "react";
import CardA1 from "./CardA1";
interface Panelprops {
  title: string;
  children: string;
  isActive: boolean;
  onShow: () => void;
}
const Panel: React.FC<Panelprops> = (props) => {
  return (
    <section className="border p-8 w-80">
      <h3>{props.title}</h3>
      {props.isActive ? (
        <p>{props.children}</p>
      ) : (
        <button onClick={props.onShow} className="text-red-500">
          Show
        </button>
      )}
    </section>
  );
};
const LiftingState = () => {
  const [show, setshow] = useState<Number>(0);
  const [name, setname] = useState("");
  return (
    <div>
      <CardA1 name={name} setname={setname} />
      <p>parent {name}</p>
      <div>
        <Panel
          title={"about"}
          children={"gusefsefefefwefwefef"}
          isActive={show === 0}
          onShow={() => {
            setshow(0);
          }}
        />
        <Panel
          title={"Habout"}
          children={"SDASDDgusefsefefefwefwefef"}
          isActive={show === 1}
          onShow={() => {
            setshow(1);
          }}
        />
        <Panel
          title={"HaDADDASbout"}
          children={"SDSDASDSADASASDDgusefsefefefwefwefef"}
          isActive={show === 2}
          onShow={() => {
            setshow(2);
          }}
        />
      </div>
    </div>
  );
};

export default LiftingState;
