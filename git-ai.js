const { execSync } = require("child_process");

function run(cmd) {
  return execSync(cmd, { encoding: "utf-8" }).toString().trim();
}

// pega mudanças reais
const status = run("git status --porcelain");

if (!status) {
  console.log("🟡 Nada para commitar");
  process.exit(0);
}

console.log("📦 Mudanças detectadas:");
console.log(status);

// IA simples baseada em arquivos
let type = "chore";
let scope = "system";

if (status.includes("auth") || status.includes("middleware")) {
  type = "fix";
  scope = "auth";
} else if (status.includes("page") || status.includes("footer") || status.includes("ui")) {
  type = "style";
  scope = "ui";
} else if (status.includes("prisma") || status.includes("schema")) {
  type = "chore";
  scope = "db";
} else if (status.includes("bookings")) {
  type = "feat";
  scope = "booking";
} else {
  type = "chore";
  scope = "system";
}

const message = `${type}(${scope}): auto update`;

console.log("🤖 Commit gerado:", message);

try {
  run("git add .");
  run(`git commit -m "${message}"`);
  run("git push origin main");

  console.log("🚀 Commit enviado com sucesso!");
} catch (err) {
  console.log("❌ Erro ao commitar:", err.message);
}