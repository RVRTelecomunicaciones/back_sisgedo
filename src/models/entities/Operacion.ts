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
import { Archivador } from "./Archivador";

@Index("operacion_pkey", ["depeId", "expeId", "idUsu", "operId"], {
  unique: true,
})
@Index("operacion_idx1", ["depeId"], {})
@Index("operacion_idx4", ["expeId"], {})
@Index("operacion1", ["operDepeidD", "operFecha", "operIdtope"], {})
@Index("operacion_idx3", ["operExpeidAdj"], {})
@Index("operacion_oper_id_key", ["operId"], { unique: true })
@Index("operacion_idx", ["operIdtope"], {})
@Index("operacion_idx2", ["operProcesado"], {})
@Entity("operacion", { schema: "public" })
export class Operacion {
  @PrimaryGeneratedColumn({ type: "integer", name: "oper_id" })
  operId: number;

  @Column("integer", { primary: true, name: "expe_id" })
  expeId: number;

  @Column("integer", { primary: true, name: "depe_id" })
  depeId: number;

  @Column("integer", { primary: true, name: "id_usu" })
  idUsu: number;

  @Column("date", { name: "oper_fecha", default: () => "now()" })
  operFecha: string;

  @Column("time without time zone", {
    name: "oper_hora",
    default: () => "now()",
  })
  operHora: string;

  @Column("numeric", {
    name: "oper_idtope",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  operIdtope: string | null;

  @Column("numeric", {
    name: "oper_forma",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  operForma: string;

  @Column("integer", { name: "oper_depeid_d", nullable: true })
  operDepeidD: number | null;

  @Column("character varying", {
    name: "oper_detalle_destino",
    nullable: true,
    length: 150,
  })
  operDetalleDestino: string | null;

  @Column("character varying", {
    name: "oper_acciones",
    nullable: true,
    length: 400,
  })
  operAcciones: string | null;

  @Column("integer", { name: "oper_idprocesado", nullable: true })
  operIdprocesado: number | null;

  @Column("integer", { name: "oper_expeid_adj", nullable: true })
  operExpeidAdj: number | null;

  @Column("boolean", {
    name: "oper_procesado",
    nullable: true,
    default: () => "false",
  })
  operProcesado: boolean | null;

  @Column("character varying", { name: "tarchi_id", nullable: true, length: 1 })
  tarchiId: string | null;

  @ManyToOne(() => Dependencia, (dependencia) => dependencia.operacions, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "oper_depeid_d", referencedColumnName: "depeId" }])
  operDepeidD2: Dependencia;

  @ManyToOne(() => Usuario, (usuario) => usuario.operacions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_usu", referencedColumnName: "idUsu" }])
  idUsu2: Usuario;

  @ManyToOne(() => Usuario, (usuario) => usuario.operacions2, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "oper_usuaid_d", referencedColumnName: "idUsu" }])
  operUsuaidD: Usuario;

  @ManyToOne(() => Archivador, (archivador) => archivador.operacions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "archi_id", referencedColumnName: "archiId" }])
  archi: Archivador;

  @ManyToOne(() => Dependencia, (dependencia) => dependencia.operacions2, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "depe_id", referencedColumnName: "depeId" }])
  depe: Dependencia;
}
