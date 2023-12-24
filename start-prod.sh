tsc # compile and store compiled files to dist folder (configured in tsconfig.json) (will take some time)
rm -rf dist/public
mkdir dist/public
cp -r src/assets/images dist/public/images
node dist/server.js
