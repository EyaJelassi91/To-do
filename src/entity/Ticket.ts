import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Ticket extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    description: string;

    @Field(() => Int)
     @Column("int", { default: 60 })
      created_by: number;

    @Field(() => Int)
    @Column("int", { default: 60 })
      assigned_to: number;

    @Field()
    @Column()
    status: string;
}
