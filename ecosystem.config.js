// ecosystem.config.js — PM2 process manager
module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/var/www/portfolio',

      // Cluster mode = zero downtime reload
      instances: 2,
      exec_mode: 'cluster',

      // Auto-restart on crash
      autorestart: true,
      max_restarts: 10,
      restart_delay: 3000,

      // Memory limit (restart if exceeded)
      max_memory_restart: '300M',

      // Environment
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },

      // Logs
      out_file: '/var/log/pm2/portfolio-out.log',
      error_file: '/var/log/pm2/portfolio-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
}
