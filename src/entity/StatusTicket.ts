import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class StatusTicket extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    label: string;

    @Field()
    @Column()
    description: string;
}
