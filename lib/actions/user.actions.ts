'use server';

import { CreateUserParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../mongodb/database";
import User from "../mongodb/models/user.model";

export const createUser = async (user: CreateUserParams) => {
    try {
        await connectToDatabase();

        const newUser = await User.create();

        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        handleError(error);
    }
}