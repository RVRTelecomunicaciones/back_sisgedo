import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TipoExpedienteCorrel } from "./TipoExpedienteCorrel";
import { Expediente } from "./Expediente";

@Index("tipo_expediente_pkey", ["texpId"], { unique: true })
@Entity("tipo_expediente", { schema: "public" })
export class TipoExpediente {
  @PrimaryGeneratedColumn({ type: "integer", name: "texp_id" })
  texpId: number;

  @Column("character varying", { name: "texp_descripcion", length: 40 })
  texpDescripcion: string;

  @Column("character varying", { name: "texp_abreviado", length: 20 })
  texpAbreviado: string;

  @Column("numeric", {
    name: "texp_correlativo",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  texpCorrelativo: string;

  @Column("timestamp with time zone", {
    name: "fecha_registro",
    default: () => "now()",
  })
  fechaRegistro: Date;

  @OneToMany(
    () => TipoExpedienteCorrel,
    (tipoExpedienteCorrel) => tipoExpedienteCorrel.texp
  )
  tipoExpedienteCorrels: TipoExpedienteCorrel[];

  @OneToMany(() => Expediente, (expediente) => expediente.texp)
  expedientes: Expediente[];
}
