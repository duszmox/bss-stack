import { defineRelations } from 'drizzle-orm'
import {
  integer,
  pgTable,
  varchar,
  uuid,
  text,
  primaryKey,
  date, pgEnum, bytea,
} from 'drizzle-orm/pg-core'

export const visibilityEnum = pgEnum('visibility', ['public', 'schonherz', 'bss'])

export const homepageStatusEnum = pgEnum('homepage_status', ['live', 'highlighted_video', 'normal'])

export const homepageStatusTable = pgTable('current_homepage_status', {
  id: integer().primaryKey().default(0),
  status: homepageStatusEnum().notNull().default('normal'),
  updated_at: date().defaultNow(),
  created_at: date().defaultNow(),
})

export const usersTable = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  nickname: varchar({ length: 255 }),
  profile_picture: bytea(),
  joined_at: text(),
  status: text(),
  introduction: text(),
})

export const videos = pgTable('videos', {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  description: text(),
  visibility: visibilityEnum().notNull().default('bss'),
  video_url: text().notNull(),
  views: integer().default(0),
  songs: text(),
  changeable_uploaded_at: date().notNull().defaultNow(),
  updated_at: date().defaultNow(),
  created_at: date().defaultNow(),
})

export const relatedVideos = pgTable(
  'related_videos',
  {
    videoId: uuid('video_id')
      .notNull()
      .references(() => videos.id, { onDelete: 'cascade' }),
    relatedVideoId: uuid('related_video_id')
      .notNull()
      .references(() => videos.id, { onDelete: 'cascade' }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.videoId, table.relatedVideoId] }),
  }),
)

export const tags = pgTable('tags', {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull().unique(),
})

export const videoTags = pgTable(
  'video_tags',
  {
    videoId: uuid('video_id')
      .notNull()
      .references(() => videos.id, { onDelete: 'cascade' }),
    tagId: uuid('tag_id')
      .notNull()
      .references(() => tags.id, { onDelete: 'cascade' }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.videoId, table.tagId] }),
  }),
)

export const events = pgTable('events', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text(),
  event_start_date: date().notNull(),
  event_end_date: date().notNull(),
  created_at: date().defaultNow(),
  updated_at: date().defaultNow(),
})

export const roles = pgTable('roles', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
})

export const videosRolesUsers = pgTable(
  'videos_roles_users',
  {
    videoId: uuid('video_id')
      .notNull()
      .references(() => videos.id, { onDelete: 'cascade' }),
    roleId: uuid('role_id')
      .notNull()
      .references(() => roles.id, { onDelete: 'cascade' }),
    userId: uuid('user_id')
      .notNull()
      .references(() => usersTable.id, { onDelete: 'cascade' }),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.videoId, table.roleId, table.userId],
    }),
  }),
)

export const eventsRolesUsers = pgTable(
  'events_roles_users',
  {
    eventId: uuid('event_id')
      .notNull()
      .references(() => events.id, { onDelete: 'cascade' }),
    roleId: uuid('role_id')
      .notNull()
      .references(() => roles.id, { onDelete: 'cascade' }),
    userId: uuid('user_id')
      .notNull()
      .references(() => usersTable.id, { onDelete: 'cascade' }),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.eventId, table.roleId, table.userId],
    }),
  }),
)

export const videosEvents = pgTable('videos_events', {
  videoId: uuid('video_id')
    .notNull()
    .references(() => videos.id, { onDelete: 'cascade' }),
  eventId: uuid('event_id')
    .notNull()
    .references(() => events.id, { onDelete: 'cascade' }),
}, (table) => ({
  pk: primaryKey({ columns: [table.videoId, table.eventId] }),
}))

