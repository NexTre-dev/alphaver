# ! DISCLAMER !
* These files *might* contain malicious code, **run it at your own risk**.
* A installation of Java is required.
* I heavily recommend you use a secure environment to run these files, like virtual machines.
* Only run them if you are willing to accept the risks mentioned above.

## Usage (Windows, Mac)
1. Download MultiMC.
2. Extract the .zip
3. Open MultiMC, click on `Add Instance` at the top.
4. Select `Vanilla` at the left side, then select `1.0`,
   - Note: If this doesn't work for you, check `Alphas` at the right side, and select `a1.0.16` instead.
5. Click on `OK`.
6. Select the instance you just created.
7. Click on `Edit Instance` at the right side.
8. Click on `Version` at the left side.
9. Click on `Replace Minecraft.jar` at the right side.
10. Select the jar file you downloaded from this page.
11. Click on `Launch` at the bottom.

## Usage (Ubuntu, Debian)
1. Download the .deb from MultiMC
2. Do `sudo dpkg -i package_file.deb`
   - Note: What ever you named your package is what you put for package_file.deb
3. Open MultiMC, click on `Add Instance` at the top.
4. Select `Vanilla` at the left side, then select `1.0`,
   - Note: If this doesn't work for you, check `Alphas` at the right side, and select `a1.0.16` instead.
5. Click on `OK`.
6. Select the instance you just created.
7. Click on `Edit Instance` at the right side.
8. Click on `Version` at the left side.
9. Click on `Replace Minecraft.jar` at the right side.
10. Select the jar file you downloaded from this page.
11. Click on `Launch` at the bottom.

## Usage (Arch)
1. Setup your Archinstall to be able to build packages.
    - For instructions: https://wiki.archlinux.org/title/Makepkg#Usage
2. Create your directory using `mkdir multimc-pkgbuild` and go to your folder via `cd multimc-pkgbuild`
3. Install the build file via `wget https://raw.githubusercontent.com/MultiMC/multimc-pkgbuild/master/PKGBUILD` and build it by `makepkg -si`
4. Open MultiMC, click on `Add Instance` at the top.
5. Select `Vanilla` at the left side, then select `1.0`,
   - Note: If this doesn't work for you, check `Alphas` at the right side, and select `a1.0.16` instead.
6. Click on `OK`.
7. Select the instance you just created.
8. Click on `Edit Instance` at the right side.
9. Click on `Version` at the left side.
10. Click on `Replace Minecraft.jar` at the right side.
11. Select the jar file you downloaded from this page.
12. Click on `Launch` at the bottom.
