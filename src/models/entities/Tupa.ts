import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tupa_pkey", ["tupaId"], { unique: true })
@Entity("tupa", { schema: "public" })
export class Tupa {
  @PrimaryGeneratedColumn({ type: "integer", name: "tupa_id" })
  tupaId: number;

  @Column("character varying", { name: "tupa_descripcion", length: 200 })
  tupaDescripcion: string;

  @Column("character varying", { name: "tupa_descricorta", length: 100 })
  tupaDescricorta: string;

  @Column("numeric", {
    name: "tupa_periodo",
    precision: 4,
    scale: 0,
    default: () => "0",
  })
  tupaPeriodo: string;
}
