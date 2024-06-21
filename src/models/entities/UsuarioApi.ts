import { Column, Entity, Index } from "typeorm";

@Index("usuario_api_pk", ["id"], { unique: true })
@Entity("usuario_api", { schema: "public" })
export class UsuarioApi {
  @Column("character varying", { primary: true, name: "id" })
  id: string;

  @Column("character varying", { name: "apellidos" })
  apellidos: string;

  @Column("character varying", { name: "nombres" })
  nombres: string;

  @Column("character varying", { name: "secret" })
  secret: string;

  @Column("character varying", { name: "ip_local" })
  ipLocal: string;

  @Column("character varying", { name: "ip_publica" })
  ipPublica: string;

  @Column("character varying", { name: "grand_type" })
  grandType: string;

  @Column("boolean", { name: "estado" })
  estado: boolean;
}
