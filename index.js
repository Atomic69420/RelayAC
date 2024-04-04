const { Relay } = require('bedrock-protocol')
const config  = require('./config.json')
const colors = require('colors')
const relay = new Relay({
  host: "0.0.0.0",
  port: 19132,
  offline: false,
  profilesFolder: "accounts",
  destination: {
    realms: {
        realmInvite: config.config.realmcode
    },
    offline: false
  }
})
if (config.config.debug.enabled === true) {
  relay.conLog = console.debug
}
relay.listen()
console.log(`Started relay on ${relay.options.host}`)
let nc;
let nt;
let rt;
setInterval(() => {
  nc = 0
}, 1000);
setInterval(() => {
  rt = 0
}, 1000);
setInterval(() => {
  nt = 0
}, 1000);

        let prefix = config.config.prefix
        let discord = config.config.discord
        if (prefix === "" || !prefix || prefix === undefined || prefix === "the prefix of the bot this will appear in kick messages") {
          prefix = "Server"
        }
        if (discord === "" || !discord || discord === undefined || discord === "the discord link of your discord this will appear in kick messages") {
          discord = "None"
        }
relay.on('connect', player => {
    player.on('serverbound', ({ name, params }, des) => {


      if (name === "text") {
         nt++;
         if (nt === config.config.textperseclimit) {
          des.canceled = true
          console.log(`${prefix}`.bold.blue + `\n[-]`.bold.green + `\nnull`.bold.red + `\nToo Many Chat Messages: The user sent more than ${config.config.textperseclimit} text messages within a second`.bold.red);
          player.disconnect(`[${prefix}]\nReason: Too Many Chat Messages\nDiscord: ${discord}`)
          player.close()
         }
      }
      if (name === "player_auth_input") {
       if (params.input_data._value !== 0n) {
        console.log(`Server Bound Packet: ${name}`, params)
       }
       }
      if (name === "request_ability") {
         if (params.ability === "flying") {
          des.canceled = true
            console.log(`${prefix}`.bold.blue + `\n[-]`.bold.green + `\nnull`.bold.red + `\nBad Packet [T4]: The user requested to fly this is used in hack clients`.bold.red);
            player.disconnect(`[${prefix}]\nReason: Bad Packet [T4]\nDiscord: ${discord}`)
            player.close()
         }
      }
      if (name === "inventory_transaction") {
        if (params.transaction.transaction_data !== undefined) {
        if (params.transaction.transaction_data.action_type === "attack") {
           nc++;
           if (nc === config.config.cpslimit) {
            des.canceled = true
            console.log(`${prefix}`.bold.blue + `\n[-]`.bold.green + `\nnull`.bold.red + `\nToo Many Attack Packets: The user exceeded the max attack packet limit within a second ${config.config.cpslimit}`.bold.red);
            player.disconnect(`[${prefix}]\nReason: You Are Attacking Too Fast\nDiscord: ${discord}`)
            player.close()
           }
        }
      }
      }
      if (name === "player_action") {
        if (params.action === "respawn") {
            rt++;
            if (rt === 2) {
              des.canceled = true
              console.log(`${prefix}`.bold.blue + `\n[-]`.bold.green + `\nnull`.bold.red + `\nBad Packet [T5]: The user was trying to respawn when not dead this is used in No Fall`.bold.red);
              player.disconnect(`[${prefix}]\nReason: Bad Packet [T5]\nDiscord: ${discord}`)
              player.close()
            }
        }
      }
      if (name === "move_player") {
        des.canceled = true
        console.log(`${prefix}`.bold.blue + `\n[-]`.bold.green + `\n${params.runtime_id}`.bold.red + `\nBad Packet [T3]: The user sent a move player packet this is used in hack clients and in Crashary 2`.bold.red);
        player.disconnect(`[${prefix}]\nReason: Bad Packet [T3]\nDiscord: ${discord}`)
        player.close()
      }
      if (name === "command_request") {
        const commandraw = params.command.indexOf(' ');

const command = commandraw !== -1 ? params.command.substring(0, commandraw) : params.command;
const blacklistedcmds = ["/me", "/w", "/tell", "/msg"];
if (blacklistedcmds.includes(command)) {
  if (params.command.includes("@e")) {
    des.canceled = true
    console.log(`${prefix}`.bold.blue + `\n[-]`.bold.green + `\n${params.origin.uuid}`.bold.red + `\nBad Packet [T2]: The user used the command ${params.command}`.bold.red);
    player.disconnect(`[${prefix}]\nReason: Bad Packet [T2]\nDiscord: ${discord}`)
    player.close()
  } else {
    des.canceled = true
  console.log(`${prefix}`.bold.blue + `\n[-]`.bold.green + `\n${params.origin.uuid}`.bold.red + `\nBad Packet [T1]: The user used the command ${command}`.bold.red);
  player.disconnect(`[${prefix}]\nReason: Bad Packet [T1]\nDiscord: ${discord}`)
  player.close()
  }
}
      }
      if (config.config.debug.enabled === true && config.config.debug.serverbound === true) {
      if (name !== "player_auth_input" && name !== "subchunk_request")  console.log(`Server Bound Packet: ${name}`, params)
      }
      })
  if (config.config.debug.enabled === true && config.config.debug.clientbound === true) {
    player.on('clientbound', ({ name, params }) => {
      console.log(`Client Bound Packet: ${name}\n${params}`)
    })
  }
  player.on('login', (packet) => {
   if (packet.user.titleId === "2047319603") {
    console.log(`${prefix}`.bold.blue + `\n[-]`.bold.green + `\n${packet.user.displayName}`.bold.red + `\nSuspected Bot [T1]: The user was a bot`.bold.red);
    player.disconnect(`[${prefix}]\nReason: Suspected Bot [T1]\nDiscord: ${discord}`)
    player.close()
   }
   if (packet.user.XUID === 0) {
    console.log(`${prefix}`.bold.blue + `\n[-]`.bold.green + `\n${packet.user.displayName}`.bold.red + `\nSuspected Bot [T2]: The user was a subclient`.bold.red);
    player.disconnect(`[${prefix}]\nReason: Suspected Bot [T2]\nDiscord: ${discord}`)
    player.close()
   }
  })
})