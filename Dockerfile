FROM node:14-alpine as prod-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production


FROM prod-deps as dev-deps
WORKDIR /app
RUN yarn install


FROM dev-deps as builder
WORKDIR /app
COPY ./ .
RUN yarn build


FROM prod-deps
WORKDIR /app
COPY --from=builder /app/build ./
ENV NODE_ENV=production
CMD node index.js
