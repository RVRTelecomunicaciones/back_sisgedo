import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UsuarioPermisos } from "./UsuarioPermisos";
import { Expediente } from "./Expediente";
import { Dependencia } from "./Dependencia";
import { Bloqueo } from "./Bloqueo";
import { Operacion } from "./Operacion";
import { TipoExpedienteCorrel } from "./TipoExpedienteCorrel";
import { Archivador } from "./Archivador";

@Index("usuario_pkey", ["depeId", "idUsu"], { unique: true })
@Index("usuario_depe_id", ["depeId"], {})
@Index("usuario_id_usu_key", ["idUsu"], { unique: true })
@Index("usuario_idx", ["usuaLogin"], {})
@Index("usuario_verifica", ["usuaLogin", "usuaPassword"], {})
@Index("usuario_ya_existe", ["usuaLogin"], { unique: true })
@Index("usuario_nombres", ["usuaNombres"], {})
@Entity("usuario", { schema: "public" })
export class Usuario {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_usu" })
  idUsu: number;

  @Column("character varying", { name: "usua_nombres", length: 40 })
  usuaNombres: string;

  @Column("character varying", {
    name: "usua_apellidos",
    nullable: true,
    length: 40,
  })
  usuaApellidos: string | null;

  @Column("character varying", {
    name: "usua_iniciales",
    nullable: true,
    length: 8,
  })
  usuaIniciales: string | null;

  @Column("character", { name: "usua_login", length: 20 })
  usuaLogin: string;

  @Column("character", { name: "usua_password", length: 32 })
  usuaPassword: string;

  @Column("character", { name: "usua_estado", length: 1 })
  usuaEstado: string;

  @Column("character varying", { name: "usua_cargo", length: 70 })
  usuaCargo: string;

  @Column("character varying", {
    name: "usua_email",
    nullable: true,
    length: 80,
  })
  usuaEmail: string | null;

  @Column("integer", { primary: true, name: "depe_id" })
  depeId: number;

  @Column("character", { name: "tipo_user", nullable: true, length: 1 })
  tipoUser: string | null;

  @Column("date", { name: "usua_vigencia" })
  usuaVigencia: string;

  @Column("timestamp without time zone", {
    name: "usua_hora_ingreso",
    nullable: true,
  })
  usuaHoraIngreso: Date | null;

  @Column("timestamp without time zone", {
    name: "usua_hora_actual",
    nullable: true,
    default: () => "now()",
  })
  usuaHoraActual: Date | null;

  @Column("character varying", { name: "usua_ip", nullable: true, length: 15 })
  usuaIp: string | null;

  @Column("timestamp without time zone", {
    name: "usua_fecharegistro",
    nullable: true,
    default: () => "now()",
  })
  usuaFecharegistro: Date | null;

  @Column("character varying", {
    name: "usua_observaciones",
    nullable: true,
    length: 100,
  })
  usuaObservaciones: string | null;

  @Column("character", { name: "usua_tipo", nullable: true, length: 1 })
  usuaTipo: string | null;

  @Column("smallint", {
    name: "usua_online",
    nullable: true,
    default: () => "0",
  })
  usuaOnline: number | null;

  @Column("character varying", {
    name: "usua_lastping",
    nullable: true,
    length: 20,
  })
  usuaLastping: string | null;

  @Column("date", { name: "vigenciaanterior", nullable: true })
  vigenciaanterior: string | null;

  @Column("numeric", {
    name: "usua_caseta",
    nullable: true,
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  usuaCaseta: string | null;

  @Column("smallint", { name: "usua_codigoseguridad", default: () => "0" })
  usuaCodigoseguridad: number;

  @Column("character varying", { name: "rol", nullable: true, length: 20 })
  rol: string | null;

  @Column("numeric", {
    name: "esjefe",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  esjefe: string;

  @OneToMany(() => UsuarioPermisos, (usuarioPermisos) => usuarioPermisos.idUsu2)
  usuarioPermisos: UsuarioPermisos[];

  @OneToMany(() => Expediente, (expediente) => expediente.idUsu2)
  expedientes: Expediente[];

  @OneToMany(() => Dependencia, (dependencia) => dependencia.idUsu)
  dependencias: Dependencia[];

  @OneToMany(() => Bloqueo, (bloqueo) => bloqueo.idUsu)
  bloqueos: Bloqueo[];

  @OneToMany(() => Dependencia, (dependencia) => dependencia.idUsuTransp)
  dependencias2: Dependencia[];

  @OneToMany(() => Operacion, (operacion) => operacion.idUsu2)
  operacions: Operacion[];

  @OneToMany(() => Operacion, (operacion) => operacion.operUsuaidD)
  operacions2: Operacion[];

  @ManyToOne(() => Dependencia, (dependencia) => dependencia.usuarios, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "depe_id", referencedColumnName: "depeId" }])
  depe: Dependencia;

  @OneToMany(() => Bloqueo, (bloqueo) => bloqueo.idUsu2)
  bloqueos2: Bloqueo[];

  @OneToMany(
    () => TipoExpedienteCorrel,
    (tipoExpedienteCorrel) => tipoExpedienteCorrel.idUsu2
  )
  tipoExpedienteCorrels: TipoExpedienteCorrel[];

  @OneToMany(() => Archivador, (archivador) => archivador.idUsu)
  archivadors: Archivador[];
}
