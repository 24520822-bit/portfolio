# Task Decomposition: HW1 Production Portfolio

## M1: WCAG 2.2 AA audit

- Goal: meet AA contrast ratios and expose proper landmarks
- Commit message: `fix|a11y: contrast & landmarks`
- Status: done, split across 2 commits
- Commits: 316568b (contrast fix), 2f678cd (landmarks added later)
- Verified: axe reported 1 issue (footer text contrast 3.85:1, required 4.5:1), now fixed. A manual review showed the page had no landmark elements, so header, nav, main and footer were added afterwards.
- Note: commit 316568b only fixed contrast even though its message mentions landmarks. Landmarks were added later in commit 2f678cd, which also contains the CSP changes and is not a separate commit.

## M2: Focus trap audit

- Goal: the whole page is usable with the keyboard only
- Commit message: `fix(nav): keyboard trap prevention`
- Status: done, split across 2 commits
- Commits: b067501 (aria-expanded, aria-controls, Esc closes the menu), f0fc597 (Esc only acts when the menu is open and returns focus to the menu button)
- Verified: walked through the page with Tab and Shift+Tab. No keyboard trap, focus is always visible, tab order is logical. Two gaps found: the menu button did not expose its open/closed state, and Esc did not return focus to the button.
- Note: there was no real keyboard trap; the changes improve keyboard accessibility.

## M3: Strict CSP, zero inline handlers

- Goal: no inline event handlers, no inline scripts or styles, strict CSP
- Commit message: `fix(security): strict CSP, remove inline handlers`
- Status: done
- Commits: 2f678cd (CSP meta tag, onclick removed from HTML), f0fc597 (click handler attached with addEventListener in script.js)
- Verified: no onclick or other inline handlers, no inline script or style. Console shows no CSP violations when served by a static server.
- Note: CSP is set through a meta tag, so frame-ancestors is left out because it has no effect there. Commit 2f678cd also contains the landmark changes, and commit f0fc597 also contains the Esc focus fix. Because the click handler was moved in a later commit, the menu button does not work at commit 2f678cd alone.

## M4: Lighthouse 100 audit

- Goal: Lighthouse score of 100
- Commit message: `perf: optimize assets`
- Status: not started
