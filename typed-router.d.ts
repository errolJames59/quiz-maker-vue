/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...catchAll]': RouteRecordInfo<'/[...catchAll]', '/:catchAll(.*)', { catchAll: ParamValue<true> }, { catchAll: ParamValue<false> }>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/auth/': RouteRecordInfo<'/auth/', '/auth', Record<never, never>, Record<never, never>>,
    '/edit/': RouteRecordInfo<'/edit/', '/edit', Record<never, never>, Record<never, never>>,
    '/leaderboard/': RouteRecordInfo<'/leaderboard/', '/leaderboard', Record<never, never>, Record<never, never>>,
    '/profile/[username]': RouteRecordInfo<'/profile/[username]', '/profile/:username', { username: ParamValue<true> }, { username: ParamValue<false> }>,
    '/quiz/': RouteRecordInfo<'/quiz/', '/quiz', Record<never, never>, Record<never, never>>,
    '/quiz/[...catchAll]': RouteRecordInfo<'/quiz/[...catchAll]', '/quiz/:catchAll(.*)', { catchAll: ParamValue<true> }, { catchAll: ParamValue<false> }>,
    '/quiz/[title]': RouteRecordInfo<'/quiz/[title]', '/quiz/:title', { title: ParamValue<true> }, { title: ParamValue<false> }>,
    '/quiz/take/[title]': RouteRecordInfo<'/quiz/take/[title]', '/quiz/take/:title', { title: ParamValue<true> }, { title: ParamValue<false> }>,
  }
}
