# Food Ordering API

## Mô tả

Dự án này cung cấp các API cho một hệ thống đặt món ăn trực tuyến, bao gồm các chức năng như like/unlike nhà hàng, đánh giá nhà hàng, và đặt món ăn. Dự án sử dụng các công nghệ sau:
- **Node.js** với **Express.js** cho việc xây dựng API.
- **Sequelize** cho ORM và kết nối cơ sở dữ liệu MySQL.
- **ES6** cho việc viết mã hiện đại và gọn gàng.

## Cấu trúc thư mục

project/
│
├── config/
│ └── database.js # Cấu hình kết nối cơ sở dữ liệu
├── controllers/
│ └── restaurantController.js # Xử lý các nghiệp vụ liên quan đến nhà hàng
│ └── userController.js # Xử lý các nghiệp vụ liên quan đến người dùng
├── models/
│ └── index.js # Khởi tạo và đồng bộ các model với cơ sở dữ liệu
│ └── User.js # Định nghĩa model User
│ └── Restaurant.js # Định nghĩa model Restaurant
│ └── Order.js # Định nghĩa model Order
│ └── LikeRes.js # Định nghĩa model LikeRes
│ └── RateRes.js # Định nghĩa model RateRes
│ └── Food.js # Định nghĩa model Food
│ └── SubFood.js # Định nghĩa model SubFood
│ └── FoodType.js # Định nghĩa model FoodType
├── routes/
│ └── restaurantRoutes.js # Định nghĩa các route liên quan đến nhà hàng
│ └── userRoutes.js # Định nghĩa các route liên quan đến người dùng
├── app.js # Thiết lập ứng dụng Express và middleware
└── server.js # Khởi động server và kết nối cơ sở dữ liệu

## Các thành phần chính

### 1. `config/database.js`

Thiết lập kết nối cơ sở dữ liệu với Sequelize.

### 2. `models/`

Định nghĩa các model và quan hệ giữa các bảng trong cơ sở dữ liệu.

- **User.js**: Định nghĩa bảng `user`.
- **Restaurant.js**: Định nghĩa bảng `restaurant`.
- **Order.js**: Định nghĩa bảng `order`.
- **LikeRes.js**: Định nghĩa bảng `like_res`.
- **RateRes.js**: Định nghĩa bảng `rate_res`.
- **Food.js**: Định nghĩa bảng `food`.
- **SubFood.js**: Định nghĩa bảng `sub_food`.
- **FoodType.js**: Định nghĩa bảng `food_type`.
- **index.js**: Đồng bộ tất cả các model với cơ sở dữ liệu và thiết lập các quan hệ.

### 3. `controllers/`

Xử lý các nghiệp vụ chính.

- **restaurantController.js**: Xử lý các yêu cầu like/unlike và lấy danh sách likes của nhà hàng.
- **userController.js**: Xử lý các yêu cầu đánh giá nhà hàng, lấy danh sách đánh giá, và đặt món ăn.

### 4. `routes/`

Định nghĩa các tuyến API.

- **restaurantRoutes.js**: Định nghĩa các route cho các nghiệp vụ liên quan đến nhà hàng.
- **userRoutes.js**: Định nghĩa các route cho các nghiệp vụ liên quan đến người dùng.

### 5. `app.js`

Thiết lập ứng dụng Express và các middleware cần thiết.

### 6. `server.js`

Khởi động server và kết nối cơ sở dữ liệu.

## Cách chạy dự án

### Yêu cầu hệ thống

- Node.js v20
- Yarn
- MySQL

### Cài đặt

1. Clone repository này về máy của bạn:
    ```bash
   git clone https://github.com/yourusername/food-ordering-api.git
   cd food-ordering-api
    ```

2. Cài đặt các depedencies:
    ```bash
    yarn add express sequelize mysql2 body-parser dotenv
    yarn add --dev sequelize-cli
    ```
3. Tạo 1 file .env ở thư muc root và cấu hinh chuôi đăng nhâp
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=db_food

4. Thiết lập cơ sở dữ liệu MySQL và cập nhật thông tin kết nối trong `config/database.js`:
    ```javascript
    const sequelize = new Sequelize('db_food', 'username', 'password', {
        host: 'localhost',
        dialect: 'mysql'
    });
    ```

5. Đồng bộ các model với cơ sở dữ liệu:
    ```bash
    yarn sequelize db:migrate
    yarn sequelize db:seed:all

    ```

6. Chạy server:
    ```bash
    yarn start
    ```

Server sẽ chạy trên cổng `3000` (hoặc cổng được chỉ định trong biến môi trường `PORT`).

### Sử dụng API

- Để like nhà hàng:
    ```http
    POST /restaurant/like
    {
        "user_id": 1,
        "res_id": 1
    }
    ```

- Để unlike nhà hàng:
    ```http
    POST /restaurant/unlike
    {
        "user_id": 1,
        "res_id": 1
    }
    ```

- Để lấy danh sách likes của nhà hàng:
    ```http
    GET /restaurant/likes?user_id=1&res_id=1
    ```

- Để đánh giá nhà hàng:
    ```http
    POST /user/rate
    {
        "user_id": 1,
        "res_id": 1,
        "amount": 5
    }
    ```

- Để lấy danh sách đánh giá:
    ```http
    GET /user/ratings?user_id=1&res_id=1
    ```

- Để đặt món ăn:
    ```http
    POST /user/order
    {
        "user_id": 1,
        "food_id": 1,
        "amount": 2,
        "code": "ABC123",
        "arr_sub_id": "1,2,3"
    }
    ```
### Testing with Postman 
Import the provided Postman collection to test the API endpoints. The collection includes the following requests:

1. Like Restaurant
   
   POST `http://localhost:3000/restaurant/like`

   ```http
   {
        "user_id": 1,
        "res_id": 1
   }
   ```
2. Unlike Restaurant
   
   POST `http://localhost:3000/restaurant/unlike`

    ```http
   {
        "user_id": 6,
        "res_id": 6
   }
   ```
3. Get Like
   
   GET `http://localhost:3000/restaurant/likes?user_id=1&res_id=1`

4. Rate Restaurant
   
   POST `http://localhost:3000/user/rate`

     ```http
   {
        "user_id": 1,
        "res_id": 1,
        "amount": 5
   }
   ```
5. Get Rating

   GET `http://localhost:3000/user/ratings?user_id=1&res_id=1`

6. Place Order

   POST `http://localhost:3000/user/order`

      ```http
   {
        "user_id": 1,
        "food_id": 1,
        "amount": 2,
        "code": "A123",
        "arr_sub_id": "1,2"
   }
   ```