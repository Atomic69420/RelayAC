# RelayAC
RelayAC is a project made to protect your realm by using bedrock protocol's relay

## How To Use
First edit the config.json and add your realm code, prefix for the title of the kick message it will be encased in brackets like so [prefixhere] if not configured it will default to Server and for discord you put your discord code if you have one if not it will default to None. And after you've done that run the start.bat file or just open a terminal or command prompt in your directory and run npm i && node .

## Restrictions
Please read the license file which contains a Creative Commons CC BY-NC-ND 4.0 license this license basically says in short terms "You may Share, copy and redistribute as long as you show credit like this was made by Atomic69420 and provide a link to this license and indicate if changes were made, You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use. You may not use the material for commercial purposes. If you remix, transform, or build upon the material, you may not distribute the modified material basically meaning if you make changes to any other file than the config.json you may not redistribute. You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits. So if you wish to redistribute meaning give the code to other people you have to provide credit and a link to this license so best way to do that is provide the github link and if you made changes to the code in a file other than config.json you may not give it to other people. It being obfuscated obviously means I dont want you changing the code or any thing inside it for another project without credit.

## Detections
The list of things we detect:
Bots [T1] (Blocks all bots currently known as unbypassable)
Bots [T2] (Blocks sub clients currently untested)
Things we will detect in the future
Horion Crasher Type 3 [No Type] (Blocks the horion type 3 crasher and kicks the player using it, untested)
External [No Type] (Blocks external messages that are used in most spam bots, untested)
/me, /tell, /w or /whisper and /msg [No Type] (Blocks the use of these commands that are used by most spam bots, untested)
Device Block [No Type] (Not really a detection but allows you to block any device you wish to, untested)
Invalid Skin Data [No Type] (Detects bot like skin data aswell as invisible skins)

# Notice
Since this uses bedrock protocol you will need to wait until someone on their end posts a update to bedrock protocol when a new minecraft version comes out. To do this either wait until I update it or run update.bat.
Some things do not work in this that do in normal minecraft such as titles. This will most likely be fixed if the bedrock protocol devs decide to fix it.

