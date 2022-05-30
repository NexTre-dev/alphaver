[← Home Page](../README.md)

# Chunk Names (Lilypad)
In Lilypad, every chunk has a unique name that is assigned to them, these names are also shown in the posted videos.
Turns out, the implementation has some quirks that makes it independent to the world's seed, with some math and bruteforcing, we can reverse any name to a list of few possible coordinates.

The chunk names mainly consist of two parts, seperated by a dash *(-)*.  
There is a chance that there might be no dash, when you are near spawn, in that case, everything is found in the second part.

The parts consist of [46 (45, excluding `TEST`) syllables](syllables.txt), they are all generated from that list.
Let's say that the first part of the name consists of 1 syllable, `JA`. That means that the distance between the current chunk's coordinates and 0,0 is 3x4¹. This means just with the first part, we already have a super small search space.

The second part of the name always consists of 3 syllables, I basically ported the original generation code over. I'm just bruteforcing it, but the search space is so small that it takes no time to finish.

You should notice that the seed doesn't come into play when we calculate chunk names. In the original code, the world seed is passed to the name generation method as an argument, but it's not used in any way. This might be a coding error, or an intentional decision to make searching for coordinates possible.