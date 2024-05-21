default: install build

install:
	npm install

build:
	tsc ./analysis.ts

clean:
	rm -rf ./analysis.js

fclean: clean
	rm -rf ./node_modules

re: fclean default