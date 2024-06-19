import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Expediente } from "./Expediente";

@Index("tipo_prioridad_pkey", ["tpriId"], { unique: true })
@Entity("tipo_prioridad", { schema: "public" })
export class TipoPrioridad {
  @PrimaryGeneratedColumn({ type: "integer", name: "tpri_id" })
  tpriId: number;

  @Column("character varying", { name: "tpri_descripcion", length: 20 })
  tpriDescripcion: string;

  @Column("character varying", { name: "tpri_abreviado", length: 10 })
  tpriAbreviado: string;

  @OneToMany(() => Expediente, (expediente) => expediente.tpri)
  expedientes: Expediente[];
}
