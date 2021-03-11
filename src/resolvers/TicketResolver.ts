import {
    Resolver,
    Mutation,
    Arg,
    Int,
    Query,
    InputType,
    Field
} from "type-graphql";
import { Ticket } from "../entity/Ticket";

@InputType()
class TicketInput {
    @Field()
    name: string;

    @Field()
    description: string;

    @Field(() => Int)
    created_by: number;

    @Field(() => Int)
    assigned_to: number;

    @Field()
    status: string;
}

@InputType()
class TicketUpdateInput {
    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => Int, { nullable: true })
    created_by?: number;

    @Field(() => Int, { nullable: true })
    assigned_to?: number;

    @Field(() => String, { nullable: true })
    status?: string;
}

@Resolver()
export class TicketResolver {
    @Mutation(() => Ticket)
    async createTicket(@Arg("options", () => TicketInput) options: TicketInput) {
        const ticket = await Ticket.create(options).save();
        return ticket;
    }

    @Mutation(() => Boolean)
    async updateTicket(
        @Arg("id", () => Int) id: number,
        @Arg("input", () => TicketUpdateInput) input: TicketUpdateInput
    ) {
        await Ticket.update({ id }, input);
        return true;
    }

    @Mutation(() => Boolean)
    async deleteTicket(@Arg("id", () => Int) id: number) {
        await Ticket.delete({ id });
        return true;
    }

    @Query(() => [Ticket])
    tickets() {
        return Ticket.find();
    }
}
