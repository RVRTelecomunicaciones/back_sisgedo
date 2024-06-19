import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("reporte_pkey", ["repoId"], { unique: true })
@Entity("reporte", { schema: "public" })
export class Reporte {
  @PrimaryGeneratedColumn({ type: "integer", name: "repo_id" })
  repoId: number;

  @Column("character varying", {
    name: "repo_descripcion",
    nullable: true,
    length: 100,
  })
  repoDescripcion: string | null;

  @Column("character varying", {
    name: "repo_archivo",
    nullable: true,
    length: 30,
  })
  repoArchivo: string | null;
}
