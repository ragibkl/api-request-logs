#!/usr/bin/env bash

TAG=${1:-latest}
IMAGE_REGISTRY=ragibkl/api-request-logs
FULL_TAG=$IMAGE_REGISTRY:$TAG

echo $FULL_TAG

docker build -t $FULL_TAG .
docker push $FULL_TAG
