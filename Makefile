build:
	docker build -t wait-for-tag:latest .

wait:
	docker run --rm -it \
    -e TARGET_VALUE=0.0.1 \
    -w /usr/src/app \
    -v $(shell pwd):/usr/src/app \
    test-wait-version:latest