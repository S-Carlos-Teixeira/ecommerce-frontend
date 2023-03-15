# Project3 MERN E-Commerce

## Description
This is a full stack e-commerce website built with the MERN (Mongoose, Express, React, Node) stack. The website allows users to browse products, add them to their cart, and purchase them. The website also allows users to register and login. As a Admin you can also create new products. The website is deployed on Netlify, and the API on fly.io the Back-end also uses MongoDB Atlas for the database.

## Getting Started

The project can be accessed on **[my GitHub profile on ecommerce-frontend repository,](https://github.com/scarlosteixeira/ecommerce-frontend)** **[and the Back-end on ecommerce-api repository.](https://github.com/scarlosteixeira/ecommerce-api)** <br>
This project is open source and can be downloaded, used and modified by anyone, as far as credit is given.

The project was made in a group of two, to be completed within 11 days, where I have been responsable for the Back-end and my partner, **[AlishanKably,](https://github.com/AlishanKably/Project-03)** for the Front-end. The project is split as it follows: <br>

1. 2 day of whiteboarding and singing off.
2. 5 days for research, development and coding.
3. 2 days to get a minimum viable project.
4. 1 day for polishing, bug fixing.
5. 1 day to present the completed project.

## Technologies Used
### Front-end
* Axios
* Bulma
* Google Chrome
* HTML 5
* Netlify
* React
* React DOM
* react-router-dom
* VS Code
* TypeScript

### Back-end
* bcrypt
* cors
* dotenv
* Express
* express-mongo-sanitize
* fly.io
* Git / GitHub
* http-status-codes
* Insomnia
* jsonwebtoken
* MongoDB Atlas
* Mongoose
* mongoose-hidden
* mongoose-unique-validator
* Node.js
* TypeScript
* validator
* VS Code

### Side Tools
* Jira
* Escalidraw

## Brief

* Work in a team, using **git to code collaboratively**.
* **Build a full-stack application** by making a backend/frontend
* **Use an Express API** to serve your data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Be deployed online** so it's publicly accessible.
* **Have automated tests** for _at least_ one RESTful resource on the back-end.

## Planning

We started the project by planning the tasks and features we wanted to implement. We then split the tasks between us, and then I started to work on the Back-end. We used **[Jira](https://www.atlassian.com/software/jira)** to keep track of our progress and tasks.

![JiraOverview](./git-img/JiraOverview.png)

The code management was done using **[GitHub,](https://docs.github.com/en)** as we were working on different project sides, we usually didn`t had any conflicts, but during the polishing / bug solving stage, we joined efforts on the front-end to solve some bugs and eventually some conflicts had happened.

The first step on the Back-end was the modeling of models and its relationships. when we had the models ready, we started to work on the routes.

![models](./git-img/e-commerceDbERD.png)

```TypeScript
const router = express.Router()

router.route('/test').get((req: Request, res: Response) => {
  res.send('Test successfull')
  console.log('Test successfull')
})

//user endpoints

router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/seller/signup').post(sellerSignup)
router.route('/user').get(secureRoute, getCurrentUser)

// product endpoints
router.route('/products').get(getProducts)
router.route('/product/:productId')
  .get(getProduct)
  .put(secureRoute, updateProduct)
  .delete(secureRoute, deleteProduct)
router.route('/addproduct').post(secureRoute, addProduct)

//comments endpoints
router.route('/product/:productId/comment').post(secureRoute, addComment)
router.route('/product/:productId/comment/:commentId')
  .put(secureRoute, updateComment)
  .delete(secureRoute, deleteComment)

//cart endpoints
router.route('/cart').get(secureRoute, getCart)
router.route('/product/:productId/cart')
.post(secureRoute, addProductsToCart)
.put(secureRoute, updateProductsToCart)
.delete(secureRoute, deleteCartProducts)
router.route('/cart/:cartId').delete(secureRoute, deleteCart)

// order endpoints
router.route('/order').get(secureRoute, getOrder)
router.route('/cart/:cartId/order').post(secureRoute, addOrder)
```



## Technical Reference
### Front-end
* **[Axios](https://www.npmjs.com/package/axios)**
* **[Bulma](https://bulma.io/)**
* **[Google Chrome](https://www.google.com/chrome/)**
* **[HTML 5](https://developer.mozilla.org/en-US/docs/Web/HTML)**
* **[Netlify](https://docs.netlify.com/)**
* **[React](https://reactjs.org/)**
* **[React DOM](https://reactjs.org/docs/react-dom.html)**
* **[react-router-dom](https://github.com/remix-run/react-router#readme)**
* **[VS Code](https://code.visualstudio.com/docs)**
* **[TypeScript](https://www.typescriptlang.org/docs/home.html)**

### Back-end
* **[bcrypt](https://www.npmjs.com/package/bcrypt)**
* **[cors](https://www.npmjs.com/package/cors)**
* **[dotenv](https://www.npmjs.com/package/dotenv)**
* **[Express](https://expressjs.com/en/starter/installing.html)**
* **[express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize)**
* **[fly.io](https://fly.io/docs/getting-started/)**
* **[Git / GitHub](https://docs.github.com/en)**
* **[http-status-codes](https://www.npmjs.com/package/http-status-codes)**
* **[insomnia](https://docs.insomnia.rest/)**
* **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
* **[MongoDB Atlas](https://docs.atlas.mongodb.com/)**
* **[Mongoose](https://mongoosejs.com/docs/guide.html)**
* **[mongoose-hidden](https://www.npmjs.com/package/mongoose-hidden)**
* **[mongoose-unique-validator](https://www.npmjs.com/package/mongoose-unique-validator)**
* **[Node.js](https://nodejs.org/en/docs/)**
* **[validator](https://www.npmjs.com/package/validator)**

### Side Tools
* **[Jira](https://www.atlassian.com/software/jira)**
* **[Escalidraw](https://github.com/excalidraw/excalidraw#documentation)**

## Build/Code Process



## Challenges
The first challenge was to work collaboratively on the same project, but we managed to overcome it with a good planning and communication. Jira was a great tool to keep track of the tasks and the progress. Git was also a great tool to keep track of the changes and the conflicts. The use of branches was also a great way to avoid conflicts.

The second challenge was to design the database, in the way that we avoid the duplication of data. I solved this using the references and the population of the data. Eg. when you put a product in the cart, its create a array of products, but instead of storing the product data, it stores the product id, and when you need to get the product data, you can use the product id to get the product data from the product collection. 

you can see below, how the cart is structured on database, the response, and how I populated the product data.

``` TypeScript
const cart = await Cart.find({ user: [currentUser] }).populate({path:'products.product'})
```

![Cart DB](./git-img/Cart.png) 

```JSON
[
	{
		"_id": "640e43cb5b400f619d7b35e6",
		"user": "63b748ba6186992ed4195c97",
		"products": [
			{
				"product": {
					"_id": "63b748ba6186992ed4195ca2",
					"name": "ryzen 5 5600X",
					"price": 170,
					"quantity": 1,
					"user": "63b748ba6186992ed4195c97",
					"reviews": [
						{
							"comment": "nice upgrade for my old R5 1600",
							"rating": 5,
							"user": "63b748ba6186992ed4195c97",
							"_id": "63b98b6560c3b3844943c8fe",
							"createdAt": "2023-01-07T15:10:29.057Z",
							"updatedAt": "2023-01-07T15:10:29.057Z"
						},
						{
							"comment": "nice upgrade for my old R5 1600",
							"rating": 5,
							"user": "63b748ba6186992ed4195c97",
							"_id": "63b991696e6bd0cf53d32266",
							"createdAt": "2023-01-07T15:36:09.408Z",
							"updatedAt": "2023-01-07T15:36:09.408Z"
						},
						{
							"comment": "nice upgrade for my old R5 1600",
							"rating": 5,
							"user": "63b748ba6186992ed4195c97",
							"_id": "63b991a271a98ccc95377556",
							"createdAt": "2023-01-07T15:37:06.314Z",
							"updatedAt": "2023-01-07T15:37:06.314Z"
						}
					],
					"createdAt": "2023-01-05T22:01:30.655Z",
					"updatedAt": "2023-01-07T15:37:06.315Z",
					"__v": 3,
					"image": "https://www.laptop.lk/wp-content/uploads/2022/01/AMD-Ryzen-5-5600X-Processor-01-1.jpg",
					"categories": "CPU"
				},
				"quantity": 1,
				"_id": "640e43cb5b400f619d7b35e7"
			},
			{
				"product": {
					"_id": "63bebdd520e8b00cd7eb677f",
					"name": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
					"description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
					"price": 64,
					"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
					"quantity": 1,
					"user": "63b748ba6186992ed4195c97",
					"reviews": [],
					"createdAt": "2023-01-11T13:47:01.018Z",
					"updatedAt": "2023-01-11T13:47:01.018Z",
					"__v": 0,
					"categories": "HDD/SSD"
				},
				"quantity": 1,
				"_id": "641220888a9ac9c06bb36e3b"
			}
		],
		"isCheckedOut": true,
		"createdAt": "2023-03-12T21:27:39.613Z",
		"updatedAt": "2023-03-15T19:46:16.156Z",
		"__v": 5
```

This structure is only possible because of the references and the population of the data, it save a lot of space on the database, it's easier to manage the data structure and the data itself.

I had a bit more problem with this data structure and the population of the data on the order controller, because I had to populate the data from the cart, and then populate the data from the product. I solved this using nested population. the method is the same, but you have to pass the path of the data you want to populate (cart), the nested path of the data you want to populate (product), and the model for the nested data. 

``` TypeScript
const order = await Order.find({user: [currentUser] }).populate('user').populate({path:'cart', populate:{path: 'products.product', model:'Product'}})
```

![OrderDB](./git-img/OrderDB.png)

```JSON 
[
	{
		"_id": "640e43d15b400f619d7b35fb",
		"user": {
			"username": "carlos",
			"isSeller": true
		},
		"cart": {
			"_id": "640e43cb5b400f619d7b35e6",
			"user": "63b748ba6186992ed4195c97",
			"products": [
				{
					"product": {
						"_id": "63b748ba6186992ed4195ca2",
						"name": "ryzen 5 5600X",
						"price": 170,
						"quantity": 1,
						"user": "63b748ba6186992ed4195c97",
						"reviews": [
							{
								"comment": "nice upgrade for my old R5 1600",
								"rating": 5,
								"user": "63b748ba6186992ed4195c97",
								"_id": "63b98b6560c3b3844943c8fe",
								"createdAt": "2023-01-07T15:10:29.057Z",
								"updatedAt": "2023-01-07T15:10:29.057Z"
							},
							{
								"comment": "nice upgrade for my old R5 1600",
								"rating": 5,
								"user": "63b748ba6186992ed4195c97",
								"_id": "63b991696e6bd0cf53d32266",
								"createdAt": "2023-01-07T15:36:09.408Z",
								"updatedAt": "2023-01-07T15:36:09.408Z"
							},
							{
								"comment": "nice upgrade for my old R5 1600",
								"rating": 5,
								"user": "63b748ba6186992ed4195c97",
								"_id": "63b991a271a98ccc95377556",
								"createdAt": "2023-01-07T15:37:06.314Z",
								"updatedAt": "2023-01-07T15:37:06.314Z"
							}
						],
						"createdAt": "2023-01-05T22:01:30.655Z",
						"updatedAt": "2023-01-07T15:37:06.315Z",
						"__v": 3,
						"image": "https://www.laptop.lk/wp-content/uploads/2022/01/AMD-Ryzen-5-5600X-Processor-01-1.jpg",
						"categories": "CPU"
					},
					"quantity": 1,
					"_id": "640e43cb5b400f619d7b35e7"
				},
				{
					"product": {
						"_id": "63bebdd520e8b00cd7eb677f",
						"name": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
						"description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
						"price": 64,
						"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
						"quantity": 1,
						"user": "63b748ba6186992ed4195c97",
						"reviews": [],
						"createdAt": "2023-01-11T13:47:01.018Z",
						"updatedAt": "2023-01-11T13:47:01.018Z",
						"__v": 0,
						"categories": "HDD/SSD"
					},
					"quantity": 1,
					"_id": "641220888a9ac9c06bb36e3b"
				}
			],
			"isCheckedOut": true,
			"createdAt": "2023-03-12T21:27:39.613Z",
			"updatedAt": "2023-03-15T19:46:16.156Z",
			"__v": 5
		},
		"amount": 170,
		"status": "pending",
		"createdAt": "2023-03-12T21:27:45.287Z",
		"updatedAt": "2023-03-12T21:27:45.287Z",
		"__v": 0
	}
]
```
## Wins



## Key Learnings/Takeaways

## Bugs

## Future Features
