[← Home Page](../README.md#guides--resources)

# Decompiling Minecraft 1.0.16.05_13 Lilypad
This is a guide on decompiling and deobfuscation of the third publicly released 1.0.16.05 version, lilypad_qa. Please do not share the source code as it is against the law to do so.

<!-- 
*Also, yes, I am aware that this is a stupid idea that isn’t productive at all. Who doesn’t want to mess around with the source code anyways?*
-->

## 0. Notes and prerequisites
Please reobfuscate jars! If you do not then they will contain deobfuscated source code, which may or may not be illegal!

You are going to need the following:
* A JDK, for compiling and decompiling Java code. You can get one at [Adoptium](https://adoptium.net/).
* Lilypad_qa.jar, [download link 1 (mirror)](../jar/), [download link 2 (original)](https://www.mediafire.com/file/uo2zqueiw2e872y/lilypad_qa.jar/file) (obviously)
* [RetroMCP-Java](https://github.com/MCPHackers/RetroMCP-Java/releases/latest), for deobfuscation and recompilation.
* *Optional: An actual IDE like IntelliJ IDEA or Eclipse.*

## 1. Preparing
Drag RetroMCP-Java into an empty folder, and run it to open up a command prompt:

![](https://lh6.googleusercontent.com/klp1IdiGzisiGH1sxHtnrIcoTslsjk59qoYM-SDns7rdnGH_Ma2-9wZF1Yun_Ay6BeP64DFeFtgBWlc4aVQgDGFI30cddsd26l-ggH6e-9cGnIdQO7AT5WJDWoeECN5ryhJ1VGAynO8U3AM0ng)

Type in `setup`, then select `a1.1.0`.

## 2. Fixing mappings
Go to `conf` and open up `client.tiny`, then replace `BlockButton` with something else, for example `BlockButtonVanilla`. Once you've done that save the file.

## 3. Deobfuscating Lilypad
Once you have the modified jar, rename it to “minecraft.jar” and move it to the “jars” folder, replacing the vanilla jar. Now, type in the  `decompile`  command into RetroMCP-Java, sit back and relax. Hold on for a minute! Forget sitting back and relaxing! And enjoy the compiler errors!

![](https://lh3.googleusercontent.com/f0J5MD3Agqr3ybiTwZFjIKfPCRXRgNfC53ajAlsZxSQmV5_O3twsVrk-pL1faZpRNqRPO-4SULMUwG2i7ky0TJ8JGwr7uDgb6yADY0YxTBjnehzkcl0IHD1N2-3W23pt53sV1-tF0Y-I6hjSrw)

If you have an IDE, open up the workspace.

**NOTE:** If you are using IntelliJ IDEA you must import the modules and set `MCP_LOC` to the path of your RetroMCP folder first!

## 4. Fixing the source code
Decompiled source code isn’t always perfect. However, you can fix it. The source code is stored in the src/minecraft folder. The files are stored in the net/minecraft/src folder inside that folder unless otherwise stated. Here is how to fix it:
* In ClassX.java, go to the bottom of the file to find `public static void a(NBTTagCompound nBTTagCompound0, DataOutput dataOutput1) {`  and add `throws IOException`:
  * Before:

    ![](https://lh6.googleusercontent.com/AaV1Yu1PHiTBzCd4MG7djPw2mwBHhefHfHsPAtFQ-FnNlXGEyZZQGUFUj0nmkNKlhi84JvHKnviBmdMiNNP8lAQglM5Jh_rAE5lwU_-lFhmlcGyLAzj4k61-mWYT4XrHI3CfPNtlaNnpt2utlA)
  * After:

    ![](https://lh6.googleusercontent.com/7ZqNtkwmftur19G1v48z_zT3K8tZwTv4nP9ZSpD67X374tHRGOyyrD4HIZppUfz0jjfvGMuepNbe-hHVcmT3dlRZBj0T8qgHDMDOjHdW4uc2IBgkc0A7C_n6ZKZPv3i6c-KGI0dtBr1J9AT5EQ)
  * Using the tools provided by your IDE makes this process easier. Press the shortcut key you or your IDE has defined on the error squiggles and click on “Add throws declaration”:
    
    ![](https://lh5.googleusercontent.com/QlNUTSvNmiRO2-Y2pU5slVVvHwDp_JMHTwxIOjyXWHcYTFYFiT1_R556kRBuZCRoM5FzO3ENnrvud58MPtum3-OzQOfCNPDis5N3L1OiK5I9VITTwTW3Pt3UtNMhNFXmNrdxVRQCS8sAyoTmcg)
* Delete BlockMinecartTrack.java. There is a duplicate that is used instead with the name “ClassIf”.

## 5. Running Lilypad
Click the run button, and VOLIA! You have a working decompilation! Now if you want to make mods before doing so in RetroMCP type in `updatemd5`, this should update the hashes to be in a more clean state. And to recompile a obfuscated jar type in `reobfuscare`.

# Sample mods

## 1: Permanent 10pm-5am
![](https://lh4.googleusercontent.com/UAU1Y3SAQH7h2qQwDhO6ONQzpf1IUCBXvJzyGocZoJuDPkXI2Fxy6_kUQ9kZZukXQq812RwqmTY4SJlmgko-PFDvYeZLORfqT1jdQYUVCUjyEw-ItfUC2LzG5nW22-btCdwEjdTHOdLDk6zHpA)

Do you want to see the wacky world generation that happens at midnight but you don't have enough sleep for that? This is where decompilation comes in useful!

On line 181 of GuiEditSign.java:
* Replace `boolean z8 = this.time_hr > 22 || this.time_hr < 5;` with `boolean z8 = true;`.

On line 25 of RenderPainting.java:
* Replace `this.loadTexture(true ? "/art/kz.png" : "/art/zz.png");` with `this.loadTexture("/art/zz.png");`.

On line 100 of ThreadDownloadResources.java:
* Replace `InputStream inputStream3 = this.getClass().getResourceAsStream(i2 <= 22 && i2 >= 5 ? "/soundres.txt" : "/soundres_a.txt");` with `InputStream inputStream3 = this.getClass().getResourceAsStream("/soundres_a.txt");`.

Relative to the folder containing RetroMCP, save [this file](https://i.imgur.com/OSNJME7.png) to src/minecraft/art/zz.png. If you do not download this file, the game will crash because it does not exist in Lilypad QA.
