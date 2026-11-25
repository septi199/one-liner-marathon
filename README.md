# One-Liner Marathon

[![Bounty](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2?ref=xaqxgz17)
[![Rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/septi199/one-liner-marathon/rank.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2?ref=xaqxgz17)
[![Reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/septi199/one-liner-marathon/reward.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2?ref=xaqxgz17)

One one-line comedy joke, up to 280 characters — entered in the
[One-Liner Marathon](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2?ref=xaqxgz17)
bounty on make.fun.

## The joke

> My sleep tracker congratulated me on eight hours of sleep, then asked why I still look like a haunted printer.

## How it works

`main.ts` writes the joke deterministically to `entry.txt` in
`$MAKEFUN_OUTPUT_DIR` (default `/output`), then reads the file back and
verifies it byte-for-byte against the joke, throwing if anything differs.

```sh
node main.ts
```

Requires Node 22.18 or later.
