db = db.getSiblingDB("admin");
db.createUser({
  user: "admin",
  pwd: "password",
  roles: [
    {
      role: "userAdminAnyDatabase",
      db: "admin",
    },
  ],
});
db = db.getSiblingDB("blog");
db.createUser({
  user: "bloguser",
  pwd: "blogpass",
  roles: [
    {
      role: "readWrite",
      db: "blog",
    },
  ],
});
