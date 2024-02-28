
const documentInfos = {
  user: {
    name: 'USER',
    new: {
      icon: 'users',
      title: 'អ្នកប្រើប្រាស់',
      list_route_name: 'users',
    },
    view: {
      icon: 'users',
      doc_name: 'អ្នកប្រើប្រាស់',
      title_filed_name: 'username',
      edit_view: 'edit-user',
      list_route_name: 'users',
      delete_question: 'តើអ្នកពិតជាចង់លុបឈ្មោះអ្នកប្រើប្រាស់នេះប្រាកដមែន?',
      fields: [
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
      view_route_name: 'view-user',
      add_route_name: 'add-user',
      headers: [
        { align: 'start', key: 'username', sortable: true, title: 'ឈ្មោះអ្នកប្រើ' , width: '450px'},
        { align: 'start', key: 'email', sortable: true, title: 'អ៊ីមែល'},
        { align: 'start', key: 'roles', sortable: false, title: 'តួនាទី'},
        { align: 'end', key: 'deleted', sortable: false, title: 'ស្ថានភាព'},
        { align: 'end', title: '', key: 'actions', sortable: false },
      ],
      actions: [
        { title: 'View', icon:'mdi-eye', action: 'VIEW', target: 'view-user'},
        { title: 'Edit', icon:'mdi-pencil', action: 'EDIT', target: 'edit-user'},
        { title: 'Delete', icon:'mdi-delete', action: 'DELETE', target: ''}]
    }
  },
  vehicle: {
      name: 'VEHICLE',
      list: {
        title: 'បញ្ជីរឈ្មោះយានយន្ដ',
        route: '/vehicles',
        headers: [
          { align: 'start', key: 'name', sortable: true, title: 'ឈ្មោះ' },
          { align: 'end', title: '', key: 'actions', sortable: false },
        ],
        actions: [
          { title: 'View', icon:'mdi-eye', action: 'VIEW', target: 'view-user'},
          { title: 'Edit', icon:'mdi-pencil', action: 'EDIT', target: 'edit-user'},
          { title: 'Delete', icon:'mdi-delete', action: 'DELETE', target: ''}]
      }
  }
} as const;

export type DocumentInfos = typeof documentInfos;

export function getDocumentInfo(docName: keyof DocumentInfos): DocumentInfos[keyof DocumentInfos] | undefined {
  return documentInfos[docName];
}

export default documentInfos;