[← Home Page](../README.md#guides--resources)

# Decompiling
This is a guide on decompiling and deobfuscation of the first and second publicly released 1.0.16.05 versions. Please do not share the source code as it is against the law to do so.
These versions are based on Alpha 1.0.16_02, so normal Alpha 1.0.16_02 mappings will work.

<!-- 
*Also, yes, I am aware that this is a stupid idea that isn’t productive at all. Who doesn’t want to mess around with the source code anyways?*
-->

## 0. Notes and prerequisites
Please reobfuscate jars! If you do not then they will contain deobfuscated source code, which may or may not be illegal!

You are going to need the following:
* A JDK, for compiling and decompiling Java code. You can get one at [Adoptium](https://adoptium.net/).
* A copy of either of these releases.
* [RetroMCP-Java](https://github.com/MCPHackers/RetroMCP-Java/releases/latest), for deobfuscation and recompilation.
* *Optional: An actual IDE like IntelliJ IDEA or Eclipse.*

## 1. Preparing
Drag RetroMCP-Java into an empty folder, and run it to open up a command prompt:

![](https://lh6.googleusercontent.com/klp1IdiGzisiGH1sxHtnrIcoTslsjk59qoYM-SDns7rdnGH_Ma2-9wZF1Yun_Ay6BeP64DFeFtgBWlc4aVQgDGFI30cddsd26l-ggH6e-9cGnIdQO7AT5WJDWoeECN5ryhJ1VGAynO8U3AM0ng)

Type in `setup`, then select `1.0.16_02`.

## 2. Deobfuscating
Once you have the modified jar, rename it to “minecraft.jar” and move it to the “jars” folder, replacing the vanilla jar. Now, type in the  `decompile`  command into RetroMCP-Java, sit back and relax. Hold on for a minute! Forget sitting back and relaxing! And enjoy the compiler errors!

If you have an IDE, open up the workspace.

**NOTE:** If you are using IntelliJ IDEA you must import the modules and set `MCP_LOC` to the path of your RetroMCP folder first!

## 4. Fixing the source code
TODO: FIGURE OUT IF THERE ARE ANY ERRORS!!

## 5. Running
Click the run button, and VOLIA! You have a working decompilation! Now if you want to make mods before doing so in RetroMCP type in `updatemd5`, this should update the hashes to be in a more clean state. And to recompile a obfuscated jar type in `reobfuscare`.
