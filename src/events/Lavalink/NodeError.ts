import type { Node } from "vulkava";
import PlayerEvent from "../../structures/PlayerEvent";
import Logger from "../../utils/Logger";

export default new PlayerEvent("error", (node: Node, error: Error) => {
    Logger.info(`${node.identifier} encountered with an error. Error caused: ${error.cause || "unknown"}\n$Error message: ${error.message || "unknown"}\nError stacktrace: ${error.stack}`);
});
