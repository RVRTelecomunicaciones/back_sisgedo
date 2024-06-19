import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Dependencia } from "./Dependencia";
import { Usuario } from "./Usuario";

@Index("bloqueo_pkey", ["bloqId"], { unique: true })
@Entity("bloqueo", { schema: "public" })
export class Bloqueo {
  @PrimaryGeneratedColumn({ type: "integer", name: "bloq_id" })
  bloqId: number;

  @Column("character varying", {
    name: "bloq_mensaje",
    nullable: true,
    length: 600,
  })
  bloqMensaje: string | null;

  @Column("smallint", { name: "bloq_bloqueo", default: () => "0" })
  bloqBloqueo: number;

  @ManyToOne(() => Dependencia, (dependencia) => dependencia.bloqueos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "depe_id", referencedColumnName: "depeId" }])
  depe: Dependencia;

  @ManyToOne(() => Usuario, (usuario) => usuario.bloqueos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_usu", referencedColumnName: "idUsu" }])
  idUsu: Usuario;

  @ManyToOne(() => Usuario, (usuario) => usuario.bloqueos2, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_usu", referencedColumnName: "idUsu" }])
  idUsu2: Usuario;

  @ManyToOne(() => Dependencia, (dependencia) => dependencia.bloqueos2, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "depe_id", referencedColumnName: "depeId" }])
  depe_2: Dependencia;
}
