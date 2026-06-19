#!/usr/bin/env node
import { installPlugins, parsePluginSource } from "./gitLoader.js"
import fs from "fs"
import YAML from "yaml"
import path from "path"

async function main() {
  const configPath = path.join(process.cwd(), "quartz.config.yaml")
  const defaultConfigPath = path.join(process.cwd(), "quartz.config.default.yaml")

  let config: any = { externalPlugins: [] }
  if (fs.existsSync(configPath)) {
    config = YAML.parse(fs.readFileSync(configPath, "utf-8"))
  } else if (fs.existsSync(defaultConfigPath)) {
    config = YAML.parse(fs.readFileSync(defaultConfigPath, "utf-8"))
  }

  const externalPlugins = config.plugins
    ? config.plugins
        .filter((p: any) => typeof p.source === "string")
        .map((p: any) => p.source)
    : []

  if (externalPlugins.length === 0) {
    console.log("No external plugins to install.")
    return
  }

  console.log(`Installing ${externalPlugins.length} plugin(s) from Git...`)

  const specs = externalPlugins.map((source: string) => parsePluginSource(source))
  const installed = await installPlugins(specs, { verbose: true })

  if (installed.size === externalPlugins.length) {
    console.log("✓ All plugins installed successfully")
  } else {
    console.error(`✗ Only ${installed.size}/${externalPlugins.length} plugins installed`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error("Failed to install plugins:", err)
  process.exit(1)
})
