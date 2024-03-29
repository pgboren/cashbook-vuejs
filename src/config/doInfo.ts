import apiEndpoints from '@/config/config';

const documentInfos = {
  branch: {
    name: 'BRANCH',
    icon: "mdi-store",
    api_end_point: apiEndpoints.auth.branches,
    list_route: 'branches',
    edit_route: 'edit-branch',
    view_route: 'view-branch',
    add_route: 'add-branch',
    edit: {
      title: 'សាខា',
    },
    view: {
      title: 'សាខា',
      doc_name: 'សាខា',
      title_filed_name: 'name',
      delete_question: 'តើអ្នកពិតជាចង់លុបសាខានេះប្រាកដមែន?',
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: 'edit', type: 'action' },
        { title: 'Delete', icon:'mdi-delete', action: 'delete', type: 'action' },
      ],
      fields: [
        { name: 'logo', title: 'ឡូហ្គោល', type: 'photo', folder: 'branch', docName: 'branch', docField: 'logo', width:65 },
        { name: 'name', title: 'ឈ្មោះ', type: 'string'},
      ]
    },
    new: { 
      title: 'សាខា'
    },
    list: {
      title: 'សាខា',
      columns: [
        { name: 'logo', title: 'ឡូហ្គោល', type: 'photo', folder: 'branch', docName: 'branch', docField: 'logo', readonly: true, width:35 },
        { name: 'name', key: 'name', title: 'ឈ្មោះ', type: 'string', sortable: true}
      ],
      actions: [
        { title: 'View', icon:'mdi-eye', action: 'VIEW', target: 'view-user'},
        { title: 'Edit', icon:'mdi-pencil', action: 'EDIT', target: 'edit-user'},
        { title: 'Delete', icon:'mdi-delete', action: 'DELETE', target: ''}]
    }
  },
  item: {
    name: 'ITEM',
    icon: "mdi-cube-outline",
    api_end_point: apiEndpoints.auth.items,
    list_route: 'items',
    edit_route: 'edit-item',
    view_route: 'view-item',
    add_route: 'add-item',
    edit: {
      title: 'ផលិតិផល',
    },
    view: {
      doc_name: 'ផលិតិផល',
      title_filed_name: 'name',
      delete_question: 'តើអ្នកពិតជាចង់លុបផលិតិផលនេះប្រាកដមែន?',
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: 'edit', type: 'action' },
        { title: 'Delete', icon:'mdi-delete', action: 'delete', type: 'action' },
      ],
      fields: [
        { name: 'barcode', title: 'លេខសំគាល់', type: 'string'},
        { name: 'name', title: 'ឈ្មោះ', type: 'string'},
      ]
    },
    new: {
      title: 'ផលិតិផល'
    },
    list: {
      title: 'ផលិតិផល',
      columns: [
        { name: 'barcode',key: 'barcode', title: 'លេខសំគាល់', type: 'string', width: '180px'},
        { name: 'name', key: 'name', title: 'ឈ្មោះ', type: 'string', sortable: true},
        { name: 'price', key: 'price', title: 'តំលៃ', type: 'string', sortable: true},
        { name: 'action', key: 'actions', title: '', type: 'action', sortable: true},
      ],
      actions: [
        { title: 'View', icon:'mdi-eye', action: 'VIEW', target: 'view-user'},
        { title: 'Edit', icon:'mdi-pencil', action: 'EDIT', target: 'edit-user'},
        { title: 'Delete', icon:'mdi-delete', action: 'DELETE', target: ''}]
    }
  },
  category: {
    name: 'CATEGORY',
    icon: 'mdi-file-tree',
    api_end_point: apiEndpoints.auth.categories,
    list_route: 'categories',
    edit_route: 'edit-category',
    view_route: 'view-category',
    add_route: 'add-category',
    edit: {
      title: 'ប្រភេទទំនិញ',
    },
    view: {
      doc_name: 'ប្រភេទទំនិញ',
      title_filed_name: 'name',
      delete_question: 'តើអ្នកពិតជាចង់លុបឈ្មោះប្រភេទទំនិញនេះប្រាកដមែន?',
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: 'edit', type: 'action' },
        { title: 'Delete', icon:'mdi-delete', action: 'delete', type: 'action' },
      ],
      fields: [
        { name: 'code', key: 'code', title: 'លេខកូដ', type: 'string'},
        { name: 'name', title: 'ឈ្មោះ', type: 'string'},
      ]
    },
    new: {
      title: 'ប្រភេទទំនិញ'
    },
    list: {
      title: 'ប្រភេទទំនិញ',
      columns: [
        { name: 'code', key: 'code', title: 'លេខកូដ', type: 'string', sortable: true, width: '120px'},
        { name: 'name', key: 'name', title: 'ឈ្មោះ', type: 'string', sortable: true},
        { name: 'action', key: 'actions', title: '', type: 'action', sortable: true},
      ],
      actions: [
        { title: 'View', icon:'mdi-eye', action: 'VIEW', target: 'view-user'},
        { title: 'Edit', icon:'mdi-pencil', action: 'EDIT', target: 'edit-user'},
        { title: 'Delete', icon:'mdi-delete', action: 'DELETE', target: ''}]
    }
  },
  condition: {
    name: 'CONDITION',
    icon: 'mdi-checkbox-marked-circle-outline',
    api_end_point: apiEndpoints.auth.condition,
    list_route: 'conditions',
    edit_route: 'edit-condition',
    view_route: 'view-condition',
    add_route: 'add-condition',
    edit: {
      title: 'ស្ថានភាពយានយន្ដ',
      list_route_name: 'conditions',
    },
    view: {
      doc_name: 'ស្ថានភាពយានយន្ដ',
      title_filed_name: 'name',
      delete_question: 'តើអ្នកពិតជាចង់លុបឈ្មោះស្ថានភាពយានយន្ដនេះប្រាកដមែន?',
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: 'edit', type: 'action' },
        { title: 'Delete', icon:'mdi-delete', action: 'delete', type: 'action' },
      ],
      fields: [
        { name: 'code', key: 'code', title: 'លេខកូដ', type: 'string'},
        { name: 'name', title: 'ឈ្មោះ', type: 'string'},
      ]
    },
    new: {
      title: 'ស្ថានភាពយានយន្ដ',
      list_route_name: 'colors',
    },
    list: {
      title: 'ស្ថានភាពយានយន្ដ',
      columns: [
        { name: 'code', key: 'code', title: 'លេខកូដ', type: 'string', sortable: true, width: '120px'},
        { name: 'name', key: 'name', title: 'ឈ្មោះ', type: 'string', sortable: true},
        { name: 'action', key: 'actions', title: '', type: 'action', sortable: true},
      ],
      actions: [
        { title: 'View', icon:'mdi-eye', action: 'VIEW', target: 'view-user'},
        { title: 'Edit', icon:'mdi-pencil', action: 'EDIT', target: 'edit-user'},
        { title: 'Delete', icon:'mdi-delete', action: 'DELETE', target: ''}]
    }
  },
  model: {
    name: 'MODEL',
    icon: "mdi-format-list-bulleted-type",
    api_end_point: apiEndpoints.auth.model,
    list_route: 'models',
    edit_route: 'edit-model',
    view_route: 'view-model',
    add_route: 'add-model',
    edit: {
      title: 'គំរូ',
      list_route_name: 'models',
    },
    view: {
      doc_name: 'គំរូ',
      title_filed_name: 'name',
      delete_question: 'តើអ្នកពិតជាចង់លុបឈ្មោះគំរូនេះប្រាកដមែន?',
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: 'edit', type: 'action' },
        { title: 'Delete', icon:'mdi-delete', action: 'delete', type: 'action' },
      ],
      fields: [
        { name: 'code', key: 'code', title: 'លេខកូដ', type: 'string'},
        { name: 'name', title: 'ឈ្មោះ', type: 'string'},
      ]
    },
    new: {
      title: 'គំរូ',
      list_route_name: 'colors',
    },
    list: {
      title: 'គំរូ',
      columns: [
        { name: 'code', key: 'code', title: 'លេខកូដ', type: 'string', sortable: true, width: '120px'},
        { name: 'name', key: 'name', title: 'ឈ្មោះ', type: 'string', sortable: true},
        { name: 'action', key: 'actions', title: '', type: 'action', sortable: true},
      ],
      actions: [
        { title: 'View', icon:'mdi-eye', action: 'VIEW', target: 'view-user'},
        { title: 'Edit', icon:'mdi-pencil', action: 'EDIT', target: 'edit-user'},
        { title: 'Delete', icon:'mdi-delete', action: 'DELETE', target: ''}]
    }
  },
  color: {
    name: 'COLOR',
    icon: 'mdi-palette-outline',
    api_end_point: apiEndpoints.auth.color,
    list_route: 'colors',
    edit_route: 'edit-color',
    view_route: 'view-color',
    add_route: 'add-color',
    edit: {
      title: 'ព៌ណ',
      list_route_name: 'colors',
      apiEndpoints: apiEndpoints.auth.color
    },
    view: {
      doc_name: 'ព៌ណ',
      title_filed_name: 'name',
      delete_question: 'តើអ្នកពិតជាចង់លុបឈ្មោះព៌ណនេះប្រាកដមែន?',
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: 'edit', type: 'action' },
        { title: 'Delete', icon:'mdi-delete', action: 'delete', type: 'action' },
      ],
      fields: [
        { name: 'code', key: 'code', title: 'លេខកូដ', type: 'color'},
        { name: 'name', title: 'ឈ្មោះ', type: 'string'},
      ]
    },
    new: {
      title: 'ព៌ណ',
      list_route_name: 'colors',
      apiEndpoints: apiEndpoints.auth.color
    },
    list: {
      title: 'ព៌ណ',
      columns: [
        { name: 'code', key: 'code', title: 'លេខកូដ', type: 'color', sortable: true, width: '120px'},
        { name: 'name', key: 'name', title: 'ឈ្មោះ', type: 'string', sortable: true},
        { name: 'action', key: 'actions', title: '', type: 'action', sortable: true},
      ],
      actions: [
        { title: 'View', icon:'mdi-eye', action: 'VIEW', target: 'view-user'},
        { title: 'Edit', icon:'mdi-pencil', action: 'EDIT', target: 'edit-user'},
        { title: 'Delete', icon:'mdi-delete', action: 'DELETE', target: ''}]
    }
  },
  user: {
    name: 'USER',
    icon: 'mdi-account-outline',
    api_end_point: apiEndpoints.auth.user,
    list_route: 'users',
    edit_route: 'edit-user',
    view_route: 'view-user',
    add_route: 'add-user',
    edit: {
      title: 'អ្នកប្រើប្រាស់',
      list_route_name: 'users',
      apiEndpoints: apiEndpoints.auth.user
    },
    new: {
      title: 'អ្នកប្រើប្រាស់',
      list_route_name: 'users',
      apiEndpoints: apiEndpoints.auth.user
    },
    view: {
      doc_name: 'អ្នកប្រើប្រាស់',
      apiEndpoints: apiEndpoints.auth.user,
      title_filed_name: 'username',
      media_upload_dialog_title: 'ជ្រើសយករូបភាពតំណាង',
      media_upload_dialog_msg: 'សូមចុចលើប៊ូតុងដើម្បើជ្រើសយករូបភាពដែលចង់បាន!',
      delete_question: 'តើអ្នកពិតជាចង់លុបឈ្មោះអ្នកប្រើប្រាស់នេះប្រាកដមែន?',
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: 'edit', type: 'action' },
        { title: 'Delete', icon:'mdi-delete', action: 'delete', type: 'action' },
      ],
      fields: [
        { name: 'avatar', title: 'រូបភាព', type: 'photo', folder: 'user', docName: 'user', docField: 'avatar', width:65 },
        { name: 'username', title: 'ឈ្មោះ', type: 'string'},
        { name: 'email', title: 'អ៊ីមែល', type: 'string'},
        { name: 'roles', title: 'តួរនាទី', type: 'array', format: 'chip'},
        { name: 'enable', title: 'ស្ថានភាព', type: 'boolean', true: 'សកម្ម', false: 'អសកម្ម'},
        { name: 'deleted', title: 'សម្គាល់ថាបានលុប', type: 'boolean', true: 'ពិត', false: 'មិនពិត'},
        { name: 'createdAt', title: 'ថ្ងៃបង្កើត', type: 'datetime', format: 'YYYY-MM-DD HH:mm:ss A'},
        { name: 'updatedAt', title: 'ថ្ងៃកែរប្រែរ', type: 'datetime', format: 'YYYY-MM-DD HH:mm:ss A'}
      ]
    },
    list: {
      title: 'អ្នកប្រើប្រាស់',
      endpoint: 'users',
      columns: [
        { name: 'avatar',sortable: false, key: 'avatar', title: '', type: 'photo', folder: 'user', docName: 'user', docField: 'avatar', readonly: true, width:35},
        { name: 'username', align: 'start', key: 'username',  type: 'string',  sortable: true, title: 'ឈ្មោះអ្នកប្រើ'},
        { name: 'email',align: 'start', key: 'email',  type: 'string', sortable: true, title: 'អ៊ីមែល'},
        { name: 'roles',align: 'start', key: 'roles', sortable: false, title: 'តួនាទី', type: 'array', format: 'chip'},
        { name: 'enable', title: 'ស្ថានភាព', type: 'boolean', true: 'សកម្ម', false: 'អសកម្ម'},
        { name: 'deleted', align: 'start', key: 'deleted',type: 'boolean', sortable: false, title: 'សម្គាល់ថាបានលុប', true: 'true', false: 'false'},
        { name: 'action',align: 'end', key: 'actions', title: '', type: 'action', sortable: false},
      ],
      actions: [
        { title: 'View', icon:'mdi-eye', action: 'VIEW', target: 'view-user'},
        { title: 'Edit', icon:'mdi-pencil', action: 'EDIT', target: 'edit-user'},
        { title: 'Delete', icon:'mdi-delete', action: 'DELETE', target: ''}]
    }
  },
} as const;

export type DocumentInfos = typeof documentInfos;

export function getDocumentInfo(docName: keyof DocumentInfos): DocumentInfos[keyof DocumentInfos] | undefined {
  return documentInfos[docName];
}

export default documentInfos;