# RelayAC
RelayAC is a project made to protect your realm by using bedrock protocol's relay

## How To Use
First edit the config.json and add your realm code, prefix for the title of the kick message it will be encased in brackets like so [prefixhere] if not configured it will default to Server and for discord you put your discord code if you have one if not it will default to None. And after you've done that run the start.bat file or just open a terminal or command prompt in your directory and run npm i && node .
- The way relays work is you join a server which is the relay then the relay makes you join a realm so when doing node . you have to connect to a server which will be the IP address of the computer your hosting it on and the port will always be 19132 unless changed.
- When you first join a relay it will ask you to go to a link and enter a code upon going to this link and entering the code you will be prompted to sign into the account that you are currently using. Upon successfully linking some data will be saved to a folder called accounts in a file then file contains your XSTSToken and some other stuff but will not include your password of your account. This is necessary for you to join the realm from the relay and do what the relay is said to do. 

## Restrictions
Please read the license file which contains a Creative Commons CC BY-NC-ND 4.0 license this license basically says in short terms "You may Share, copy and redistribute as long as you show credit like this was made by Atomic69420 and provide a link to this license and indicate if changes were made, You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use. You may not use the material for commercial purposes. If you remix, transform, or build upon the material, you may not distribute the modified material basically meaning if you make changes to any other file than the config.json you may not redistribute. You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits. So if you wish to redistribute meaning give the code to other people you have to provide credit and a link to this license so best way to do that is provide the github link and if you made changes to the code in a file other than config.json you may not give it to other people. It being obfuscated obviously means I dont want you changing the code or any thing inside it for another project without credit.

## Detections

The list of things we detect:

- Bots [T1] (Blocks all bots currently known as unbypassable) Side note it also blocks nintendo players
- Bots [T2] (Blocks sub clients currently untested)
- Bad Packet [T1] (Blocks the use of /me, /tell, /w or /whisper and /msg commands that are used by most spam bots and kicks the player using it, tested)
- Bad Packet [T2] (Blocks the horion type 3 crasher and kicks the player using it, tested)
- Bad Packet [T3] (Blocks the move player packet which is used by hack clients and Crashary 2 and kicks the player using it, tested)
- Bad Packet [T4] (Blocks a request to the server asking to fly this is used by hack clients for some fly types and kicks the player using it, tested)
- Too Many Attack Packets [No Type] (Blocks and kicks the player if they exceed the cpslimit set in the config, tested)
- Too Many Chat Messages [No Type] (Blocks and kicks the player if they exceed the textperseclimit set in the config, untested)

- Things we will detect in the future:

- External [No Type] (Blocks external messages that are used in most spam bots, untested)
- Device Block [No Type] (Not really a detection but allows you to block any device you wish to, untested)
- Invalid Skin Data [No Type] (Detects bot-like skin data as well as invisible skins)

## Config Docs
- realmcode: the realm code of the realm you want to create the relay on.
- prefix: the title of all kick messages that the relay does. the title is encased in brackets like so [prefix] if not configured it will default to Server.
- discord: the discord code of your discord if you have one if not it will default to None
- cpslimit: the clicks per second limit for everyone if they click faster than the set number they will be kicked the default value is 20
- textperseclimit: the amount of chat messages a person can send within a second before getting kicked the default value is 10
- debug: this is used to debug packets sent to the server and from the server this will flood your console if you use this and is only meant for testing purposes. serverbound is packets sent to the realm by players connected to the relay and clientbound is packets sent from the server to the players.

# Notice
Since this uses bedrock protocol you will need to wait until someone on their end posts a update to bedrock protocol when a new minecraft version comes out. To do this either wait until I update it or run update.bat.
Some things do not work in this that do in normal minecraft such as titles. This will most likely be fixed if the bedrock protocol devs decide to fix it.

