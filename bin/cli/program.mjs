import { Command, Option } from "commander";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { registerCommands } from "./commands/registry.mjs";
import { t } from "./i18n.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(__dirname, "..", "..", "package.json"), "utf8"));

export function createProgram() {
  const program = new Command();
  const progName = process.env.OMNIROUTE_LITE === "1" ? "omliteroute" : "omniroute";
  const progDesc = process.env.OMNIROUTE_LITE === "1"
    ? "OmliteRoute — Ultra-lightweight AI Gateway & Model Router"
    : t("program.description");

  program
    .name(progName)
    .description(progDesc)
    .version(pkg.version, "-v, --version", t("program.version"))
    .addOption(
      new Option("--output <format>", t("program.output"))
        .choices(["table", "json", "jsonl", "csv"])
        .default("table")
    )
    .addOption(new Option("-q, --quiet", t("program.quiet")))
    .addOption(new Option("--no-color", t("program.no_color")))
    .addOption(new Option("--timeout <ms>", t("program.timeout")).default("30000"))
    .addOption(
      new Option("--api-key <key>", t("program.api_key"))
        .env(process.env.OMNIROUTE_LITE === "1" ? "OMLITEROUTE_API_KEY" : "OMNIROUTE_API_KEY")
    )
    .addOption(
      new Option("--base-url <url>", t("program.base_url"))
        .env(process.env.OMNIROUTE_LITE === "1" ? "OMLITEROUTE_BASE_URL" : "OMNIROUTE_BASE_URL")
    )
    .addOption(
      new Option(
        "--context <name>",
        t("program.context") || "Server context/profile to use for this command"
      ).env(process.env.OMNIROUTE_LITE === "1" ? "OMLITEROUTE_CONTEXT" : "OMNIROUTE_CONTEXT")
    )
    .addOption(new Option("--lang <code>", t("program.lang")))
    .showHelpAfterError(true)
    .exitOverride();

  registerCommands(program);
  return program;
}
