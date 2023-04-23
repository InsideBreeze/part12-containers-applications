FROM node:16

COPY . .

RUN npm ci

ENV REACT_APP_BACKEND_URL="http://localhost:3000" 

ENV PORT=3001

ENV CI=true
RUN npm test
CMD npm start
