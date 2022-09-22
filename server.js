const auth = require('json-server-auth')
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router('db.json');
var cors = require('cors')
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

const rules = auth.rewriter({
  users: 660,
  teams: 660,
  projects: 660,
})

server.db = router.db
server.use(cors());
server.use(rules);
server.use(auth);
server.use(middlewares);
server.use(router);

server.listen(port);
