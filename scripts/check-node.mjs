const major = Number(process.versions.node.split(".")[0] || 0);

if (Number.isNaN(major)) process.exit(0);

// On some Windows setups, Node 24+ can fail to spawn child processes with IPC (fork),
// which Next.js relies on for dev/build. Provide a clear, actionable message.
if (major >= 24) {
  // eslint-disable-next-line no-console
  console.error(
    [
      "",
      "This project requires Node.js < 24 (recommended: Node 22 LTS).",
      "",
      `Detected Node.js ${process.versions.node}.`,
      "",
      "Fix:",
      "- Install Node 22 LTS",
      "- Reopen your terminal",
      "- Run: npm.cmd run dev",
      ""
    ].join("\n")
  );
  process.exit(1);
}

