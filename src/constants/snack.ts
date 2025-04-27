import { makeVar } from "@apollo/client";
import { SnackMessage } from "../interfaces/snack-message.interface.ts";

export const snackVar = makeVar<SnackMessage | undefined>(undefined);