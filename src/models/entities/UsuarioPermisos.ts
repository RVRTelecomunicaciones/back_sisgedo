import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./Usuario";

@Index("usuario_permisos_id_permiso_key", ["idPermiso"], { unique: true })
@Index("usuario_permisos_pkey", ["idPermiso", "idUsu"], { unique: true })
@Entity("usuario_permisos", { schema: "public" })
export class UsuarioPermisos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_permiso" })
  idPermiso: number;

  @Column("character", { name: "op", nullable: true, length: 2 })
  op: string | null;

  @Column("character", { name: "tipopermiso", nullable: true, length: 2 })
  tipopermiso: string | null;

  @Column("character varying", { name: "permiso", nullable: true, length: 10 })
  permiso: string | null;

  @Column("date", { name: "fecha", nullable: true })
  fecha: string | null;

  @Column("time without time zone", { name: "hora", nullable: true })
  hora: string | null;

  @Column("integer", { primary: true, name: "id_usu" })
  idUsu: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.usuarioPermisos, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id_usu", referencedColumnName: "idUsu" }])
  idUsu2: Usuario;
}
