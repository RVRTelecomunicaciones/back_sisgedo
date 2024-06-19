import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mensaje } from "./Mensaje";

@Index("chat_chat_id_key", ["chatId"], { unique: true })
@Index("chat_pkey", ["chatId", "mensId"], { unique: true })
@Index("chat_mens_id", ["mensId"], {})
@Index("chat_dest_estado", ["usuaDestino"], {})
@Entity("chat", { schema: "public" })
export class Chat {
  @PrimaryGeneratedColumn({ type: "integer", name: "chat_id" })
  chatId: number;

  @Column("integer", { name: "usua_origen" })
  usuaOrigen: number;

  @Column("integer", { name: "usua_destino" })
  usuaDestino: number;

  @Column("numeric", {
    name: "chat_estado",
    precision: 1,
    scale: 0,
    default: () => "0",
  })
  chatEstado: string;

  @Column("character varying", {
    name: "chat_mensaje",
    nullable: true,
    length: 1200,
  })
  chatMensaje: string | null;

  @Column("integer", { primary: true, name: "mens_id" })
  mensId: number;

  @Column("timestamp without time zone", {
    name: "chat_hora",
    nullable: true,
    default: () => "now()",
  })
  chatHora: Date | null;

  @ManyToOne(() => Mensaje, (mensaje) => mensaje.chats, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "mens_id", referencedColumnName: "mensId" }])
  mens: Mensaje;
}
