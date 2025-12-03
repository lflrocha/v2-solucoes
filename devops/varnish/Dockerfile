# syntax=docker/dockerfile:1
FROM varnish:7.6

LABEL maintainer="Luis Flavio Rocha <luis.loreto@v2solucoes.com.br>" \
      org.label-schema.name="v2-solucoes-varnish" \
      org.label-schema.description="V2 Soluções Varnish image." \
      org.label-schema.vendor="Luis Flavio Rocha"

COPY etc/varnish.vcl /etc/varnish/default.vcl
