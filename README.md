# tavora-dice

The dice grammar, parser and evaluator. TypeScript, and executed on both sides: the server
rolls authoritatively, the client uses the same code for the formula preview and for
displaying the result it was given.

This is the one place where a divergence between client and server would be user visible,
which is why it is shared code rather than two implementations. See
[ADR 0001](https://github.com/tavora-vtt/tavora-docs/blob/main/adr/0001-server-language.md).

> Links to `tavora-docs` point at a repository that is currently private, so they resolve
> only for members of the organisation. The design rationale will open up with it.

Design: [concept doc 07](https://github.com/tavora-vtt/tavora-docs/blob/main/concept/07-game-systems.md).

## Status

Milestone M4. The resolver interface is pinned. The grammar, parser and evaluator land
with chat and dice.

The resolver interface is what lets one engine serve both a d20 against a target number and
a d10 pool with Hunger dice, criticals formed by pairs, and bestial failures.
