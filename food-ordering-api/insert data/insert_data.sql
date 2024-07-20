-- Insert sample data for user
INSERT INTO user (full_name, email, password) VALUES
('John Doe', 'john@example.com', 'password123'),
('Jane Smith', 'jane@example.com', 'password123'),
('Alice Johnson', 'alice@example.com', 'password123'),
('Bob Brown', 'bob@example.com', 'password123'),
('Charlie Davis', 'charlie@example.com', 'password123'),
('Emily Evans', 'emily@example.com', 'password123'),
('Frank Green', 'frank@example.com', 'password123'),
('Grace Hill', 'grace@example.com', 'password123'),
('Hannah King', 'hannah@example.com', 'password123'),
('Ian Lee', 'ian@example.com', 'password123');

-- Insert sample data for restaurant
INSERT INTO restaurant (res_name, image, `desc`) VALUES
('Restaurant A', 'image1.jpg', 'Delicious food'),
('Restaurant B', 'image2.jpg', 'Great ambiance'),
('Restaurant C', 'image3.jpg', 'Affordable prices'),
('Restaurant D', 'image4.jpg', 'Friendly staff'),
('Restaurant E', 'image5.jpg', 'Quick service'),
('Restaurant F', 'image6.jpg', 'Cozy place'),
('Restaurant G', 'image7.jpg', 'Family friendly'),
('Restaurant H', 'image8.jpg', 'Great location'),
('Restaurant I', 'image9.jpg', 'Tasty dishes'),
('Restaurant J', 'image10.jpg', 'Awesome experience');

-- Insert sample data for food_type
INSERT INTO food_type (type_name) VALUES
('Appetizer'),
('Main Course'),
('Dessert'),
('Beverage'),
('Salad'),
('Soup'),
('Pizza'),
('Pasta'),
('Sandwich'),
('Seafood');

-- Insert sample data for food
INSERT INTO food (food_name, image, price, `desc`, type_id) VALUES
('Burger', 'burger.jpg', 5.99, 'Juicy burger', 2),
('Pizza', 'pizza.jpg', 8.99, 'Cheesy pizza', 7),
('Pasta', 'pasta.jpg', 7.99, 'Delicious pasta', 8),
('Salad', 'salad.jpg', 4.99, 'Fresh salad', 5),
('Soda', 'soda.jpg', 1.99, 'Refreshing soda', 4),
('Ice Cream', 'icecream.jpg', 3.99, 'Creamy ice cream', 3),
('Soup', 'soup.jpg', 4.99, 'Hot soup', 6),
('Sandwich', 'sandwich.jpg', 5.99, 'Tasty sandwich', 9),
('Steak', 'steak.jpg', 12.99, 'Grilled steak', 2),
('Shrimp', 'shrimp.jpg', 14.99, 'Grilled shrimp', 10);

-- Insert sample data for sub_food
INSERT INTO sub_food (sub_name, sub_price, food_id) VALUES
('Cheese', 0.99, 1),
('Bacon', 1.49, 1),
('Pepperoni', 1.99, 2),
('Mushrooms', 0.99, 2),
('Garlic Bread', 2.49, 3),
('Croutons', 0.99, 4),
('Ice Cubes', 0.50, 5),
('Chocolate Chips', 0.99, 6),
('Bread', 1.49, 7),
('Chips', 1.99, 9);

-- Insert sample data for order
INSERT INTO `order` (user_id, food_id, amount, code, arr_sub_id) VALUES
(1, 1, 2, 'CODE123', '1,2'),
(2, 2, 1, 'CODE456', '3,4'),
(3, 3, 1, 'CODE789', '5'),
(4, 4, 3, 'CODE101', '6'),
(5, 5, 2, 'CODE112', '7'),
(6, 6, 1, 'CODE131', '8'),
(7, 7, 2, 'CODE415', '9'),
(8, 8, 1, 'CODE161', ''),
(9, 9, 1, 'CODE718', '10'),
(10, 10, 3, 'CODE192', '');

-- Insert sample data for rate_res
INSERT INTO rate_res (user_id, res_id, amount, date_rate) VALUES
(1, 1, 5, '2023-01-01 12:00:00'),
(2, 2, 4, '2023-01-02 13:00:00'),
(3, 3, 3, '2023-01-03 14:00:00'),
(4, 4, 2, '2023-01-04 15:00:00'),
(5, 5, 1, '2023-01-05 16:00:00'),
(6, 6, 5, '2023-01-06 17:00:00'),
(7, 7, 4, '2023-01-07 18:00:00'),
(8, 8, 3, '2023-01-08 19:00:00'),
(9, 9, 2, '2023-01-09 20:00:00'),
(10, 10, 1, '2023-01-10 21:00:00');

-- Insert sample data for like_res
INSERT INTO like_res (user_id, res_id, date_like) VALUES
(1, 1, '2023-01-01 12:00:00'),
(2, 2, '2023-01-02 13:00:00'),
(3, 3, '2023-01-03 14:00:00'),
(4, 4, '2023-01-04 15:00:00'),
(5, 5, '2023-01-05 16:00:00'),
(6, 6, '2023-01-06 17:00:00'),
(7, 7, '2023-01-07 18:00:00'),
(8, 8, '2023-01-08 19:00:00'),
(9, 9, '2023-01-09 20:00:00'),
(10, 10, '2023-01-10 21:00:00');
