#!/usr/bin/env bash
# Resync addyosmani/agent-skills → .cursor/skills + references, puis auto-invoke cœur.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"
rm -rf agent-skills
git clone --depth 1 https://github.com/addyosmani/agent-skills.git agent-skills
rsync -a agent-skills/skills/ .cursor/skills/
rsync -a agent-skills/references/ .cursor/references/
"$ROOT/.cursor/scripts/enable-core-skill-auto-invoke.sh"
echo "Resync OK — $(git -C agent-skills rev-parse --short HEAD)"
