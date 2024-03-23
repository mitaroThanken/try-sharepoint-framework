#!/bin/bash
devcontainer build --workspace-folder spfx/ --image-name ghcr.io/mitarothanken/try-sharepoint-framework/devcontainers/spfx:"$(date +%Y%m%d-%H%M)"
