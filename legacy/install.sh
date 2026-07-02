#!/usr/bin/env bash
# Founder Skills — Universal Installer
# Supports: pi, Codex
# Usage: bash scripts/install.sh [agent] [phase]
# Compatibility implementation lives in legacy/.
#
# Examples:
#   bash scripts/install.sh pi          # Install all skills for pi
#   bash scripts/install.sh codex       # Generate Codex AGENTS.md entry
#   bash scripts/install.sh pi strategy # Install only the strategy phase for pi

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SKILLS_DIR="$REPO_DIR/legacy/skills"

AGENT="${1:-}"
PHASE="${2:-all}"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_usage() {
  echo "Usage: bash scripts/install.sh [agent] [phase]"
  echo ""
  echo "Agents:  pi | codex"
  echo "Phases:  all (default) | strategy | design | build | launch | compound | pmf | scale | partner"
  echo ""
  echo "Examples:"
  echo "  bash scripts/install.sh pi              # All skills for pi"
  echo "  bash scripts/install.sh codex           # Generate legacy/codex/AGENTS.md"
  echo "  bash scripts/install.sh pi strategy     # Only Strategy phase for pi"
}

if [ -z "$AGENT" ]; then
  print_usage
  exit 1
fi

# Collect skill directories to install
get_skill_dirs() {
  local phase="$1"
  if [ "$phase" = "all" ]; then
    find "$SKILLS_DIR" -name "SKILL.md" -exec dirname {} \;
  else
    find "$SKILLS_DIR/$phase" -name "SKILL.md" -exec dirname {} \; 2>/dev/null || {
      echo -e "${RED}Phase '$phase' not found. Available: strategy, design, build, launch, compound, pmf, scale, partner${NC}"
      exit 1
    }
  fi
}

# ─── PI INSTALL ───────────────────────────────────────────────────────────────
install_pi() {
  local pi_skills_dir="$HOME/.pi/agent/skills"
  mkdir -p "$pi_skills_dir"

  echo -e "${BLUE}Installing for pi → $pi_skills_dir${NC}"
  echo ""

  local count=0
  while IFS= read -r skill_dir; do
    local skill_name
    skill_name=$(basename "$skill_dir")
    local dest="$pi_skills_dir/$skill_name"

    if [ -d "$dest" ]; then
      echo -e "  ${YELLOW}↺ updating${NC} $skill_name"
    else
      echo -e "  ${GREEN}+ installing${NC} $skill_name"
    fi

    mkdir -p "$dest"
    cp -r "$skill_dir"/. "$dest/"
    count=$((count + 1))
  done < <(get_skill_dirs "$PHASE")

  echo ""
  echo -e "${GREEN}✓ $count skills installed for pi${NC}"
  echo ""
  echo "To use a skill in pi, say:"
  echo "  /skill [skill-name]"
  echo "  or simply describe what you need — pi will route to the right skill"
}

# ─── CODEX INSTALL ───────────────────────────────────────────────────────────
install_codex() {
  local codex_dir="$REPO_DIR/legacy/codex"
  mkdir -p "$codex_dir"

  echo -e "${BLUE}Generating Codex AGENTS.md → $codex_dir/AGENTS.md${NC}"
  echo ""

  local agents_file="$codex_dir/AGENTS.md"
  cat > "$agents_file" <<'AGENTS_HEADER'
# Founder Skills — Codex Integration

Add this file's contents to your project's `AGENTS.md` file,
or reference it via your Codex system prompt.

## Available Skills

Each skill below can be invoked by name. When invoking a skill:
1. Read the SKILL.md file for that skill from the legacy/skills/ directory
2. Follow the instructions in order (sequential — no parallel subagents)
3. Write only the output file(s) specified in the skill
4. Do not write any other files

---

AGENTS_HEADER

  while IFS= read -r skill_dir; do
    local skill_name
    skill_name=$(basename "$skill_dir")
    local phase
    phase=$(basename "$(dirname "$skill_dir")")
    local description
    description=$(grep "^description:" "$skill_dir/SKILL.md" | head -1 | sed 's/description: //')

    echo "### $skill_name" >> "$agents_file"
    echo "**Phase:** $phase" >> "$agents_file"
    echo "$description" >> "$agents_file"
    echo "**Invoke with:** \"Use the $skill_name skill\"" >> "$agents_file"
    echo "**SKILL.md path:** legacy/skills/$phase/$skill_name/SKILL.md" >> "$agents_file"
    echo "" >> "$agents_file"
  done < <(get_skill_dirs "$PHASE")

  local count
  count=$(get_skill_dirs "$PHASE" | wc -l | tr -d ' ')

  echo -e "${GREEN}✓ AGENTS.md generated with $count skills${NC}"
  echo ""
  echo "Add the contents of $agents_file to your project's AGENTS.md"
  echo "or reference it in your Codex system prompt."
}

# ─── ROUTER ──────────────────────────────────────────────────────────────────
case "$AGENT" in
  pi)
    install_pi
    ;;
  codex|openai)
    install_codex
    ;;
  help|--help|-h)
    print_usage
    ;;
  *)
    echo -e "${RED}Unknown agent: $AGENT${NC}"
    echo ""
    print_usage
    exit 1
    ;;
esac
