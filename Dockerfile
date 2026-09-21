# ==========================================
# Stage 1: Build static assets
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy project files
COPY package.json ./
COPY src/ ./src/
COPY public/ ./public/
COPY build.js ./

# Run SSG build
RUN node build.js

# ==========================================
# Stage 2: Serve with Nginx Alpine
# ==========================================
FROM nginx:alpine-slim AS runner

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy pre-rendered static site from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose standard HTTP port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
