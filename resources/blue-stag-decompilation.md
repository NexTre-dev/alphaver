# Decompiling Minecraft 1.0.16.05_13 Lilypad
This is a guide on decompiling and deobfuscation of the third publicly released 1.0.16 version, lilypad_qa. Please do not share the source code as it is against the law to do so.

*Also, yes, I am aware that this is a stupid idea that isn’t productive at all. Who doesn’t want to mess around with the source code anyways?*

## 0. Notes and prerequisites
This guide assumes that you are using Windows. If you are on a different operating system, you can try to figure out similar instructions.

Please do not distribute your modded jars! They contain deobfuscated source code, which may or may not be illegal! Also, at the time of writing this sentence, people are looking at ways to use Fabric instead, so this guide might soon become obsolete. Also, keep in mind that a few classes have the wrong names when deobfuscated, but that should not be too much of a problem.

You are going to need the following:
* A JDK, for compiling and decompiling Java code. You can get one at [Adoptium](https://adoptium.net/).
* Lilypad_qa.jar, [download link 1 (mirror)](../jar/), [download link 2 (original)](https://www.mediafire.com/file/uo2zqueiw2e872y/lilypad_qa.jar/file)
* [RetroMCP-Java](https://github.com/MCPHackers/RetroMCP-Java/releases/lates), for deobfuscation and recompilation.
* [Recaf](https://github.com/Col-E/Recaf/releases/latest), for modifying the jar file to make deobfuscation work *(Alternatives that can modify jars can be used)*.
* *Optional: [Visual Studio Code](https://code.visualstudio.com/), for editing the source code with ease. Also install [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) for features you would find in an IDE.*

## 1. Preparing
Drag RetroMCP-Java into an empty folder, and run it to open up a command prompt:
*(image)*

Type in `setup`, then select `a1.1.2_01`.

However, you can’t just replace the alpha 1.1.2_01 client with Lilypad just yet! An extra step needs to be taken, as the name of one of the new classes Lilypad adds in conflicts with the name of an existing Minecraft class.

## 2. Preparing Lilypad for decompilation
This is where ReCaf comes in. ReCaf can rename Java classes without any hassle. Open it up and load lilypad_qa.jar: *(image)*

This may take a while if your computer isn’t decent enough. Once decompilation is done, there will be a list of classes: *(image)*

The class I’ve highlighted, `BlockButton`, is the class that needs to be renamed. Right click on it, click rename and rename it to something else, like  `LilypadBlockButton`: *(image)*

Now you can update the jar file by clicking on File > Export program: *(image)*

## 3. Deobfuscating Lilypad
Once you have the modified jar, rename it to “minecraft.jar” and move it to the “jars” folder, replacing the vanilla jar. Now, type in the  `decompile`  command into RetroMCP-Java, sit back and relax. Hold on for a minute! Forget sitting back and relaxing! Compiler errors!
*(image)*

If you are a Visual Studio Code user, you can take the time to delete the workspace folder (this folder is useful if you use the Eclipse IDE), rename RetroMCP-Java-all.jar to mcp.jar, [download this zip file](https://drive.google.com/file/d/1lqJgnaZ7Jm81tM3J-Ab9gekd-JCnKjiE/view?usp=sharing) and move all the files from the zip to your folder containing RetroMCP-Java. These files will speed up development. Here’s how it works:
* Run *Tasks*: Run Build Task on the command palette (Ctrl+Shift+P) to build Lilypad and run it.
* Run *Tasks*: Run Test Task on the command palette to close Lilypad, in case the X button does not work.
Feel free to edit the workspace settings if you’re not a fan of hiding files and file nesting. To open the folder in Visual Studio Code, right click on the explorer, select “Show more options” if you are using Windows 11 and click on “Open with Code”.

## 4. Fixing the source code
Decompiled source code isn’t always perfect. However, you can fix it. The source code is stored in the src/minecraft folder. The files are stored in the net/minecraft/src folder inside that folder unless otherwise stated. Here is how to fix it:
* In BlockFire.java, EntityChicken.java, ItemFlintAndSteel.java and RecipesWeapons.java, add `throws IOException`:
  * Before *(BlockFire.java)*:
    *(image)*
  * After *(BlockFire.java)*:
    *(image)*
  * Using the Extension Pack for Java makes this process easier. Press Ctrl+Period on the error squiggles and click on “Add throws declaration”:
    *(image)*
  * Make sure to put in `import java.io.IOException;` at the top of each file.
* In ClassX.java, go to the bottom of the file to find `public static void a(NBTTagCompound nBTTagCompound0, DataOutput dataOutput1) {`  and add `throws IOException`:
  * Before:
    *(image)*
  * After:
    *(image)*
* Delete BlockMinecartTrack.java. There is a duplicate that is used instead with the name “ClassIf”.
* In Minecraft.java (inside src/minecraft/net/minecraft/client), add in `InputHandler.mc = this;` after line 140:
  *(image)*

## 5. Running Lilypad
Before building the fixed source code, you should make a modification somewhere to confirm that it works. On line 262 in GuiIngame.java, there is a line of text that reads “Minecraft Alpha 1.0.16.05_13 Lilypad”. Replace that with anything you want:
*(image)*


After all of that, run the `build`  command. This time, you can actually sit back and relax.

*(image)*

Don’t worry! You can still relax! That client.md5 error doesn’t stop you from playing with your modifications. It just means that you can’t share your modified jar file because it is not obfuscated. Now run the `startclient` command to start Minecraft Lilypad. Enter your key, join World 2 and… tada?

*(image)*

Don’t forget to turn on “Show FPS” in the settings!

*(image)*

That’s more like it! Now you have your own version of Lilypad you can tinker around and mess around with! The number 2,147,483,647’s the limit! I hope this guide helps. If a new version comes out, the process should be similar. If you want to know some basic mods, read on. Otherwise, have fun modding!