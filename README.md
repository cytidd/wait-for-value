# wait-for-value

This is a simple Docker image that will, when run from a folder containing a git repository, find the tagged version where `FILE_TO_CHECK` contains a key value pair of `KEY_TO_CHECK:TARGET_VALUE`, or return `None` if not found.

You may run the container within this repository's folder to test it with `make wait`

Note: the only reason the base image is `node:latest` is because it seemed to require the least number of updated packages, and because I originally tried to write this in NodeJs.  Switch it out if you'd like.

## build
```
make build
```

## wait
```
make wait
```