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
            src: 'https://s2.loli.net/2022/01/22/ENAzy8cMY6LwjXI.png',
            codeSrc: 'https://github.com/guxuerui/example-html-css/tree/main/heart',
            title: 'Heart',
            name: 'heart',
            desc: '心跳形态的loading动画'
          },
          {
            id: 2,
            src: 'https://s2.loli.net/2022/01/22/mh3JwfOTFyDvj5L.png',
            codeSrc: 'https://github.com/guxuerui/example-html-css/tree/main/dynamic-login',
            title: 'Dynamic Login Page',
            name: 'dynamic-login',
            desc: '有简单的动态变化效果的登录页面'
          },
          {
            id: 3,
            src: 'https://s2.loli.net/2022/01/22/1eIKwk5bXLaWJMy.png',
            codeSrc: 'https://github.com/guxuerui/example-html-css/tree/main/space-login',
            title: 'Space Login Page',
            name: 'space-login',
            desc: '超时空背景动画登录页面'
          },
          {
            id: 4,
            src: 'https://s2.loli.net/2022/01/22/ENAzy8cMY6LwjXI.png',
            codeSrc: 'https://github.com/guxuerui/example-html-css/tree/main/heart',
            title: 'Heart',
            name: 'heart',
            desc: '这是一个心跳形态的loading动画.'
          },
          {
            id: 5,
            src: 'https://s2.loli.net/2022/01/22/ENAzy8cMY6LwjXI.png',
            codeSrc: 'https://github.com/guxuerui/example-html-css/tree/main/heart',
            title: 'Heart',
            name: 'heart',
            desc: '这是一个心跳形态的loading动画.'
          },
        ]
			}
		}
	}
]