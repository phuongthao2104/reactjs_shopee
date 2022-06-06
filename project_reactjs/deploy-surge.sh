# build reactjs app with production mode
npm run build 

# move to build folder
cd build

# clone index.html into 200 html
cp index.html 200.html

# start deploying via Surge
# the command means deploy curret folder to domain paul
surge . shopee-reactjs.surge.sh