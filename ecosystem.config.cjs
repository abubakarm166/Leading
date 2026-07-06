/**
 * PM2 ecosystem — Lending Bridge production
 *
 * Usage on EC2:
 *   cd ~/Leading
 *   pm2 delete leading 2>/dev/null || true
 *   pm2 start ecosystem.config.cjs
 *   pm2 save
 */
const path = require("path");

module.exports = {
  apps: [
    {
      name: "leading",
      cwd: __dirname,
      script: "npm",
      args: "run start",
      interpreter: "none",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 10,
      min_uptime: "60s",
      restart_delay: 10000,
      max_memory_restart: "700M",
      kill_timeout: 10000,
      listen_timeout: 30000,
      time: true,
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: path.join(__dirname, "logs/pm2-error.log"),
      out_file: path.join(__dirname, "logs/pm2-out.log"),
      env: {
        NODE_ENV: "production",
        PORT: "3000",
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
