import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Dependencia } from "./Dependencia";
import { Operacion } from "./Operacion";
import { Usuario } from "./Usuario";

@Index("archivador_archi_id_key", ["archiId"], { unique: true })
@Index("archivador_pkey", ["archiId", "depeId"], { unique: true })
@Entity("archivador", { schema: "public" })
export class Archivador {
  @PrimaryGeneratedColumn({ type: "integer", name: "archi_id" })
  archiId: number;

  @Column("integer", { primary: true, name: "depe_id" })
  depeId: number;

  @Column("character varying", { name: "archi_nombre", length: 60 })
  archiNombre: string;

  @Column("numeric", {
    name: "archi_periodo",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  archiPeriodo: string | null;

  @Column("integer", { name: "archi_idusua", nullable: true })
  archiIdusua: number | null;

  @ManyToOne(() => Dependencia, (dependencia) => dependencia.archivadors, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "depe_id", referencedColumnName: "depeId" }])
  depe: Dependencia;

  @OneToMany(() => Operacion, (operacion) => operacion.archi)
  operacions: Operacion[];

  @ManyToOne(() => Usuario, (usuario) => usuario.archivadors, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_usu", referencedColumnName: "idUsu" }])
  idUsu: Usuario;
}
