[← Home Page](../README.md)

# Video #15: Feature testing
| Post Date  | Minecraft Version                                    | Length  | FPS    | Resolution | Youtube Link      |
| ---------  | ---------------------------------------------------- | ------- | -----  | ---------- | ----------------- |
| 2021-12-23 | Minecraft Alpha v1.0.16.05_13 Lilypad QA BUILD: DEV4 | 5:03:43 | 59.94  | 1280x720   | [Watch it here](https://www.youtube.com/watch?v=vUy0vS4RJZA) |

## Description
"This, I am pretty sure is the last version to ever exist. While you can see many new features, Lilypad was merely a bugfix release, most notably we fixed a bug with that sorting function that crashed the game often."

"As for the video itself, it shows [4] testing some of the new features added in version 12. He was a bit late to the party, but at the time he'd been busy with managing our site and bug tracker page."

"But that's not a development build, this is what we planned to hand out to the QA team."

"Speaking of the QA tests, we realised the 2 people from our team weren't quite enough to test all of the new features. And because we already had a 'closed' group of testers, we decided to let anyone who registers via email play it."


"what is this name at the top?"

"That's the name of the player's current area. [0] wanted every group of chunks you visit to feel unique, so that's what we settled on"

## Characters
* Player is dev4 because of the watermark.

## Anomalies
* The whole video is an anomaly:
  * Chunks have names, [this mechanic is explained here](../mechanics/chunk-names.md).
  * Glowing lilies/lilypads in the water, they can be placed on the ground and have an added ingredient
    * These lilies/lilypads are called [glowingFlower] in the source code, the generator is `OnWaterGen`.
    * Glowing sky things: glows green/teal and sets zombies on fire *(maybe other mobs too?)*.
    * Purple ingot: glows purple
  * Pillars sticking up from the ground, generator is referenced as `PillarGen`, the block is `saltBlock`.
  * Skeletons have a different head texture.
  * Upon dying, it will say "Milestone: X", [this mechanic is explained here](../mechanics/milestone.md).
* 0:32:19: Damage from an unknown source,
* 0:42:56: A blurred image, compression artifact?
* 0:47:56: 2. Blurred image.
  * 0:47:59: 2B. Blurred image.
* 01:33:46: 3. Blurred image.
* 01:45:51: 4. Blurred image.
  * 01:57:06: 5. Blurred image.
* 02:10:51: 6. Blurred image.
* 02:13:21: 7. Blurred image.
* 02:14:36: 8. Blurred image.
* 02:22:31: 9. Blurred image.
* 02:36:42: The player takes damage.
* 03:17:08: A gap.
  * This gap is around 9.032 seconds long.
* 03:47:55: The player takes damage, but no health is lost.
* 04:47:25: The player takes damage again.
* 04:57:06: 10. Blurred image.