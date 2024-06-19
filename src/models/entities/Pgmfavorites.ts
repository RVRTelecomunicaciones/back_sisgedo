import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pgmfavorites_pkey", ["id"], { unique: true })
@Entity("pgmfavorites", { schema: "public" })
export class Pgmfavorites {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("text", { name: "fav_name", nullable: true })
  favName: string | null;

  @Column("text", { name: "fav_source", nullable: true })
  favSource: string | null;

  @Column("text", { name: "fav_path", nullable: true })
  favPath: string | null;
}
