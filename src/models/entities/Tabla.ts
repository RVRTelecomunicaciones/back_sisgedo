import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tabla", { schema: "public" })
export class Tabla {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column("character varying", { name: "tabl_tipo", nullable: true, length: 6 })
  tablTipo: string | null;

  @Column("character varying", {
    name: "tabl_codigo",
    nullable: true,
    length: 30,
  })
  tablCodigo: string | null;

  @Column("character varying", {
    name: "tabl_descripcion",
    nullable: true,
    length: 100,
  })
  tablDescripcion: string | null;

  @Column("character varying", {
    name: "tabl_abreviado",
    nullable: true,
    length: 80,
  })
  tablAbreviado: string | null;

  @Column("smallint", { name: "tabl_numero", nullable: true })
  tablNumero: number | null;
}
