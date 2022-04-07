{
  const user = {
    id: 123,

    admin: false,
    becomeAdmin: function () {
      this.admin = true; // ts understands that this refers to the outer object
    },
  };

  type User = typeof user;
  // sometimes we need to specify the type of this
  // JS cannot have a function parameter called this, ts uses that to allow type declaration for this
  interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
  }

  const db = <DB>getDB();
  const admins = db.filterUsers(function (this: User) {
    return this.admin;
  });
}
