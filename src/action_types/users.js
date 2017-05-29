// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import keyMirror from 'utils/key_mirror';

export default keyMirror({
    CREATE_USER_REQUEST: null,
    CREATE_USER_SUCCESS: null,
    CREATE_USER_FAILURE: null,

    LOGIN_REQUEST: null,
    LOGIN_SUCCESS: null,
    LOGIN_FAILURE: null,

    LOGOUT_REQUEST: null,
    LOGOUT_SUCCESS: null,
    LOGOUT_FAILURE: null,

    PROFILES_REQUEST: null,
    PROFILES_SUCCESS: null,
    PROFILES_FAILURE: null,

    PROFILES_IN_TEAM_REQUEST: null,
    PROFILES_IN_TEAM_SUCCESS: null,
    PROFILES_IN_TEAM_FAILURE: null,

    PROFILES_NOT_IN_TEAM_REQUEST: null,
    PROFILES_NOT_IN_TEAM_SUCCESS: null,
    PROFILES_NOT_IN_TEAM_FAILURE: null,

    PROFILES_WITHOUT_TEAM_REQUEST: null,
    PROFILES_WITHOUT_TEAM_SUCCESS: null,
    PROFILES_WITHOUT_TEAM_FAILURE: null,

    PROFILES_IN_CHANNEL_REQUEST: null,
    PROFILES_IN_CHANNEL_SUCCESS: null,
    PROFILES_IN_CHANNEL_FAILURE: null,

    PROFILES_NOT_IN_CHANNEL_REQUEST: null,
    PROFILES_NOT_IN_CHANNEL_SUCCESS: null,
    PROFILES_NOT_IN_CHANNEL_FAILURE: null,

    USER_REQUEST: null,
    USER_SUCCESS: null,
    USER_FAILURE: null,

    USER_BY_USERNAME_REQUEST: null,
    USER_BY_USERNAME_SUCCESS: null,
    USER_BY_USERNAME_FAILURE: null,

    PROFILES_STATUSES_REQUEST: null,
    PROFILES_STATUSES_SUCCESS: null,
    PROFILES_STATUSES_FAILURE: null,

    PROFILE_STATUS_REQUEST: null,
    PROFILE_STATUS_SUCCESS: null,
    PROFILE_STATUS_FAILURE: null,

    SESSIONS_REQUEST: null,
    SESSIONS_SUCCESS: null,
    SESSIONS_FAILURE: null,

    REVOKE_SESSION_REQUEST: null,
    REVOKE_SESSION_SUCCESS: null,
    REVOKE_SESSION_FAILURE: null,

    AUDITS_REQUEST: null,
    AUDITS_SUCCESS: null,
    AUDITS_FAILURE: null,

    CHECK_MFA_REQUEST: null,
    CHECK_MFA_SUCCESS: null,
    CHECK_MFA_FAILURE: null,

    AUTOCOMPLETE_USERS_REQUEST: null,
    AUTOCOMPLETE_USERS_SUCCESS: null,
    AUTOCOMPLETE_USERS_FAILURE: null,

    SEARCH_PROFILES_REQUEST: null,
    SEARCH_PROFILES_SUCCESS: null,
    SEARCH_PROFILES_FAILURE: null,

    UPDATE_ME_REQUEST: null,
    UPDATE_ME_SUCCESS: null,
    UPDATE_ME_FAILURE: null,

    UPDATE_USER_REQUEST: null,
    UPDATE_USER_SUCCESS: null,
    UPDATE_USER_FAILURE: null,

    RECEIVED_ME: null,
    RECEIVED_PROFILE: null,
    RECEIVED_PROFILES: null,
    RECEIVED_PROFILES_LIST: null,
    RECEIVED_PROFILES_IN_TEAM: null,
    RECEIVED_PROFILE_IN_TEAM: null,
    RECEIVED_PROFILES_LIST_IN_TEAM: null,
    RECEIVED_PROFILE_NOT_IN_TEAM: null,
    RECEIVED_PROFILES_LIST_NOT_IN_TEAM: null,
    RECEIVED_PROFILE_WITHOUT_TEAM: null,
    RECEIVED_PROFILES_LIST_WITHOUT_TEAM: null,
    RECEIVED_PROFILES_IN_CHANNEL: null,
    RECEIVED_PROFILES_LIST_IN_CHANNEL: null,
    RECEIVED_PROFILE_IN_CHANNEL: null,
    RECEIVED_PROFILES_NOT_IN_CHANNEL: null,
    RECEIVED_PROFILES_LIST_NOT_IN_CHANNEL: null,
    RECEIVED_PROFILE_NOT_IN_CHANNEL: null,
    RECEIVED_SESSIONS: null,
    RECEIVED_REVOKED_SESSION: null,
    RECEIVED_AUDITS: null,
    RECEIVED_STATUS: null,
    RECEIVED_STATUSES: null,
    RECEIVED_AUTOCOMPLETE_IN_CHANNEL: null,
    RESET_LOGOUT_STATE: null
});
