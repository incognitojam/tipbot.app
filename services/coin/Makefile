PROJECT_NAME = tipbot
SERVICE_NAME := $(notdir $(PWD))
TARGET := $(PROJECT_NAME)/${SERVICE_NAME}
CONTAINER_NAME := $(PROJECT_NAME)_$(SERVICE_NAME)_$(UID)
UID := $(strip $(shell id -u))

# export such that its passed to shell functions for Docker to pick up.
export PROJECT_NAME
export SERVICE_NAME
export TARGET
export CONTAINER_NAME

.PHONY: help build rebuild test

help:
	@echo 'Usage: make [targets...]'
	@echo 'Targets:'
	@echo '  build    	build docker image'
	@echo '  rebuild  	rebuild docker image (without using cache)'
	@echo '  test     	test docker container'

# only build the container. Note, docker does this also if you apply other targets.
build:
	docker build -t $(TARGET) .

# force a rebuild by passing --no-cache
rebuild:
	docker build --no-cache -t $(TARGET) .

# run the test script in an ephemeral container
test:
	docker run --name $(CONTAINER_NAME) --rm $(TARGET) sh -c 'npm run test'
