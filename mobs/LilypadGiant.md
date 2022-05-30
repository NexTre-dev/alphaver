[← Home Page](../README.md)

# Giant (Lilypad)
Giants are a boss mob added in Lilypad, and are currently the only boss mob. They are distinct from the unused giants in vanilla. They are colossal zombie-like figures, with large amounts of health and attack power. Defeating giants gives rare loot not obtainable elsewhere.

## Info
A giant's health is four multiplied with the amount of [milestones](../mechanics/milestone.md) a player has accrued over the course of their world, up to a limit of 800 health. If the player has no milestones, the giant will spawn as if the player had one. Giants have an attack strength of 50.

Giants make low rumbling noises when idle, and emit a higher rumble upon death. Giants have no hurt sound.

## Behavior
Giants have basic zombie-like AI, and will move directly towards the player in order to harm them.

## Spawning
Giants only spawn in singleplayer and while no other giants are present. Giants do not spawn in Peaceful mode, and existing giants will despawn upon selecting Peaceful mode. Upon spawning, giants are assigned a random name matching the chunk they spawned in. This name is displayed on a healthbar visible the the player from any location.

In order for a Giant to spawn, the game calculates the following:
   - The last x-position the player was in when the last giant was spawned, divided by 32 and rounded down.
   - The last y-position the player was in when the last giant was spawned, divided by 32 and rounded down.
  
Once these positions are calculated, the game checks the following:
- If the calculated x-position is inequal to the player's current x-position, divided by 32 and rounded down.
- If the calculated y-position is inequal to the player's current z-position, divided by 32 and rounded down.
  
  Effectively, this means that, in order to spawn a new giant, the player must travel at least 64 blocks away on the x axis from the last player location of a giant spawn, or be far enough (a few chunks) away along the z-axis from this location.

If any of these two conditions are met, a giant has a 90% chance of spawning every tick. Additionally, this 90% chance can be bypassed if the player presses the `End` Key while these conditions are met. Doing so will output the following message to the output stream: `Taken the Titan's challenge. Good luck.` Besides this message, spawning using this method has no other differences than a natural spawn.

[comment]: # (literally everything in this section is untested and i just looked at the code to write this up. )

## Drops
Upon death, giants have an 80% chance to drop a single [Flameberge](../items/flameberge.md).

[comment]: # (just replace this link if a flameberge article is placed in another location)

## Notes
- Giants have two unused hurt sounds, consisting of loud thuds. Neither sound plays in-game.
- Giants share a model and their size with vanilla giants, being zombies scaled up by a factor of six - however, unlike vanilla giants, they have a unique texture.
- Giants' hitbox only covers approximately their legs and lower torso; they will not register damage above this point.