import { mysqlEnum, mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable(
  'users',
  {
    id: serial('id').primaryKey(),
    firstName: varchar('firstname', { length: 256 }),
    lastName: varchar('lastname', { length: 256 }),
    email: varchar('email', { length: 256 }),
  },
  (users) => ({
    emailIndex: uniqueIndex('email_idx').on(users.email),
  })
);

export const clients = mysqlTable('clients', {
  id: serial('id').primaryKey(),
  // userId: bigint('userId', { mode: 'bigint' }).references(() => users.id),
});

export const owners = mysqlTable('owners', {
  id: serial('id').primaryKey(),
  // userId: bigint('userId', { mode: 'bigint' }).references(() => users.id),
});

export const places = mysqlTable('places', {
  id: serial('id').primaryKey(),
  // owners: bigint('userId', { mode: 'bigint' }).references(() => users.id),
  kind: mysqlEnum('kind', ['house', 'apart', 'room']),
});
