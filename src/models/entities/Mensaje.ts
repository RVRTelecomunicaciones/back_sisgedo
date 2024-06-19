import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Chat } from "./Chat";

@Index("mensaje_pkey", ["mensId"], { unique: true })
@Entity("mensaje", { schema: "public" })
export class Mensaje {
  @PrimaryGeneratedColumn({ type: "integer", name: "mens_id" })
  mensId: number;

  @Column("integer", { name: "usua_origen" })
  usuaOrigen: number;

  @Column("numeric", {
    name: "mens_estado",
    nullable: true,
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  mensEstado: string | null;

  @Column("character varying", {
    name: "mens_mensaje",
    nullable: true,
    length: 1200,
  })
  mensMensaje: string | null;

  @Column("timestamp without time zone", {
    name: "mens_fecha",
    default: () => "now()",
  })
  mensFecha: Date;

  @Column("timestamp without time zone", {
    name: "mens_time",
    nullable: true,
    default: () => "now()",
  })
  mensTime: Date | null;

  @Column("timestamp without time zone", {
    name: "mens_timeorigen",
    nullable: true,
  })
  mensTimeorigen: Date | null;

  @Column("timestamp without time zone", {
    name: "mens_timedestino",
    nullable: true,
  })
  mensTimedestino: Date | null;

  @Column("integer", { name: "usua_destino" })
  usuaDestino: number;

  @OneToMany(() => Chat, (chat) => chat.mens)
  chats: Chat[];
}
