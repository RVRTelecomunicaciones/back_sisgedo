import { Column, Entity, Index, OneToMany } from "typeorm";
import { MenuCategoria } from "./MenuCategoria";

@Index("menu_pkey", ["groupmenu"], { unique: true })
@Entity("menu", { schema: "public" })
export class Menu {
  @Column("numeric", {
    primary: true,
    name: "groupmenu",
    precision: 2,
    scale: 0,
  })
  groupmenu: string;

  @Column("character varying", { name: "name", nullable: true, length: 200 })
  name: string | null;

  @Column("numeric", {
    name: "actimenu",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  actimenu: string | null;

  @OneToMany(() => MenuCategoria, (menuCategoria) => menuCategoria.groupmenu)
  menuCategorias: MenuCategoria[];
}
