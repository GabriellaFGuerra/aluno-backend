import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Students{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name: string;
 
    @Column()
    ra: string;

    @Column()
    birthdate: Date;
    
    @Column()
    address: string;

    @Column({
        default: true
    })
    enrolled: boolean;
 
    @Column()
    age: number;

    @CreateDateColumn()
    create_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;
}
