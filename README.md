### CC Demo

#### ContextAPI
<p>
  <img src="https://github.com/dnErf/cc-demo-test/blob/master/public/contextAPI_img1.jpeg"/>
</p>

> https://blog.bitsrc.io/why-you-should-consider-the-new-context-api-in-react-a-deep-dive-d588b66c57b5

Context API solves the over passing of the props data to the component tree.


#### Circle CI

Building / Integrating Code safer and faster to sandbox or production environment.


This is the script for `./circleci/config.yml` come from circleCi docs and just addes a command for the heroku push

```
# Javascript Node CircleCI 2.0 configuration file
#
# Check https://circleci.com/docs/2.0/language-javascript/ for more details
#
version: 2
jobs:
  build:
    docker:
      # specify the version you desire here
      - image: circleci/node:10.8.0

      # Specify service dependencies here if necessary
      # CircleCI maintains a library of pre-built images
      # documented at https://circleci.com/docs/2.0/circleci-images/
      # - image: circleci/mongo:3.4.4

    working_directory: ~/repo

    steps:
      - checkout

      # Download and cache dependencies
      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
          # fallback to using the latest cache if no exact match is found
          - v1-dependencies-

      - run: yarn install

      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}

      # run tests!
      - run: yarn test
      - run:
          name: Deploy Master to Heroku
          command: |
            git push https://heroku:$HEROKU_API_KEY@git.heroku.com/cc-demo-test.git master

```
