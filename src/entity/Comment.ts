import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Comment extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    comment: string;

    @Field()
    @Column()
    description: string;

    @Field(() => Int)
    @Column("int", { default: 60 })
    ticket_id: number;

    @Field()
    @Column("int", { default: 60 })
    status_id: number;
}
