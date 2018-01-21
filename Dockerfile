FROM node:latest

RUN apt-get update && \
    apt-get install -y python-setuptools python-dev build-essential && \
    easy_install pip && \
    pip install sh

ENV MAX_TO_CHECK=5
ENV FILE_TO_CHECK=test.json
ENV KEY_TO_CHECK=version

WORKDIR /usr/src/app
COPY wait.py /usr/src/app/

CMD ["python", "wait.py"]
