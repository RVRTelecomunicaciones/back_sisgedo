import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TipoPrioridad } from "./TipoPrioridad";
import { Usuario } from "./Usuario";
import { Dependencia } from "./Dependencia";
import { TipoExpediente } from "./TipoExpediente";
import { ExpedienteMain } from "./ExpedienteMain";
import { FormaRecepcion } from "./FormaRecepcion";

@Index(
  "expediente_pkey",
  ["depeId", "expeId", "frecId", "idUsu", "texpId", "tpriId"],
  { unique: true }
)
@Index("expediente_idx5", ["exmaId"], {})
@Index(
  "Ya existe el expediente",
  ["expeFirma", "expeNumeroDoc", "expeProyectado", "expeSiglasDoc", "texpId"],
  { unique: true }
)
@Index("expediente_expe_id_key", ["expeId"], { unique: true })
@Index("expediente_idx3", ["expeNumeroDoc"], {})
@Index("expediente_idx4", ["expeProyectado"], {})
@Index("expediente_idx1", ["expeRelacionado"], {})
@Index("expediente_idx2", ["expeSiglasDoc"], {})
@Index("expediente_idx", ["texpId"], {})
@Entity("expediente", { schema: "public" })
export class Expediente {
  @PrimaryGeneratedColumn({ type: "integer", name: "expe_id" })
  expeId: number;

  @Column("numeric", {
    name: "expe_origen",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  expeOrigen: string | null;

  @Column("numeric", {
    name: "expe_tipo",
    nullable: true,
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  expeTipo: string | null;

  @Column("date", { name: "expe_fecha", default: () => "now()" })
  expeFecha: string;

  @Column("time without time zone", {
    name: "expe_hora",
    default: () => "now()",
  })
  expeHora: string;

  @Column("integer", { primary: true, name: "tpri_id", default: () => "1" })
  tpriId: number;

  @Column("numeric", {
    name: "expe_forma",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  expeForma: string;

  @Column("integer", { primary: true, name: "depe_id" })
  depeId: number;

  @Column("character varying", {
    name: "expe_depe_detalle",
    nullable: true,
    length: 60,
  })
  expeDepeDetalle: string | null;

  @Column("character varying", { name: "expe_firma", length: 60 })
  expeFirma: string;

  @Column("character varying", {
    name: "expe_cargo",
    nullable: true,
    length: 70,
  })
  expeCargo: string | null;

  @Column("integer", { primary: true, name: "texp_id" })
  texpId: number;

  @Column("date", { name: "expe_fecha_doc", default: () => "now()" })
  expeFechaDoc: string;

  @Column("integer", { name: "expe_numero_doc", nullable: true })
  expeNumeroDoc: number | null;

  @Column("character varying", {
    name: "expe_siglas_doc",
    nullable: true,
    length: 65,
  })
  expeSiglasDoc: string | null;

  @Column("character varying", {
    name: "expe_proyectado",
    nullable: true,
    length: 10,
    default: () => "''",
  })
  expeProyectado: string | null;

  @Column("integer", { primary: true, name: "frec_id" })
  frecId: number;

  @Column("integer", { name: "expe_folios", nullable: true })
  expeFolios: number | null;

  @Column("character varying", {
    name: "expe_asunto",
    nullable: true,
    length: 1001,
  })
  expeAsunto: string | null;

  @Column("integer", { name: "expe_relacionado", nullable: true })
  expeRelacionado: number | null;

  @Column("integer", { primary: true, name: "id_usu" })
  idUsu: number;

  @Column("integer", { name: "idusu_depe" })
  idusuDepe: number;

  @Column("character varying", {
    name: "expe_emailorigen",
    nullable: true,
    length: 80,
  })
  expeEmailorigen: string | null;

  @Column("character varying", {
    name: "ar_expearchivo",
    nullable: true,
    length: 120,
  })
  arExpearchivo: string | null;

  @Column("smallint", { name: "expe_estado", default: () => "1" })
  expeEstado: number;

  @Column("numeric", {
    name: "expe_clastupa",
    precision: 1,
    scale: 0,
    default: () => "9",
  })
  expeClastupa: string;

  @Column("numeric", {
    name: "expe_diasatencion",
    precision: 2,
    scale: 0,
    default: () => "0",
  })
  expeDiasatencion: string;

  @Column("character varying", { name: "idtdoc", nullable: true, length: 1 })
  idtdoc: string | null;

  @Column("character varying", {
    name: "expe_numtdoc",
    nullable: true,
    length: 15,
  })
  expeNumtdoc: string | null;

  @Column("integer", { name: "tupa_id", nullable: true })
  tupaId: number | null;

  @Column("integer", { name: "exma_id", nullable: true })
  exmaId: number | null;

  @Column("character varying", {
    name: "expe_domic",
    nullable: true,
    length: 150,
  })
  expeDomic: string | null;

  @Column("character varying", { name: "expe_dni", nullable: true, length: 8 })
  expeDni: string | null;

  @Column("character varying", {
    name: "expe_telef",
    nullable: true,
    length: 15,
  })
  expeTelef: string | null;

  @Column("timestamp with time zone", {
    name: "fecha_registro",
    default: () => "now()",
  })
  fechaRegistro: Date;

  @Column("character varying", { name: "snip", nullable: true, length: 10 })
  snip: string | null;

  @ManyToOne(
    () => TipoPrioridad,
    (tipoPrioridad) => tipoPrioridad.expedientes,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "tpri_id", referencedColumnName: "tpriId" }])
  tpri: TipoPrioridad;

  @ManyToOne(() => Usuario, (usuario) => usuario.expedientes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_usu", referencedColumnName: "idUsu" }])
  idUsu2: Usuario;

  @ManyToOne(() => Dependencia, (dependencia) => dependencia.expedientes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "depe_id", referencedColumnName: "depeId" }])
  depe: Dependencia;

  @ManyToOne(
    () => TipoExpediente,
    (tipoExpediente) => tipoExpediente.expedientes,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "texp_id", referencedColumnName: "texpId" }])
  texp: TipoExpediente;

  @ManyToOne(
    () => ExpedienteMain,
    (expedienteMain) => expedienteMain.expedientes,
    { onDelete: "RESTRICT", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "exma_id", referencedColumnName: "exmaId" }])
  exma: ExpedienteMain;

  @ManyToOne(
    () => FormaRecepcion,
    (formaRecepcion) => formaRecepcion.expedientes,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "frec_id", referencedColumnName: "frecId" }])
  frec: FormaRecepcion;
}
