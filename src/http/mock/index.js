export default [
	{
		url: "/api/login", // 模拟登录的链接
		method: "post", // 请求方式
		timeout: 100, // 超时时间
		statusCode: 200, // 返回的http状态码
		response: { // 返回的结果集
			code: 200,
			message: "登录成功",
			data: {
				name: "Lufei"
			},
		},
	},
  {
		url: "/api/getCardsData",
		method: "get", // 请求方式
		timeout: 2 * 1000, // 超时时间
		statusCode: 200, // 返回的http状态码
		response: { // 返回的结果集
			code: 200,
			message: "成功",
			data: {
        list: [
          {
            id: 1,
            title: 'Heart',
            name: 'heart',
            copy: '这是一个心跳形态的loading动画.',
            button: '预览'
          },
          {
            id: 2,
            title: 'Heart',
            name: 'heart',
            copy: '这是一个心跳形态的loading动画.',
            button: '预览'
          },
          {
            id: 3,
            title: 'Heart',
            name: 'heart',
            copy: '这是一个心跳形态的loading动画.',
            button: '预览'
          },
          {
            id: 4,
            title: 'Heart',
            name: 'heart',
            copy: '这是一个心跳形态的loading动画.',
            button: '预览'
          },
          {
            id: 5,
            title: 'Heart',
            name: 'heart',
            copy: '这是一个心跳形态的loading动画.',
            button: '预览'
          },
        ]
			}
		}
	}
]