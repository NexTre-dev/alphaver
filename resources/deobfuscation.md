[← Home Page](../README.md#guides--resources)

## 1. Deobfuscation

### UNR.PREVIEW2
UNR.PREVIEW2 is based on Alpha 1.0.16_02, so normal Alpha 1.0.16_02 mappings will work.

### How to deobfuscate
Requirements:

UNR.PREVIEW2 client .jar file (click [here](https://kiffoliska.github.io/unrpreview2.jar) for an already deobfuscated .jar file)

UNR.PREVIEW2 server .jar file (optional)

[Alpha 1.0.16_02 mappings](https://github.com/MCPHackers/MCPHackers.github.io/blob/main/versions/a1.0.16.zip)

[Enigma](https://github.com/MCPHackers/MCPEnigma)

[Recaf](https://github.com/Col-E/Recaf) (not necessary, you should be able to save the .jar with the mappings directly through enigma)

Open Enigma, select the UNR.PREVIEW2 jar and the Alpha 1.0.16_02 mappings. Open the "(none)" folder in Obfuscated classes and make every class name start with "net/minecraft/src/" (obviously without the quotes)

Save the mappings and in Recaf open the UNR.PREVIEW2 jar. In the Mappings tab, select TinyV2 -> Obfuscated to Intermediate. Select the mapping file you saved.

## 2. Decompilation

### How to use with MCP

## 1. Pre deobfuscated
Requirements:

[RetroMCP](https://github.com/MCPHackers/RetroMCP-Java/)

Deobfuscated UNR.PREVIEW2 client .jar (downloadable [here](https://kiffoliska.github.io/unrpreview2.jar) if you didn't follow the steps above)

Deobfuscated UNR.PREVIEW2 server .jar (optional)

### 1a. Setup

Open RetroMCP and run the command "setup a1.0.16_02".

### 1b. Client

Rename the deobfuscated jar to "minecraft.jar" and copy it in the "jars" folder.

### 1c. Server (optional)

Rename the deobfuscated server jar to "minecraft_server.jar" and copy it in the "jars" folder.

### 1d. Decompilation

In RetroMCP run the command "decompile".

## 2. Obfuscated
Requirements:

[RetroMCP](https://github.com/MCPHackers/RetroMCP-Java/)

UNR.PREVIEW2 .jar

### 2a. Setup

Open RetroMCP and run the command "setup a1.0.16_02".

### 2b. Client

Rename the UNR.PREVIEW2 .jar to "minecraft.jar" and copy it in the "jars" folder.

### 2c. Server (optional)

Rename the UNR.PREVIEW2 server .jar to "minecraft_server.jar" and copy it in the "jars" folder.

### 2d. Decompilation

In RetroMCP run the command "decompile".
