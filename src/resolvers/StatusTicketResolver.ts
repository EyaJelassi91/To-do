import {
    Resolver,
    Mutation,
    Arg,
    Int,
    Query,
    InputType,
    Field
} from "type-graphql";
import { StatusTicket } from "../entity/StatusTicket";

@InputType()
class StatusTicketInput {
    @Field()
    label: string;

    @Field()
    description: string;
}

@InputType()
class StatusTicketUpdateInput {
    @Field(() => String, { nullable: true })
    label?: string;

    @Field(() => String, { nullable: true })
    description?: string;
}

@Resolver()
export class StatusTicketResolver {
    @Mutation(() => StatusTicket)
    async createStatusTicket(@Arg("options", () => StatusTicketInput) options: StatusTicketInput) {
        const status_ticket = await StatusTicket.create(options).save();
        return status_ticket;
    }

    @Mutation(() => Boolean)
    async updateStatusTicket(
        @Arg("id", () => Int) id: number,
        @Arg("input", () => StatusTicketUpdateInput) input: StatusTicketUpdateInput
    ) {
        await StatusTicket.update({ id }, input);
        return true;
    }

    @Mutation(() => Boolean)
    async deleteStatusTicket(@Arg("id", () => Int) id: number) {
        await StatusTicket.delete({ id });
        return true;
    }

    @Query(() => [StatusTicket])
    status_tickets() {
        return StatusTicket.find();
    }
}
