import Mock from 'mockjs2'
import { builder, getBody, getQueryParameters } from '../util'
// (data, message, code = 0, headers = {})
const tableColumn = (options) => {
  console.log('options', options)
  const body = getBody(options)
  console.log('mock: body', body)
  const queryParameters = getQueryParameters(options)
  console.log('queryParameters', queryParameters)
  const data = [
    {
      title: '#',
      scopedSlots: { customRender: 'serial' }
    },
    {
      title: '规则编号1',
      dataIndex: 'no'
    },
    {
      title: '描述',
      dataIndex: 'description',
      scopedSlots: { customRender: 'description' }
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
      sorter: true,
      needTotal: true,
      customRender: (text) => text + ' 次'
    },
    {
      title: '状态',
      dataIndex: 'status',
      scopedSlots: { customRender: 'status' }
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      sorter: true
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: '150px',
      scopedSlots: { customRender: 'action' }
    }
  ]
  const message = '请求成功'
  const code = 0
  const headers = {}
  return builder(data, message, code, headers)
}
Mock.mock(/\/custom\/table\/column/, 'post', tableColumn)
