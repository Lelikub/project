import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'



@Entity()
export class Chims{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("float8")
    a0: number;

    @Column("float8")
    a1: number;

    @Column("float8")
    a2: number;

    @Column("float8")
    a3: number;

    @Column("float8")
    a4: number;

    @Column("float8")
    a5: number;

}