import request from '@/utils/request'

const api = {
  tableColumn: '/custom/table/column'
}

export function getTableColumn (parameter) {
  console.log('parameter', parameter)
  return request({
    url: api.tableColumn,
    method: 'get',
    data: parameter
  })
}
