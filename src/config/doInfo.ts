import apiEndpoints from '@/config/config';

const documentInfos = {
  vehicle: {
    name: 'VEHICLE',
    new: {
      icon: 'palette',
      title: 'អ្នកប្រើប្រាស់',
      list_route_name: 'colors',
      apiEndpoints: apiEndpoints.auth.color
    },
    list: {
      title: 'ផលិតផល',
      endpoint: 'items',
      view_route_name: 'view-vehicle',
      add_route_name: 'add-vehicle',
      columns: [
        { name: 'barcode', key: 'barcode', title: 'លេខកូដ', type: 'string', sortable: true, width: '200px'},
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
    api_end_point: apiEndpoints.auth.color,
    list_route: 'colors',
    edit_route: 'edit-color',
    edit: {
      icon: 'mdi-palette',
      title: 'ព៌ណ',
      list_route_name: 'colors',
      apiEndpoints: apiEndpoints.auth.color
    },
    view: {
      icon: 'mdi-palette',
      doc_name: 'ព៌ណ',
      title_filed_name: 'username',
      delete_question: 'តើអ្នកពិតជាចង់លុបឈ្មោះអ្នកប្រើប្រាស់នេះប្រាកដមែន?',
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
      icon: 'mdi-palette',
      title: 'ព៌ណ',
      list_route_name: 'colors',
      apiEndpoints: apiEndpoints.auth.color
    },
    list: {
      icon: 'mdi-palette',
      title: 'ព៌ណ',
      endpoint: 'colors',
      view_route_name: 'view-color',
      add_route_name: 'add-color',
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
    api_end_point: apiEndpoints.auth.user,
    list_route: 'users',
    edit_route: 'edit-user',
    edit: {
      icon: 'mdi-account',
      title: 'អ្នកប្រើប្រាស់',
      list_route_name: 'users',
      apiEndpoints: apiEndpoints.auth.user
    },
    new: {
      icon: 'mdi-account-outline',
      title: 'អ្នកប្រើប្រាស់',
      list_route_name: 'users',
      apiEndpoints: apiEndpoints.auth.user
    },
    view: {
      icon: 'users',
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
      icon: 'mdi-account-outline',
      endpoint: 'users',
      view_route_name: 'view-user',
      add_route_name: 'add-user',
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