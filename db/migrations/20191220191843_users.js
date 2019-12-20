
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (t) => {
        t.increments();
        t.string('username');
        t.string('email');
        t.string('password');
        t.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
};
