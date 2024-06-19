import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Expediente } from "./Expediente";

@Index("forma_recepcion_pkey", ["frecId"], { unique: true })
@Entity("forma_recepcion", { schema: "public" })
export class FormaRecepcion {
  @PrimaryGeneratedColumn({ type: "integer", name: "frec_id" })
  frecId: number;

  @Column("character varying", { name: "frec_descripcion", length: 20 })
  frecDescripcion: string;

  @Column("character varying", { name: "frec_abreviado", length: 10 })
  frecAbreviado: string;

  @OneToMany(() => Expediente, (expediente) => expediente.frec)
  expedientes: Expediente[];
}
