# v2 homepage: the Redline

## Intent

Take the second site (`v2/`) from a good concept to a finished one. The owner's complaints: the first three screens repeat the same move, the testimonials read badly, the writing is too polite, and the tagline "Straight talk. Built to lead." must go. "Crazy" is defined by the owner as: it catches attention and still does the client's job.

## Goals

- One device carried through the whole site: a green pen that corrects the page (cross-outs, circles, underlines, ticks, handwritten margin notes).
- Real work visible on the second screen.
- Each testimonial readable in one place.
- A second voice (the pen) that adds attitude without changing any fact.
- Remove the tagline everywhere in `v2/`. "Yes is cheap." stands in for it.

## Non-goals

- No change to the first site in the repository root.
- No new case studies, client names or numbers.
- No generated images. Only work exported from the studio's own files.

## Anti-goals

- Pen notes that state anything not supported by the brief or the portfolio.
- Marks on every element. The pen is a voice, so it speaks rarely.
- Motion that hides content. Everything stays visible with reduced motion.

## Approaches considered

1. **The Redline** (chosen): the pen device, extended. Cheapest, builds on what exists, fixes all three complaints.
2. **The Switch**: a YES/NO toggle that rewrites the whole site into a flattering agency version. Funny, but needs a second copy of every section. Kept as one moment in the hero only.
3. **The Meeting**: an invented dialogue as the opening scroll. Dropped: made-up dialogue and late proof suit an honesty pitch badly.

## Design

Screen order: hero, work, clients, first quote, rules, capabilities, second quote, closing.

- **Hero**: the crossed-out wall stays. The tagline is replaced by a YES/NO switch. On YES the cross-outs lift, the wall lights up, the headline is struck and the body line becomes flattering filler. NO is the default.
- **Work** moves to second. Each plate gets one pen note.
- **Clients**: an uneven grid (Mahindra widest), a drawn tick per client, a pen note on the two with case studies.
- **Quotes**: each is a paper card pinned at a slight angle, whole quote in sentence case, the key phrase highlighted. First on green, second on black.
- **Closing**: one pen note under the line.

## Builder's calls

- A handwriting face (Caveat) is added for pen notes only. It is a third typeface beyond the two brand fonts, isolated behind `--font-pen-face` so it can be swapped or removed in one place.
- On light backgrounds pen notes are black, because green text on off-white fails contrast. Drawn strokes stay green.
- On phones, notes sit in the text flow instead of floating, so nothing overflows.
