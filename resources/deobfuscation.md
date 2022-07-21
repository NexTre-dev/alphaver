[← Home Page](../README.md#5-game-content)

## Deobfuscation

### UNR.PREVIEW2
UNR.PREVIEW2 is based on Alpha 1.0.16_02, so normal Alpha 1.0.16_02 mappings will work.

### How to deobfuscate
Requirements:

UNR.PREVIEW2 .jar file

[Alpha 1.0.16_02 mappings](https://github.com/MCPHackers/MCPHackers.github.io/blob/main/versions/a1.0.16.zip)

[Enigma](https://github.com/MCPHackers/MCPEnigma)

[Recaf](https://github.com/Col-E/Recaf)

Open Enigma, select the UNR.PREVIEW2 jar and the Alpha 1.0.16_02 mappings. Open the "(none)" folder in Obfuscated classes and make every class name start with "net/minecraft/src/" (obviously without the quotes)

Save the mappings and in Recaf open the UNR.PREVIEW2 jar. In the Mappings tab, select TinyV2 -> Obfuscated to Intermediate. Select the mapping file you saved.
