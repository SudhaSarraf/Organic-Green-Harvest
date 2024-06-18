import { AbstractEntity } from "src/common/abstract.entity";
import { RoleEntity } from "src/role/entities/role.entity";
import { Column, CreateDateColumn, DeleteDateColumn, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";

export class UserEntity extends AbstractEntity<UserEntity>{
    @Column()
    userName: string;

    @PrimaryColumn()
    userId: string;

    @Column({ type: "varchar", length: 15, unique: true })
    phone?: string;

    @Column({
        nullable: true,
        default: null,
    })
    address?: string;

    @Column({ default: false })
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updatedAt?: Date;

    @Column({ default: null, nullable: true })
    updatedBy?: string;

    @DeleteDateColumn({ default: null, nullable: true })
    deletedAt?: Date;

    @Column()
    createdBy?: string;

    @Column({ unique: true })
    email: string;

    @Column({ type: 'varchar', length: 200 })
    password: string;

    @Column({
        nullable: false,
        default: 'N/A'
    })
    @Column()
    image?: string;

    @Column({ nullable: true, default: null, type: 'text' })
    hashedRt: string; 

    @Column('int', { nullable: true, default: null })
    otp1: number;

    @Column('int', { nullable: true, default: null })
    otp2: number;

    @Column('int', { nullable: true, default: null })
    otp3: number;

    @ManyToMany(() => RoleEntity, (role) => role.users, { eager: true })
    @JoinTable()
    roles: RoleEntity[];
}