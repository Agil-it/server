import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { MachineType } from "./MachineType";
import { CrudClass } from "./CrudClass";

@Entity("machine_component")
export class MachineComponent extends CrudClass {

  @ManyToOne(
    (type) => MachineType,
    (machineType) => machineType.id,
    { nullable: false },
  )
  @JoinColumn()
  public machineType: MachineType;

  constructor() {
    super();
  }

}