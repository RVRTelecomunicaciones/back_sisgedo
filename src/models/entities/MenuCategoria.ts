import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Menu } from "./Menu";

@Index("menu_categoria_pkey", ["id"], { unique: true })
@Entity("menu_categoria", { schema: "public" })
export class MenuCategoria {
  @Column("numeric", { primary: true, name: "id", precision: 11, scale: 0 })
  id: string;

  @Column("character varying", {
    name: "module",
    length: 50,
    default: () => "''",
  })
  module: string;

  @Column("numeric", { name: "op", precision: 2, scale: 0, default: () => "0" })
  op: string;

  @Column("character", { name: "nivel", nullable: true, length: 1 })
  nivel: string | null;

  @ManyToOne(() => Menu, (menu) => menu.menuCategorias, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "groupmenu", referencedColumnName: "groupmenu" }])
  groupmenu: Menu;
}
