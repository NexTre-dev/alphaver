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
![](https://lh6.googleusercontent.com/klp1IdiGzisiGH1sxHtnrIcoTslsjk59qoYM-SDns7rdnGH_Ma2-9wZF1Yun_Ay6BeP64DFeFtgBWlc4aVQgDGFI30cddsd26l-ggH6e-9cGnIdQO7AT5WJDWoeECN5ryhJ1VGAynO8U3AM0ng)

Type in `setup`, then select `a1.1.2_01`.

However, you can’t just replace the alpha 1.1.2_01 client with Lilypad just yet! An extra step needs to be taken, as the name of one of the new classes Lilypad adds in conflicts with the name of an existing Minecraft class.

## 2. Preparing Lilypad for decompilation
This is where ReCaf comes in. ReCaf can rename Java classes without any hassle. Open it up and load lilypad_qa.jar:
![](https://lh6.googleusercontent.com/vhIsJMu8qlgLCjQYBk2jVT_6wKqVFWCTEIhgB6ZCYBcCTHEvX_z1Ja3fJzS-mEKm-YWXngBtR5puv9264iXYMOKkZ6f8AUXkCcWUfF19hPWhpewvbJQjNXr1zZDsk_fb5fMJ4z3cvoUIU4IRXw)
![](https://lh4.googleusercontent.com/P_cIZF6hsF_GWlRaf-IQLSZ4QAvQWE23Ykq7-3qxAfiUKf0hCJP00XE9x9s-CJslHS786cO2wc0Srq4VJBIvMm6rhpHU44HY7YDckzfEToH7kT2l-t3FS4clGsg_IwlIq1LnvLxWSteH56M_aA)

This may take a while if your computer isn’t decent enough. Once decompilation is done, there will be a list of classes:
![](https://lh5.googleusercontent.com/_BnkRYg6B2_PekBMBkFGpX7pmIQFiCHGziGZbMDmKWK0tF4RciGCV_SU02LKN2Urhi8tPyoUL6OXCXI4WtZN-NCpiBF371edmtShRSiBTNUOKgwcLeBi8BXQg1TG9tXmf4w68eDT8GYcZpyvqQ)

The class I’ve highlighted, `BlockButton`, is the class that needs to be renamed. Right click on it, click rename and rename it to something else, like  `LilypadBlockButton`:
![](https://lh6.googleusercontent.com/Gq0OXUOrg5rSIUdkxWMarYnJe5Loc6dlhS5BBXNYKn0OYpdYPUW7I6pOXppiHKDrfJF-GUKyUKMGWDu5Kmrenu0nfg869_wKR-NPnR4OEj_AlEA2z49T-_j1WimPuz47XEKuPgj1StnJ6nlwWg)
![](https://lh3.googleusercontent.com/2XEwNjQUefvCI4f11sy8wVLL-2Ee4TuGOQZF5pNy5Lj32HvyK-GmtOp0xuX-xUhrvndv-61hMkbNIfV2MIIPNbgOjZbaag1aaCAmtsNTHHwoxe2Jk8CsHmzZR8oc2gtoxkqLc1g3nfoPes5K_Q)
![](https://lh5.googleusercontent.com/iOOL-bdItHlQZx0YhSVYLxGXPV76P7mnGVNn0CWgNSgbacHh8S0R_03Ds6adpslnxjV65-YP-A2YavVDzSQgCj0RgfUwn4jci_py3GrkcO9taKTZX4Cpbt3qUR05Y8ixaaCVeDpQvbz514_f3A)

Now you can update the jar file by clicking on File > Export program:
![](https://lh6.googleusercontent.com/FdeCrA5p_tQkre296dtidMNvAGJAGkBb2CZTCYryhnbT1QMwfHSVOJIF1es99Fl5C90QYG-UHgIdfeMBhF6vN9AbyE53ju6JlvLYGgjshjEXRQWS_OfK2hadRmMpaygUDAQGS5M7ViWdpYwYuA)

## 3. Deobfuscating Lilypad
Once you have the modified jar, rename it to “minecraft.jar” and move it to the “jars” folder, replacing the vanilla jar. Now, type in the  `decompile`  command into RetroMCP-Java, sit back and relax. Hold on for a minute! Forget sitting back and relaxing! Compiler errors!
![](https://lh3.googleusercontent.com/f0J5MD3Agqr3ybiTwZFjIKfPCRXRgNfC53ajAlsZxSQmV5_O3twsVrk-pL1faZpRNqRPO-4SULMUwG2i7ky0TJ8JGwr7uDgb6yADY0YxTBjnehzkcl0IHD1N2-3W23pt53sV1-tF0Y-I6hjSrw)

If you are a Visual Studio Code user, you can take the time to delete the workspace folder (this folder is useful if you use the Eclipse IDE), rename RetroMCP-Java-all.jar to mcp.jar, [download this zip file](https://drive.google.com/file/d/1lqJgnaZ7Jm81tM3J-Ab9gekd-JCnKjiE/view?usp=sharing) and move all the files from the zip to your folder containing RetroMCP-Java. These files will speed up development. Here’s how it works:
* Run *Tasks*: Run Build Task on the command palette (Ctrl+Shift+P) to build Lilypad and run it.
* Run *Tasks*: Run Test Task on the command palette to close Lilypad, in case the X button does not work.
Feel free to edit the workspace settings if you’re not a fan of hiding files and file nesting. To open the folder in Visual Studio Code, right click on the explorer, select “Show more options” if you are using Windows 11 and click on “Open with Code”.

## 4. Fixing the source code
Decompiled source code isn’t always perfect. However, you can fix it. The source code is stored in the src/minecraft folder. The files are stored in the net/minecraft/src folder inside that folder unless otherwise stated. Here is how to fix it:
* In BlockFire.java, EntityChicken.java, ItemFlintAndSteel.java and RecipesWeapons.java, add `throws IOException`:
  * Before *(BlockFire.java)*:
    ![](https://lh4.googleusercontent.com/2BEyp2Oq8H3dqLWwclLD3waTk9BpZjaZf_7qONx8gjmV0HDbKx23OQA9lZVjDw3lsrNTt8C-4LtoSnu8F7iREknfnEerT32urCvc-XOqowhtLsYWgM53K_aciKSbJRgWsT0vsm6YH4lxtT-7zw)
  * After *(BlockFire.java)*:
    ![](https://lh3.googleusercontent.com/G_lRtJdnC1_mPJHUI-8q-COnc7LxHFiFNt07kXnyehkwj33VRzsCuj_r9xcenCKnp8iS_M7J1INGqcFhXeZFcFqJgK5Uk4VCQA8dp_8kKNUU7vRBILsOBakawvLkXRPAiQUMVZR0mcjeVAyWTQ)
  * Using the Extension Pack for Java makes this process easier. Press Ctrl+Period on the error squiggles and click on “Add throws declaration”:
    ![](https://lh3.googleusercontent.com/hVkPRDSqXNHQlZ4B1W5MCOC9oAnJjLpChjGUAi9vYu-2NySkZNHuZJwbsbnoiUrkIgOGJi6W8snvtX53NrUTNBzkYg-ecMK16hciB2dGvxCW1QEYEC-jjH24MB-7pC4lNpA50B2VbMwS5jyGwg)
  * Make sure to put in `import java.io.IOException;` at the top of each file.
* In ClassX.java, go to the bottom of the file to find `public static void a(NBTTagCompound nBTTagCompound0, DataOutput dataOutput1) {`  and add `throws IOException`:
  * Before:
    ![](https://lh6.googleusercontent.com/AaV1Yu1PHiTBzCd4MG7djPw2mwBHhefHfHsPAtFQ-FnNlXGEyZZQGUFUj0nmkNKlhi84JvHKnviBmdMiNNP8lAQglM5Jh_rAE5lwU_-lFhmlcGyLAzj4k61-mWYT4XrHI3CfPNtlaNnpt2utlA)
  * After:
    ![](https://lh6.googleusercontent.com/7ZqNtkwmftur19G1v48z_zT3K8tZwTv4nP9ZSpD67X374tHRGOyyrD4HIZppUfz0jjfvGMuepNbe-hHVcmT3dlRZBj0T8qgHDMDOjHdW4uc2IBgkc0A7C_n6ZKZPv3i6c-KGI0dtBr1J9AT5EQ)
* Delete BlockMinecartTrack.java. There is a duplicate that is used instead with the name “ClassIf”.
* In Minecraft.java (inside src/minecraft/net/minecraft/client), add in `InputHandler.mc = this;` after line 140:
  ![](https://lh4.googleusercontent.com/AKbT5Z4rPamqo-WFxjvB2oxfxM7weO5iKFn9Q9FbKk3DfgTCcsQjjEzv-exRCMobPy1XAH_-HrhEsNR4pdTGG21JjjaHE6SACsX6ELN7iV_e4P5TuXYJVOuU9gh3r9c03ueVQIMt4eIeBvyHyQ)

## 5. Running Lilypad
Before building the fixed source code, you should make a modification somewhere to confirm that it works. On line 262 in GuiIngame.java, there is a line of text that reads “Minecraft Alpha 1.0.16.05_13 Lilypad”. Replace that with anything you want:
![](https://lh6.googleusercontent.com/ryKZtZwFOjqIxK54Gd0_cdXxac0ruzT1NkGvENBWv9SBtJIqg4yn43vBoQ9a1gwZVwoedLIpiMhAxhPz-K6ISJ3HwsgeBq5KCn3R0-D9D79nRZDukW2dtnmSDkkNqXmuPxQ06afhEGpbCG9KMg)

After all of that, run the `build`  command. This time, you can actually sit back and relax.

![](https://lh5.googleusercontent.com/vkzYoIYYH7m4QaamxFWmePNbaw4GmSmqywV5aV1lU1ONBKU-nZ9sCJrMi7geP3VUKFzDHWBIh02YofpcyaG6PX8ao8bpJa7UW-0rjP6yHvV9ampbsYPdGnOVAvBAkVrEhaK6wOP1mOiaN9SrOg)

Don’t worry! You can still relax! That client.md5 error doesn’t stop you from playing with your modifications. It just means that you can’t share your modified jar file because it is not obfuscated. Now run the `startclient` command to start Minecraft Lilypad. Enter your key, join World 2 and… tada?

![](https://lh4.googleusercontent.com/Ptlc2y49ITwGEyW9jB40G5iUuhYdGD_JzfeK_vlnGeghCxaCaEbnl1eGgot0V-2jGr5_M5hW9rPDiwFMS81vLthSaI7fH_0cIKC2rjGSwqBkXZ8dLtXEkodvHpkF_80veIoa-NXFyavmRohy2w)

Don’t forget to turn on “Show FPS” in the settings!

![](https://lh4.googleusercontent.com/dBgMazTJ9FOBky2XH3tjDfr09czH5Du3gwalpkKtu4U8k8izCyesflAgyNayQ1aH30Iq9Pik3S3_F1rqQaW8qqKTruTVgw7K-n3_EiRndAxYLaQIE50NCf1mmp8VNYV8fn0TrNUn1vsRCqSMaw)

That’s more like it! Now you have your own version of Lilypad you can tinker around and mess around with! The number 2,147,483,647’s the limit! I hope this guide helps. If a new version comes out, the process should be similar. If you want to know some basic mods, read on. Otherwise, have fun modding!
