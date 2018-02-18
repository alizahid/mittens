import moment from 'moment'

import { api, dialog } from '../lib'

import { getAll, getUnread } from './'

export default (time = moment()) => {
  return async dispatch => {
    try {
      const last_read_at = moment(time).format('YYYY-MM-DDTHH:MM:SSZ')

      await api.put(`/notifications?last_read_at=${last_read_at}`)

      dispatch(getAll())
      dispatch(getUnread())
    } catch (err) {
      dialog.alert(err.message)
    }
  }
}
