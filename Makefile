PROJECT_NAME = tipbot

GIT_SHA1 = $(shell git rev-parse --verify HEAD)
GIT_TAG = ${shell git describe --exact-match 2> /dev/null || echo 'latest'}

IMAGE_DIRS = $(wildcard services/* bases/*)

# All targets are '.PHONY', i.e. always need to be rebuilt
.PHONY: all ${IMAGE_DIRS}

# Build all images
all: ${IMAGE_DIRS}

# Build and tag a single image
${IMAGE_DIRS}:
	$(eval IMAGE_NAME := $(word 2,$(subst /, ,$@)))
	docker build \
		-t $(PROJECT_NAME)/${IMAGE_NAME}:${GIT_SHA1} \
		-t $(PROJECT_NAME)/${IMAGE_NAME}:${GIT_TAG} \
		--build-arg GIT_SHA1=${GIT_SHA1} \
		--build-arg TAG=${GIT_TAG} \
		$@

# Specify dependencies between images
services/coin: bases/node-template
services/discord: bases/node-template
