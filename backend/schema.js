import { text,relationship,password,timestamp } from '@keystone-6/core/fields'
import {list} from '@keystone-6/core'
import {allowAll} from '@keystone-6/core/access'
import {document} from '@keystone-6/fields-document'
export const lists={
    User:list({
        access:allowAll,
        fields:{
            name:text({validation:{isRequired:true}}),
            email:text({isIndexed:'unique',validation:{isRequired:true}}),
            password:password({validation:{isRequired:true}})
        }
    }),
    Company:list({
        access:allowAll,
        fields:{
            name:text({validation:{isRequired:true}}),
            year:timestamp({validation:{isRequired:true}}),
            phone:relationship({ref:'Phone.company',many:true})
        }
    }),
    Phone:list({
        access:allowAll,
        fields:{
            name:text({validation:{isRequired:true}}),
            company:relationship({ref:'Company.phone',many:false}),
            document: document({
                formatting: {
                  alignment: {
                    center: true,
                    end: true,
                  },
                  blockTypes: {
                    blockquote: true,
                  },
                  inlineMarks: {
                    bold: true,
                    italic: true,
                    underline: true,
                  },
                  headingLevels: [1, 2, 3],
                  listTypes: {
                    ordered: true,
                    unordered: true,
                  },
                },
                links: true,
                layouts: [],
                dividers: true,
              }),
        }
    })
}