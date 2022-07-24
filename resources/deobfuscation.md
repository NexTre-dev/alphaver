[← Home Page](../README.md#guides--resources)

## Deobfuscation

### UNR.PREVIEW2
UNR.PREVIEW2 is based on Alpha 1.0.16_02, so normal Alpha 1.0.16_02 mappings will work.

### How to deobfuscate
Requirements:

UNR.PREVIEW2 .jar file (click [here](https://kiffoliska.github.io/unrpreview2.jar) for an already deobfuscated .jar file)

[Alpha 1.0.16_02 mappings](https://github.com/MCPHackers/MCPHackers.github.io/blob/main/versions/a1.0.16.zip)

[Enigma](https://github.com/MCPHackers/MCPEnigma)

[Recaf](https://github.com/Col-E/Recaf)

Open Enigma, select the UNR.PREVIEW2 jar and the Alpha 1.0.16_02 mappings. Open the "(none)" folder in Obfuscated classes and make every class name start with "net/minecraft/src/" (obviously without the quotes)

Save the mappings and in Recaf open the UNR.PREVIEW2 jar. In the Mappings tab, select TinyV2 -> Obfuscated to Intermediate. Select the mapping file you saved.

### How to use with MCP
Requirements:

[RetroMCP](https://github.com/MCPHackers/RetroMCP-Java/)

Deobfuscated UNR.PREVIEW2 .jar (downloadable [here](https://kiffoliska.github.io/unrpreview2.jar) if you didn't follow the steps above)

Open RetroMCP and run the command "setup a1.0.16_02".

Rename the deobfuscated jar to "minecraft.jar" and copy it in the "jars" folder.

Now, in RetroMCP run the command "decompile". It might take a while to fully decompile the client .jar but it should work perfectly.
	
