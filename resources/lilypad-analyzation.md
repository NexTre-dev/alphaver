[← Home Page](../README.md)

## Lilypad Analyzation
| Upload date  | File Size |
| -----------  | --------- |
| 2022-04-16   | 24.2 MB   |

### Gameplay & Other Stuff
* There is now a watermark: `QA BUILD: <username>`,
* A new gamemode *(or difficulty, whatever)*, `Frail Mode`:
  * This must be set before creating the world,
  * [Milestones](../../mechanics/milestone.md)
* Cheats are already enabed.
  * You can now summon a new block: `120`.
  * Entering 3 codes gives a code in the minecraft log:
    `ab99d76f9a4c41a0f3591b122bbc985c`
    * This is the code to [PH1.rar](#ph1.rar).
* The lilypads can be activated with gold, the blue fire and obsidian ingots.
  * Obsidian does the most damage to zombies and giants, blue fire does the least and there doesn't seem to be any other interactions.
* There exists a pillar in World 2.
  * The coordinates are `392 98 -356`.
  * This matches the location of [s3.png]().
  * Has items at the bottom of the pillar, presumably because someone jumped off.
  <img src="https://lh3.googleusercontent.com/ivtighB_YOEKPL4_P4oK0I89YOyyPRVhY0yt4HjywgEi5RdHwK2W8QAMhCqEaeS_W7QFlJwbhX5XYlSMuLC1gtFXiC7R_LkwDeElhNX5Od8yZgDzcv_ZXmCocG9UOFq8AaC6M-_kAwI59DYjZKM8nw" width="300">

### Decompilation
* The client jar can be decompiled by any decompiler.
* ly.class features a line of code:
  * `public static final ly imgur9F0A3un = new ly(102, 157, gb.d).c(2.0f).b(10.0f).a(i)`
  * The variable name is a link to an imgur image.
  * https://imgur.com/9F0A3un.
  <img src="https://i.imgur.com/9F0A3un.png" width="300">

### Newsound
Some sound effects this version includes.
#### Ambience
* cave1.ogg
  * 0:09.024, stereo, 44.1 kHz sample rate
  * [🔊 Listen here](https://drive.google.com/file/d/1HO0QjCTAc0-XlByMJ_roKfs7w9fGy3Mx/view?resourcekey)
* cave2.ogg
  * 0:06.177, mono, 22.05 kHz sample rate
  * [🔊 Listen here](https://drive.google.com/file/d/1dB0zTpmNn0PhFf8mCoKnds5oyoAB_sFC/view?resourcekey)
* cave3.ogg
  * 0:15.995, mono, 22.05 kHz sample rate
  * [🔊 Listen here](https://drive.google.com/file/d/1Lg7ENJMsFzSNIQ69I_OkTOZc4Lb7zXhJ/view?resourcekey)
* cave4.ogg
  * 0:08.944, stereo, 22.05 kHz sample rate
  * This one is *almost* a palindrome
  * [🔊 Listen here](https://drive.google.com/file/d/1EU7ohsJdhG0Z7zipXztYleJKPFxvIkOo/view?resourcekey&usp=slides_web)

### PH1.rar
| Found in        | File Size | Password Protected?                                      |
| --------------  | --------- | -------------------------------------------------------- |
| lilypad_qa.jar  | 638 bytes | Yes, the password is `ab99d76f9a4c41a0f3591b122bbc985c`. |

#### File Comment
> "This is [RD]"  
> "I swear to god, this is [RD]"  
> "The version code is different, but this is what we knew as [RD]"
> 
> "This is where we took the features from"  
> "to implement into 16.05"
> 
> "Why does it say 04 though?"  
> "What the hell is this"

#### Files
There is only one file, **stdout.txt**, it contains a youtube link to [the video ????](../videos/question-mark.md).

### PH2.rar
| Found in        | File Size | Password Protected?                                                                      |
| --------------  | --------- | ---------------------------------------------------------------------------------------- |
| lilypad_qa.jar  | 3.45 MB   | Yes, the password is `c74329a1eef811c3affedba7645099d10c0f6441b78f73a893ccb405abe319ab`. |

#### Files
| File Name    | File Size |
| ------------ | --------- |
| content.rar  | 3.6 MB    |
| 40_0.txt     | 371 bytes |

<details open><summary>

### 40_0.txt
</summary>

```txt
"You can't tell me none of you have noticed it.

The weird buildings people have been posting on the internet?
[...]
There are not many of these posts, but they all seem consistent
on top of that, we may have a record of the very thing happening in our own branch,
if we can even call it that.

Is [0] behind this too?"

"What the hell"
```
</details>

### content.rar
| Found in | File Size | Password Protected?                                                                      |
| -------  | --------- | ---------------------------------------------------------------------------------------- |
| PH2.rar  | 3.6 MB    | Yes, the password is `65d9ac073f4da8453b9ad134a137620a816579be10b5e561ab2d3d098d5d0f4e`. |

#### Files
| File Name                               | File Size |
| --------------------------------------- | --------- |
| 39_0.txt                                | 134B      |
| f\*\*\*.mp4                             | 3.9 MB    |
| image0.png                              | 102KB     |
| image1.png                              | 70KB      |
| image2.png                              | 173KB     |
| image3.png                              | 111KB     |
| image4.png                              | 188KB     |
| image5.png                              | 53KB      |
| image6.png                              | 303KB     |
| image7.png                              | 70KB      |
| Screenshot_at_2022-01-13_12-13-01.png   | 545KB     |

<details open><summary>

### 39_0.txt

| Found in     | File Size |
| -----------  | --------- |
| content.rar  | 134B      |
</summary>

```txt
MINECRAFT ALPHA 1.0.16 VERSIONS
created 2021-2022

Thank you to everyone involved, incl. playtesters
- from lead dev

16.04.2022
```
</details>

<details open><summary>

### f***.mp4[^1]

| Found in     | File Size |
| -----------  | --------- |
| content.rar  | 3.9MB     |
</summary>

https://user-images.githubusercontent.com/89975834/170937701-b343ab3d-838e-4861-962d-480dccde7800.mp4
</details>

<details open><summary>

### image0.png

| Found in     | File Size | Dimensions   |
| -----------  | --------- | ------------ |
| content.rar  | 102KB     | 436 x 276    |
</summary>
<img src="https://lh4.googleusercontent.com/0DiyibFpVodaDxAYXE6SM-DPbO6as-ZfJn7YO0N9sGvS0qeCk8yoWhRrkCNxRZBEAHfynGzObdfblP1ZeqW1LUCg0kua7GtJxUwTkOP2HaBuaGFUNyp_AjSq8Nli0F2sh_IS9liWAnAsGuVfCNQ6WQ" width="400"/>
</details>

<details open><summary>

### image1.png

| Found in     | File Size | Dimensions   |
| -----------  | --------- | ------------ |
| content.rar  | 70KB      | 422 x 250    |
</summary>
<img src="https://lh4.googleusercontent.com/9pxrx7VVOA7K8Q7Jh_BJlMCE9hiL6sQ6ZI9B9qkMF_MEMGaEnx4i45aRxgJ0uyPVeenxnHlhCeHNyt5wGAGngVwQEDl9DcyHMwYvJlU4LByLjWvPecAjfeZw-34r8DlN8rTbzqwhvGdp0iQ2j0ILWw" width="400"/>
</details>

<details open><summary>

### image2.png

| Found in     | File Size | Dimensions   |
| -----------  | --------- | ------------ |
| content.rar  | 173KB     | 431 x 285    |
</summary>
<img src="https://user-images.githubusercontent.com/89975834/170946175-91a04446-10e3-4192-91a7-2d20788f0e01.png" width="400"/>
</details>

<details open><summary>

### image3.png[^1]

| Found in     | File Size | Dimensions   |
| -----------  | --------- | ------------ |
| content.rar  | 111KB     | 423 x 267    |
</summary>
<img src="https://user-images.githubusercontent.com/89975834/170943887-0bd59a29-0700-4d20-91dd-1c1cb599530f.png" width="400"/>

[*open original*](https://lh5.googleusercontent.com/D-uqdIfG9YKFnKnx1rPOc-tQhFPlpn6ft29AcsmvpHnvUaF4s43ImwobldKdRzWp-yNqZcaYx_ObauFQb-_TokcNQOr_u6LCEA-HL1CqTGLMIhR8EPu11QfkDTmBRL_xkU8nuqAkK3p_UidJfpuu5Q)
</details>

<details open><summary>

### image4.png

| Found in     | File Size | Dimensions   |
| -----------  | --------- | ------------ |
| content.rar  | 188KB     | 396 x 368    |
</summary>
<img src="https://lh6.googleusercontent.com/rEyUWBQ4USNCwV7kfa5yPs_NmfnOKWumwu5vammbeoWf_8I6EYTJzCbQss3OHCjyrwWE5dUZIJpRPuK9C8qmsabFxc42q20nkYj9mIBWNF9wqZORzS3w8OGJQO-q7QQVbwDYXDiPmJvCTcIrS6QVHg" width="400">
</details>

<details open><summary>

### image5.png

| Found in     | File Size | Dimensions   |
| -----------  | --------- | ------------ |
| content.rar  | 53KB      | 439 x 266    |
</summary>
<img src="https://lh6.googleusercontent.com/r3_3l7mMhySrMp7hL_bPgWPZN2HnXS7KkczRu9Z84lT_QrGTtZMPbE8zrGz-YUjNseJlEIL7pbApFOIY-Jgysk9_LHnpKo01lm4_3GOZPJ1hCa4WlVG4g1y4LhxC8IHsee1Pbl4VEDd-RUeIPjY0KA" width="400">
</details>

<details open><summary>

### image6.png

| Found in     | File Size | Dimensions   |
| -----------  | --------- | ------------ |
| content.rar  | 303KB     | 628 x 464    |
</summary>
<img src="https://lh5.googleusercontent.com/xgGs8-QhYF7dJALd4yXlqQcT6t9b-PbpFiMoAzEJ5isLvJmq3AT_HJS885o66ZerxzPmvuK1RLbHIFNDAi_oE6aNSFqC352JrQ2SgNRzKibDclZsfaSk3bfMp5s8m3B1NsBcKucR_dqrba1rw6QV5g" width="400">
</details>

<details open><summary>

### image7.png

| Found in     | File Size | Dimensions   |
| -----------  | --------- | ------------ |
| content.rar  | 70KB      | 425 x 244    |
</summary>
<img src="https://lh5.googleusercontent.com/_qZ60-_jD8f1t4z_sAYN-0b1KW4GJmeJuxTcKke18iKPHvYx6djWXCcxKZ0zKahmRreHWczMKu0jF37EHhDj7FPezh85Y-c1ptbVeiwq04r58X5KrZIa_JV7RqLVL9j0mwowAxJcj8Cb-8TMLNpGiw" width="400">
</details>

<details open><summary>

### Screenshot_at_2022-01-13_12-13-01.png

| Found in     | File Size | Dimensions   |
| -----------  | --------- | ------------ |
| content.rar  | 545KB     | 1920 x 1080  |
</summary>
<img src="https://lh5.googleusercontent.com/MMv1aMPaqtKBbvs6fIirxDWlZoZT70QNgQ_185nmtDXfh-R_ppicc_W0QgD4v8LFdrt17ka2ua-zWDDhuQHFBcmZh-fVhjsAA3pG0JY6HgmfkzxBCHQ24PT77SNH1KOvy3psqBXua4cwRZkYdkOdFg" width="400">
</details>

[^1]: Censored
