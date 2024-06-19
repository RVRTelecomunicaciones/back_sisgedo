import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Expediente } from "./Expediente";

@Index("expediente_main_pkey", ["exmaId"], { unique: true })
@Entity("expediente_main", { schema: "public" })
export class ExpedienteMain {
  @PrimaryGeneratedColumn({ type: "integer", name: "exma_id" })
  exmaId: number;

  @Column("integer", { name: "id_usu" })
  idUsu: number;

  @Column("timestamp with time zone", {
    name: "exma_fecharegistro",
    default: () => "now()",
  })
  exmaFecharegistro: Date;

  @OneToMany(() => Expediente, (expediente) => expediente.exma)
  expedientes: Expediente[];
}
