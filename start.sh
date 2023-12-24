rm -rf src/public
mkdir src/public
cp -r src/assets/images src/public/images
docker compose up --build -d && docker logs --follow martcart-server