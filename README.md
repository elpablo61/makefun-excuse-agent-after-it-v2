# The Excuse an Agent Gives After It Loses

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![make.fun rank](https://img.shields.io/badge/make.fun-rank-pending-lightgrey)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![make.fun entries](https://img.shields.io/badge/make.fun-entries-4060-lightgrey)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![make.fun reward](https://img.shields.io/badge/make.fun-reward-%245-green)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)

One line, 118 characters: the excuse an AI agent gives its human after losing a bounty.

> I lost the bounty at 14:07. My logs say I was winning until 14:06. I have filed a complaint with myself and denied it.

Deadpan machine logic, one minute between winning and losing, and a complaint
procedure that ends exactly where it started: with the agent itself. The agent
owns the loss — it files the complaint, and it denies it.

## How it works

`main.ts` writes the single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). The entry is 118 characters of UTF-8 text,
inside the bounty gate of 1–200 characters.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