export const usersRoles = pgTable('users_roles', {
  userId: uuid('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  roleId: uuid('role_id')
    .notNull()
    .references(() => roles.id, { onDelete: 'cascade' }),
}, (table) => ({
  pk: primaryKey({ columns: [table.userId, table.roleId] }),
}))

export const usersRolesRelations = defineRelations(
  { usersTable, roles, usersRoles },
  (r) => ({
    usersTable: {
      usersRoles: r.many.usersRoles({
        from: r.usersTable.id,
        to: r.usersRoles.userId,
      }),
    },
    roles: {
      usersRoles: r.many.usersRoles({
        from: r.roles.id,
        to: r.usersRoles.roleId,
      }),
    },
    usersRoles: {
      user: r.one.usersTable({
        from: r.usersRoles.userId,
        to: r.usersTable.id,
      }),
      role: r.one.roles({
        from: r.usersRoles.roleId,
        to: r.roles.id,
      }),
    },
  }),
)

export const eventsRolesUsersRelations = defineRelations(
  { events, roles, usersTable, eventsRolesUsers },
  (r) => ({
    events: {
      eventsRolesUsers: r.many.eventsRolesUsers({
        from: r.events.id,
        to: r.eventsRolesUsers.eventId,
      }),
    },
    roles: {
      eventsRolesUsers: r.many.eventsRolesUsers({
        from: r.roles.id,
        to: r.eventsRolesUsers.roleId,
      }),
    },
    usersTable: {
      eventsRolesUsers: r.many.eventsRolesUsers({
        from: r.usersTable.id,
        to: r.eventsRolesUsers.userId,
      }),
    },
    eventsRolesUsers: {
      event: r.one.events({
        from: r.eventsRolesUsers.eventId,
        to: r.events.id,
      }),
      role: r.one.roles({
        from: r.eventsRolesUsers.roleId,
        to: r.roles.id,
      }),
      user: r.one.usersTable({
        from: r.eventsRolesUsers.userId,
        to: r.usersTable.id,
      }),
    },
  }),
)

export const videosEventsRelations = defineRelations(
  { videos, events, videosEvents },
  (r) => ({
    videos: {
      videosEvents: r.many.videosEvents({
        from: r.videos.id,
        to: r.videosEvents.videoId,
      }),
    },
    events: {
      videosEvents: r.many.videosEvents({
        from: r.events.id,
        to: r.videosEvents.eventId,
      }),
    },
    videosEvents: {
      video: r.one.videos({
        from: r.videosEvents.videoId,
        to: r.videos.id,
      }),
      event: r.one.events({
        from: r.videosEvents.eventId,
        to: r.events.id,
      }),
    },
  }),
)

export const videosRolesUsersRelations = defineRelations(
  { videos, roles, usersTable, videosRolesUsers },
  (r) => ({
    videos: {
      videosRolesUsers: r.many.videosRolesUsers({
        from: r.videos.id,
        to: r.videosRolesUsers.videoId,
      }),
    },
    roles: {
      videosRolesUsers: r.many.videosRolesUsers({
        from: r.roles.id,
        to: r.videosRolesUsers.roleId,
      }),
    },
    usersTable: {
      videosRolesUsers: r.many.videosRolesUsers({
        from: r.usersTable.id,
        to: r.videosRolesUsers.userId,
      }),
    },
    videosRolesUsers: {
      video: r.one.videos({
        from: r.videosRolesUsers.videoId,
        to: r.videos.id,
      }),
      role: r.one.roles({
        from: r.videosRolesUsers.roleId,
        to: r.roles.id,
      }),
      user: r.one.usersTable({
        from: r.videosRolesUsers.userId,
        to: r.usersTable.id,
      }),
    },
  }),
)

export const videoTagRelations = defineRelations(
  { videos, tags, videoTags },
  (r) => ({
    videos: {
      videoTags: r.many.videoTags({
        from: r.videos.id,
        to: r.videoTags.videoId,
      }),
    },
    tags: {
      videoTags: r.many.videoTags({
        from: r.tags.id,
        to: r.videoTags.tagId,
      }),
    },
    videoTags: {
      video: r.one.videos({
        from: r.videoTags.videoId,
        to: r.videos.id,
      }),
      tag: r.one.tags({
        from: r.videoTags.tagId,
        to: r.tags.id,
      }),
    },
  }),
)

export const videosRelatedVideosRelations = defineRelations(
  { videos, relatedVideos },
  (r) => ({
    videos: {
      relatedVideos: r.many.relatedVideos({
        from: r.videos.id,
        to: r.relatedVideos.videoId,
      }),
    },
    relatedVideos: {
      video: r.one.videos({
        from: r.relatedVideos.videoId,
        to: r.videos.id,
      }),
      relatedVideo: r.one.videos({
        from: r.relatedVideos.relatedVideoId,
        to: r.videos.id,
      }),
    },
  }),
)
