const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'POST /api/mytest/list': (req: any, res: any) => {
    res.json({
      success: true,
      errCode: 0,
      data: {
        data: [
          { key: 1, value: '测试1' },
          { key: 2, value: '测试2' },
        ],
        userData: req.body,
      },
    });
  },
  'GET /api/testOne': (req: any, res: any) => {
    res.json({
      success: true,
      errCode: 0,
      data: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ],
    });
  },

  'GET /api/testTwo': (req: any, res: any) => {
    res.json({
      success: true,
      errCode: 0,
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '4',
          name: '测试',
          age: 11,
          address: 'test',
          tags: ['test'],
        },
      ],
    });
  },
  'GET /api/draggbleTable': {
    data: [],
    errCode: 0,
  },
};
