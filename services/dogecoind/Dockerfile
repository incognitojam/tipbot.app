FROM ubuntu:18.04

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    wget gettext-base

ENV VERSION=1.14.2
ENV ARCH=x86_64-linux-gnu
ENV ARCHIVE=dogecoin-${VERSION}-${ARCH}.tar.gz

RUN echo "Extracting https://github.com/dogecoin/dogecoin/releases/download/v${VERSION}/${ARCHIVE} to /opt" && \
    wget https://github.com/dogecoin/dogecoin/releases/download/v${VERSION}/${ARCHIVE} -qO - | tar xzf - -C /opt && \
    echo "Installing dogecoin-${VERSION}" && \
    install -m 0755 -o root -g root -t /usr/local/bin /opt/dogecoin-${VERSION}/bin/*

RUN echo "Creating user wallet" && \
    useradd --create-home --shell /bin/bash wallet
USER wallet
WORKDIR /home/wallet

RUN echo "Creating .dogecoin config directory" && \
    mkdir .dogecoin
COPY dogecoin.template.conf .dogecoin/

ARG TESTNET
ARG REGTEST
ARG PROXY
ARG BIND
ARG WHITEBIND
ARG LISTEN
ARG MAXCONNECTIONS
ARG SERVER
ARG RPCBIND
ARG RPCUSER
ARG RPCPASSWORD
ARG RPCAUTH
ARG RPCCLIENTTIMEOUT
ARG RPCPORT
ARG RPCCONNECT
ARG SENDFREETRANSACTIONS
ARG TXCONFIRMTARGET
ARG KEYPOOL
ARG PAYTXFEE

ARG WALLETNOTIFY
ARG BLOCKNOTIFY

RUN cat .dogecoin/dogecoin.template.conf | envsubst > .dogecoin/dogecoin.conf

EXPOSE 22556
CMD ["/bin/bash"]
