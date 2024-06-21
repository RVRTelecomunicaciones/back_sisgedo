import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TipoExpediente } from "./TipoExpediente";
import { Dependencia } from "./Dependencia";
import { Usuario } from "./Usuario";

@Index("tipo_expediente_correl_idx1", ["depeId"], {})
@Index("tipo_expediente_correl_pkey", ["depeId", "tecoId", "texpId"], {
  unique: true,
})
@Index("tipo_expediente_correl_idx2", ["idUsu"], {})
@Index("tipo_expediente_correl_teco_id_key", ["tecoId"], { unique: true })
@Index("tipo_expediente_correl_idx3", ["tecoPeriodo"], {})
@Index("tipo_expediente_correl_idx", ["texpId"], {})
@Entity("tipo_expediente_correl", { schema: "public" })
export class TipoExpedienteCorrel {
  @PrimaryGeneratedColumn({ type: "integer", name: "teco_id" })
  tecoId: number;

  @Column("integer", { primary: true, name: "texp_id" })
  texpId: number;

  @Column("integer", { primary: true, name: "depe_id" })
  depeId: number;

  @Column("integer", { name: "id_usu", nullable: true })
  idUsu: number | null;

  @Column("numeric", { name: "teco_periodo", precision: 4, scale: 0 })
  tecoPeriodo: string;

  @Column("integer", { name: "teco_numero" })
  tecoNumero: number;

  @ManyToOne(
    () => TipoExpediente,
    (tipoExpediente) => tipoExpediente.tipoExpedienteCorrels,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "texp_id", referencedColumnName: "texpId" }])
  texp: TipoExpediente;

  @ManyToOne(
    () => Dependencia,
    (dependencia) => dependencia.tipoExpedienteCorrels,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "depe_id", referencedColumnName: "depeId" }])
  depe: Dependencia;

  @ManyToOne(() => Usuario, (usuario) => usuario.tipoExpedienteCorrels, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_usu", referencedColumnName: "idUsu" }])
  idUsu2: Usuario;
}
