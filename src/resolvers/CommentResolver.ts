import {
    Resolver,
    Mutation,
    Arg,
    Int,
    Query,
    InputType,
    Field
} from "type-graphql";
import { Comment } from "../entity/Comment";

@InputType()
class CommentInput {
    @Field()
    comment: string;

    @Field()
    description: string;

    @Field(() => Int)
    ticket_id: number;

    @Field(() => Int)
    status_id: number;
}

@InputType()
class CommentUpdateInput {
    @Field(() => String, { nullable: true })
    comment?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => Int, { nullable: true })
    ticket_id?: number;

    @Field(() => Int, { nullable: true })
    status_id?: number;
}

@Resolver()
export class CommentResolver {
    @Mutation(() => Comment)
    async createComment(@Arg("options", () => CommentInput) options: CommentInput) {
        const comment = await Comment.create(options).save();
        return comment;
    }

    @Mutation(() => Boolean)
    async updateComment(
        @Arg("id", () => Int) id: number,
        @Arg("input", () => CommentUpdateInput) input: CommentUpdateInput
    ) {
        await Comment.update({ id }, input);
        return true;
    }

    @Mutation(() => Boolean)
    async deleteComment(@Arg("id", () => Int) id: number) {
        await Comment.delete({ id });
        return true;
    }

    @Query(() => [Comment])
    comments() {
        return Comment.find();
    }
}
