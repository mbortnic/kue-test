# kue-test

# Setup

1. Install Redis
2. npm install kue --save
3. Run kue ui in shell #1 -- node kue-ui.js
4. Run producer in shell #2 to create items in the queue -- node producer.js
5. Run consumer 1 in shell #3 to start processing the queue -- node consumer.js
6. Run consumer 2 in shell #4 to add worker to the queue -- node consumer.js
7. Open up the kue UI to watch -- http://localhost:3000/
8. Stop the producer if it gets too big
9. Open up redis-cli.exe and do a flushdb to get rid of the entire queue in DB 0
