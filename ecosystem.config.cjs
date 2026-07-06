/**
 * PM2 ecosystem — Lending Bridge production
 *
 * Usage on EC2:
 *   pm2 start ecosystem.config.cjs
 *   pm2 save
 */
module.exports = {
  apps: [
    {
      name: "leading",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000 -H 127.0.0.1",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 15,
      min_uptime: "30s",
      restart_delay: 5000,
      max_memory_restart: "600M",
      kill_timeout: 8000,
      listen_timeout: 15000,
      time: true,
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
