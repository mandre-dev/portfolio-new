#!/bin/bash
# ============================================================
#  setup-vps.sh — Setup completo para Next.js na VPS
#  Execute como root na primeira vez
# ============================================================
set -e

DOMAIN="seudominio.com"
APP_DIR="/var/www/portfolio"
REPO="https://github.com/SEUUSERNAME/portfolio.git"

echo "🚀 Iniciando setup da VPS para Next.js..."

# ── 1. Sistema ────────────────────────────────────────────────
apt update && apt upgrade -y
apt install -y curl git nginx certbot python3-certbot-nginx ufw

# ── 2. Node.js 20 via NVM ────────────────────────────────────
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"
nvm install 20
nvm use 20
nvm alias default 20
echo "✅ Node.js $(node -v) instalado"

# ── 3. PM2 ───────────────────────────────────────────────────
npm install -g pm2
pm2 startup systemd -u root --hp /root
echo "✅ PM2 instalado"

# ── 4. Clone do repositório ───────────────────────────────────
mkdir -p $APP_DIR
git clone $REPO $APP_DIR
cd $APP_DIR
npm ci
npm run build
echo "✅ App clonado e buildado"

# ── 5. Inicia com PM2 ────────────────────────────────────────
pm2 start ecosystem.config.js
pm2 save
echo "✅ App rodando via PM2"

# ── 6. Nginx ─────────────────────────────────────────────────
cp $APP_DIR/nginx.conf /etc/nginx/sites-available/portfolio
ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx
echo "✅ Nginx configurado"

# ── 7. SSL ───────────────────────────────────────────────────
certbot --nginx -d $DOMAIN -d www.$DOMAIN \
  --non-interactive --agree-tos -m seu@email.com
echo "✅ SSL configurado"

# ── 8. Firewall ──────────────────────────────────────────────
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
echo "✅ Firewall configurado"

# ── 9. Logs ──────────────────────────────────────────────────
mkdir -p /var/log/pm2

echo ""
echo "🎉 Setup completo!"
echo "🌐 Acesse: https://$DOMAIN"
echo ""
echo "📋 Próximos passos:"
echo "  1. Adicione os secrets no GitHub:"
echo "     VPS_HOST  = IP ou domínio da VPS"
echo "     VPS_USER  = root (ou seu usuário)"
echo "     VPS_SSH_KEY = chave SSH privada"
echo "  2. Push para main → deploy automático!"
echo ""
echo "📊 Comandos úteis:"
echo "  pm2 status           → status do app"
echo "  pm2 logs portfolio   → ver logs"
echo "  pm2 reload portfolio → reload sem downtime"
