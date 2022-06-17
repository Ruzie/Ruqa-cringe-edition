import moduleAlias from "module-alias";
import ruqa from "../index"

moduleAlias.addAliases({
    "@event_ruqa": "../../index",
    "@event_gateway_event": "../../structures/GatewayEvent",
    "@event_player_event": "../../structures/PlayerEvent",
    "@event_rich_embed": "../../utils/RichEmbed",
    "@event_logger": "../../utils/Logger",
    "@event_components": "../../components",
    "@event_exception": "../../utils/NodeExceptions",
    "@event_embed_post": "../../functions/createEmbedPost",
    "@event_func": "../../functions",
    "@event_typings": "../../typings",

    "@ruqa": "../../index",
    "@command": "../structures/Command",
    "@gateway_event": "../../structures/GatewayEvent",
    "@player_event": "../../structures/PlayerEvent",
    "@rich_embed": "../../utils/RichEmbed",
    "@logger": "../../utils/Logger",
    "@components": "../../components",
    "@embed_post": "../../functions/createEmbedPost",
    "@func": "../../functions",
    "@typings": "../../typings",
    "@exception": "../utils/NodeExceptions",
    "@nodes": "../config/nodes.json",
    "@emoji": "../config/emojis.json",
});
