import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("dias_no_laborables_pkey", ["id"], { unique: true })
@Entity("dias_no_laborables", { schema: "public" })
export class DiasNoLaborables {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("date", { name: "fecha" })
  fecha: string;

  @Column("timestamp with time zone", {
    name: "fecha_registro",
    default: () => "now()",
  })
  fechaRegistro: Date;

  @Column("integer", { name: "usuario_id" })
  usuarioId: number;
}
