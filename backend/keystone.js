import {config} from '@keystone-6/core'
import {lists} from './schema'


export default config({
    db:{
        provider:'postgresql',
        url:"postgres://rxvuwdhl:i1THKGcoYIL9E1Nh14wKk50ap46SUJzm@lallah.db.elephantsql.com/rxvuwdhl"
    },
    lists
})