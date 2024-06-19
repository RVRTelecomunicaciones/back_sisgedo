import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bloqueo } from "./Bloqueo";
import { Archivador } from "./Archivador";
import { Operacion } from "./Operacion";
import { Usuario } from "./Usuario";
import { Expediente } from "./Expediente";
import { TipoExpedienteCorrel } from "./TipoExpedienteCorrel";

@Index("dependencia_depe_nombre", ["depeDepende", "depeNombre"], {
  unique: true,
})
@Index("dependencia_pkey", ["depeId"], { unique: true })
@Entity("dependencia", { schema: "public" })
export class Dependencia {
  @PrimaryGeneratedColumn({ type: "integer", name: "depe_id" })
  depeId: number;

  @Column("character varying", { name: "depe_nombre", length: 80 })
  depeNombre: string;

  @Column("character varying", {
    name: "depe_abreviado",
    nullable: true,
    length: 30,
  })
  depeAbreviado: string | null;

  @Column("character varying", {
    name: "depe_siglasexp",
    nullable: true,
    length: 40,
  })
  depeSiglasexp: string | null;

  @Column("character varying", {
    name: "depe_representante",
    nullable: true,
    length: 60,
  })
  depeRepresentante: string | null;

  @Column("character varying", {
    name: "depe_cargo",
    nullable: true,
    length: 40,
  })
  depeCargo: string | null;

  @Column("integer", { name: "depe_depende", nullable: true })
  depeDepende: number | null;

  @Column("numeric", { name: "depe_tipo", precision: 1, scale: 0 })
  depeTipo: string;

  @Column("numeric", {
    name: "depe_proyectado",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  depeProyectado: string;

  @Column("character", {
    name: "depe_estado",
    nullable: true,
    length: 1,
    default: () => "1",
  })
  depeEstado: string | null;

  @Column("character varying", {
    name: "depe_observaciones",
    nullable: true,
    length: 100,
  })
  depeObservaciones: string | null;

  @Column("numeric", {
    name: "depe_recibetramite",
    nullable: true,
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  depeRecibetramite: string | null;

  @Column("timestamp without time zone", {
    name: "depe_fecharegistro",
    default: () => "now()",
  })
  depeFecharegistro: Date;

  @Column("numeric", {
    name: "depe_agente",
    nullable: true,
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  depeAgente: string | null;

  @Column("smallint", { name: "depe_maxenproceso", nullable: true })
  depeMaxenproceso: number | null;

  @Column("character varying", {
    name: "usua_login",
    nullable: true,
    length: 20,
  })
  usuaLogin: string | null;

  @Column("character", { name: "usua_password", nullable: true, length: 32 })
  usuaPassword: string | null;

  @Column("smallint", { name: "depe_diasmaxenproceso", nullable: true })
  depeDiasmaxenproceso: number | null;

  @Column("integer", { name: "id_usu_reclamo", nullable: true })
  idUsuReclamo: number | null;

  @ManyToOne(() => Dependencia, (dependencia) => dependencia.dependencias, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "depe_depende", referencedColumnName: "depeId" }])
  depeDepende2: Dependencia;

  @OneToMany(() => Dependencia, (dependencia) => dependencia.depeDepende2)
  dependencias: Dependencia[];

  @OneToMany(() => Bloqueo, (bloqueo) => bloqueo.depe)
  bloqueos: Bloqueo[];

  @OneToMany(() => Archivador, (archivador) => archivador.depe)
  archivadors: Archivador[];

  @OneToMany(() => Operacion, (operacion) => operacion.operDepeidD2)
  operacions: Operacion[];

  @ManyToOne(() => Usuario, (usuario) => usuario.dependencias, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id_usu", referencedColumnName: "idUsu" }])
  idUsu: Usuario;

  @OneToMany(() => Expediente, (expediente) => expediente.depe)
  expedientes: Expediente[];

  @ManyToOne(() => Usuario, (usuario) => usuario.dependencias2, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id_usu_transp", referencedColumnName: "idUsu" }])
  idUsuTransp: Usuario;

  @OneToMany(() => Usuario, (usuario) => usuario.depe)
  usuarios: Usuario[];

  @OneToMany(
    () => TipoExpedienteCorrel,
    (tipoExpedienteCorrel) => tipoExpedienteCorrel.depe
  )
  tipoExpedienteCorrels: TipoExpedienteCorrel[];

  @OneToMany(() => Bloqueo, (bloqueo) => bloqueo.depe_2)
  bloqueos2: Bloqueo[];

  @OneToMany(() => Operacion, (operacion) => operacion.depe)
  operacions2: Operacion[];
}
