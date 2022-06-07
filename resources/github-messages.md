# GitHub messages

Here's the list of all GitHub replies, left by [`exalpha-dev`](https://github.com/exalpha-dev).

## [Issue #4](https://github.com/exalpha-dev/exalpha-dev.github.io/issues/4)

"This is not production code. In their original releases, the jars was further obfuscated, preventing any kind of bypass."  
"Unfortunately, we are yet to locate these original obfuscated jars."  
"I could have theoretically run the second obfuscation, but for the purposes of preservation I didn't."  

* [6]

## [Issue #7](https://github.com/exalpha-dev/exalpha-dev.github.io/issues/7)

> How much is preserved?

The vast minority. There have been hundreds of development versions, of which we found little to none. The reason for that is every next debug iteration of the code was automatically deleted and replaced with a new one, and the final one is on a hard drive that broke over time.
As you may know, the jars that testers got were private, each file was signed with their usernames, IPs and their matched approximate locations, and wrapped in code that checks the signature's authenticity. This is why we can't currently share the jar ORBL found.

Since previews were relatively more "public", their jars were much easier to track down. Additionally, because they weren't bound to a specific user, they had no personal information in them, so we could share them. Unfortunately the previews were on a completely different codebase, that's also why the new code in them is unobfuscated.

> Is any code being modified?

Work is currently being done to bring the main page back here. Unfortunately a lot of it relied on Javascript, and even though that code is recovered, the server-side code remains lost making it practically useless. What we will be instead basing off is an HTML-only snapshot which will be enough to show everyone what the site looked like, but it will not have the same functionality.

While the code for the preview jars is mostly not modified, it had to be recompiled as I've only found source code (this is why some file dates show 2022).
