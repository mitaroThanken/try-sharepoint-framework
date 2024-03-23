FROM golang:latest AS certs

# Install minica
RUN go install github.com/jsha/minica@v1.0.2

# Make certs
RUN mkdir -p /certs \
    && cd /certs \
    && minica --domains localhost \
    && openssl x509 -inform PEM -in minica.pem -out minica.crt \
    && cp localhost/key.pem rushstack-serve.key \
    && cp localhost/cert.pem rushstack-serve.pem

FROM mcr.microsoft.com/devcontainers/typescript-node:1-18-bookworm AS devcontainer

COPY --from=certs /certs /home/node/.rushstack

RUN chown -R node:node /home/node/.rushstack
