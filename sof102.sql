-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2023 at 04:55 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sof102`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `number` varchar(20) DEFAULT NULL,
  `email` varchar(72) NOT NULL,
  `work_reflection` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `number`, `email`, `work_reflection`, `created_at`, `updated_at`) VALUES
(1, 'Utsav Nepal', '9743214900', 'utsav@gmail.com', 'I have done the design part of this website', '2023-10-28 02:48:48', NULL),
(2, 'Sandip Poudel', '982380234', 'sandip@gmail.com', 'I have done the frontend part of this website', '2023-09-29 16:39:15', NULL),
(3, 'Ritika Karki', '909238032', 'ritika@gmail.com', 'I have done the API part of this website( fetching and requesting data)', '2023-10-28 02:49:40', NULL),
(4, 'Pritam Magar', '982323423', 'pritam@gmail.com', 'I have done the backend part of this website.', '2023-10-28 02:51:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` varchar(255) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `price` double NOT NULL,
  `author` varchar(200) NOT NULL,
  `type` varchar(150) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `category` varchar(200) NOT NULL,
  `product` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `description`, `price`, `author`, `type`, `img`, `category`, `product`, `created_at`, `updated_at`) VALUES
('b1', 'The Power of HABIT', 'The Power of HABIT: Why We Do What We Do in Life and Business. A young woman walks into a laboratory. Over the past two years, she has transformed almost every aspect of her life. She has quit smoking, run a marathon, and been promoted at work. The patterns inside her brain, neurologists discover, have fundamentally changed.', 16.33, 'Charles Duhigg', 'hardcover', 'https://images-na.ssl-images-amazon.com/images/I/51ejXdSceNL._AA300_.jpg', 'business', 1, '2023-09-16 16:39:15', NULL),
('b10', 'True Fiction (Ian Ludlow Thrillers)', 'A breakneck thriller where truth and fiction collide for the unluckiest writer alive.', 4.99, 'Lee Goldberg', 'kindle', 'https://images-na.ssl-images-amazon.com/images/I/51UbplnqSgL._SX331_BO1,204,203,200_.jpg', 'mystery', 1, '2023-09-16 16:49:55', NULL),
('b11', 'The Last Move', 'An FBI agent must catch a copycat killer. The only difference this time: she\'s the final victim.', 7.91, 'Mary Burton', 'paperback', 'https://images-na.ssl-images-amazon.com/images/I/514jRDA21TL._AA300_.jpg', 'mystery', 1, '2023-09-16 16:49:55', NULL),
('b12', 'Stillhouse Lake (Stillhouse Lake Series)', 'Gina Royal is the definition of average—a shy Midwestern housewife with a happy marriage and two adorable children. But when a car accident reveals her husband’s secret life as a serial killer, she must remake herself as Gwen Proctor—the ultimate warrior mom.', 8.96, 'Rachel Caine', 'paperback', 'https://images-na.ssl-images-amazon.com/images/I/41RTt7alEqL._SX332_BO1,204,203,200_.jpg', 'mystery', 1, '2023-09-16 16:49:55', NULL),
('b16', 'Harry Potter and the Sorcerer\'s Stone', 'On Harry\'s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!', 24.64, 'J.K.Rowling', 'hardcover', 'https://images-na.ssl-images-amazon.com/images/I/51qlgJ6ZojL.jpg', 'scifi', 1, '2023-09-16 16:49:55', NULL),
('b17', 'A Game of Thrones: A Song of Ice and Fire, Book 1', 'As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer. Magic, mystery, intrigue, romance, and adventure fill these pages and transport us to a world unlike any we have ever experienced.', 25.16, 'George R. R. Martin', 'hardcover', 'https://images-na.ssl-images-amazon.com/images/I/51n5SAiAz7L._AA300_.jpg', 'accessories', 1, '2023-09-16 16:49:55', NULL),
('b18', 'The Lord of the Rings: One Volume', 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.', 27.66, 'J.R.R. Tolkien', 'hardcover', 'https://images-na.ssl-images-amazon.com/images/I/51d4G0sFMzL.jpg', 'scifi', 1, '2023-09-16 16:49:55', NULL),
('b2', 'Think and Grow Rich', '\'Think and Grow Rich!\' explains entrepreneur Andrew Carnegie’s secret to success, revealed to Napoleon Hill during private interviews with Carnegie, the richest man of his time, and during more than 20 years of research into the lives and philosophies of more than 500 of the most successful people in America. This timeless classic presents a systematic nuts-and-bolts approach to developing the skills and mindset required to achieve exceptional success in any field or endeavor, personal or professional. Hill explains in detail 13 steps required to achieve those goals. The book contains numerous self-tests and checklists.', 8.98, 'Napoleon Hill', 'hardcover', 'https://images-na.ssl-images-amazon.com/images/I/51ZouHoBGtL._SX315_BO1,204,203,200_.jpg', 'business', 1, '2023-09-16 16:39:15', NULL),
('b3', 'The 7 Habits of Highly Effective People', 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change. The 7 Habits of Highly Effective People, the beloved classic that has sold over 20 million copies worldwide, is celebrating its 25th anniversary with this reissue! With a new foreword, the wisdom of the 7 Habits still holds true after all these years. The 7 Habits have become so famous because they work. They have been integrated into everyday thinking by many millions of people. The reason: They work. Habit 1: Be Proactive. Habit 2: Begin with the End in Mind. Habit 3: Put First Things First. Habit 4: Think Win/Win. Habit 5: Seek First to Understand, Then to Be Understood. Habit 6: Synergize. Habit 7: Sharpen the Saw. The book presents a principle-centered approach for solving personal and professional problems.', 11.48, 'Stephen R. Covey', 'paperback', 'https://images-na.ssl-images-amazon.com/images/I/51Myx6jMujL._AA300_.jpg', 'business', 1, '2023-09-16 16:44:25', NULL),
('b4', 'Principles: Life and Work', 'In Principles, Dalio shares what he\'s learned over the course of his remarkable career. He argues that life, management, economics, and investing can all be systemized into rules and understood like machines.', 18, 'Ray Dalio', 'hardcover', 'https://images-na.ssl-images-amazon.com/images/I/51UyMOpP%2BGL._AA300_.jpg', 'business', 1, '2023-09-16 16:44:25', NULL),
('b5', 'How to Win Friends & Influence People', 'For more than sixty years the rock-solid, time-tested advice in this book has carried thousands of now famous people up the ladder of success in their business and personal lives. Now this previously revised and updated bestseller is available in trade paperback for the first time to help you achieve your maximum potential throughout the next century!', 9.6, 'Dale Carnegie', 'paperback', 'https://images-na.ssl-images-amazon.com/images/I/51PWIy1rHUL._AA300_.jpg', 'business', 1, '2023-09-16 16:49:55', NULL),
('b6', 'The Whole 30', 'Since 2009, Melissa Hartwig’s critically-acclaimed Whole30 program has quietly led hundreds of thousands of people to effortless weight loss and better health—along with stunning improvements in sleep quality, energy levels, mood, and self-esteem. The program accomplishes all of this by specifically targeting people’s habits and emotional relationships with food. The Whole30 is designed to help break unhealthy patterns of behavior, stop stress-related comfort eating, and reduce cravings, particularly for sugar and carbohydrates. Many Whole30 participants have described achieving \'food freedom\'—in just thirty days.', 18, 'Melissa Hartwig', 'hardcover', 'https://images-na.ssl-images-amazon.com/images/I/61WFjEDBktL._SX437_BO1,204,203,200_.jpg', 'cookbooks', 1, '2023-09-16 16:49:55', NULL),
('b7', 'The Food Lab', 'Ever wondered how to pan-fry a steak with a charred crust and an interior that\'s perfectly medium-rare from edge to edge when you cut into it? How to make homemade mac \'n\' cheese that is as satisfyingly gooey and velvety-smooth as the blue box stuff, but far tastier? How to roast a succulent, moist turkey (forget about brining!)―and use a foolproof method that works every time?', 33.94, 'J. Kenji López-Alt', 'hardcover', 'https://images-na.ssl-images-amazon.com/images/I/419aGgQt-5L._SX392_BO1,204,203,200_.jpg', 'cookbooks', 1, '2023-09-16 16:49:55', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `electronic1s`
--

CREATE TABLE `electronic1s` (
  `id` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `wireless carrier` varchar(255) DEFAULT NULL,
  `brand` varchar(200) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `memory` varchar(50) DEFAULT NULL,
  `screen size` varchar(100) DEFAULT NULL,
  `os` varchar(100) DEFAULT NULL,
  `electronic` bigint(20) UNSIGNED NOT NULL,
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `electronic1s`
--

INSERT INTO `electronic1s` (`id`, `name`, `price`, `wireless carrier`, `brand`, `color`, `memory`, `screen size`, `os`, `electronic`, `img`, `created_at`, `updated_at`) VALUES
('e1', 'vivo Y11s 4G Smartphone, 32GB, 6.51\" HD Display (Phantom Black)', 197, 'Unlocked for All Carriers', 'VIVO', 'Black', '3 GB', '6.51 Inches', 'Android', 1, 'https://static-01.daraz.com.np/p/fb7bfb9815b4c0b38ec3bd6b2aaf987c.jpg', '2023-09-18 02:11:24', NULL),
('e2', 'Samsung Galaxy A21S 128GB Black', 294.26, 'Unlocked for All Carriers', 'Samsung', 'White', '128 GB', NULL, 'Android 10.0', 1, 'https://static-01.daraz.com.np/p/fb7bfb9815b4c0b38ec3bd6b2aaf987c.jpg', '2023-09-18 02:11:24', NULL),
('e3', 'Nokia 2720 Flip 4G (Official Australian Version) 2019 Unlocked Basic Mobile Phone with Social Apps, ', 114, 'Unlocked for All Carriers', 'Nokia', 'Ocean Black', '4 GB', NULL, 'KaiOS', 1, 'https://static-01.daraz.com.np/p/fb7bfb9815b4c0b38ec3bd6b2aaf987c.jpg', '2023-09-18 02:11:24', NULL),
('e4', 'Apple iPhone 12 Pro Max 256Gb Gold (MGD13J/A)', 2019, 'Unlocked for All Carriers', 'Apple', 'Gold', '6 GB', '6.7 Inches', 'IOS', 1, 'https://static-01.daraz.com.np/p/fb7bfb9815b4c0b38ec3bd6b2aaf987c.jpg', '2023-09-18 02:11:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `electronic2s`
--

CREATE TABLE `electronic2s` (
  `id` varchar(255) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` double NOT NULL,
  `brand` varchar(100) NOT NULL,
  `os` varchar(100) NOT NULL,
  `cpu` varchar(200) NOT NULL,
  `screen size` varchar(255) NOT NULL,
  `memory size` varchar(255) NOT NULL,
  `hardisk size` varchar(255) NOT NULL,
  `electronic` bigint(20) UNSIGNED NOT NULL,
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `electronic2s`
--

INSERT INTO `electronic2s` (`id`, `name`, `price`, `brand`, `os`, `cpu`, `screen size`, `memory size`, `hardisk size`, `electronic`, `img`, `created_at`, `updated_at`) VALUES
('e5', 'Dell Inspiron 15 3000 Full HD Touchscreen Laptop Core i7-1065G7 up to 3.90 GHz 20GB RAM 1TB SSD+1TB HDD Numeric Keypad HDMI WiFi RJ-45 Ethernet Win 10 QWERTY US', 748.07, 'DELL', 'Windows 10', 'Intel', '15.6 Inches', '8 GB', ' ', 2, 'https://static-01.daraz.com.np/p/c666846baceab50b3704c2568fe30a40.jpg', '2023-09-18 02:33:21', NULL),
('e6', 'Huawei MateBook D 15 2020 - 15.6 Inch Laptop with FullView 1080P FHD Ultrabook PC (AMD Ryzen 5 3500U, 8GB RAM, 256GB SSD, Windows 10 Home, Multi-Screen Collaboration, Fingerprint Reader), Space Grey', 831.93, 'HUAWEI', 'Windows 10 Home', 'AMD', '15.6 Inches', '8 GB', '', 2, 'https://static-01.daraz.com.np/p/c666846baceab50b3704c2568fe30a40.jpg', '2023-09-18 02:33:21', NULL),
('e7', 'Lenovo Ideapad Duet Chromebook, Chrome OS, 4GB RAM, 128GB SSD, 10.1\" CT-X636F, Ice Blue + Iron Grey, ZA6F0017AU, AU Version', 395, 'Lenovo', 'Chrome OS', 'Others', '10.1 Inches', '4 GB', '', 2, 'https://static-01.daraz.com.np/p/c666846baceab50b3704c2568fe30a40.jpg', '2023-09-18 02:33:21', NULL),
('e8', 'Apple MacBook Pro | 15.4\" | 2.9GHz 6-core i9 | 1TB Storage | 32GB Memory | Radeon Pro Vega 20 | Space Grey | 2018 | (Renewed)', 4779, 'Apple', 'Mac OS X', 'Intel', ' ', '32 GB', '1TB', 2, 'https://static-01.daraz.com.np/p/c666846baceab50b3704c2568fe30a40.jpg', '2023-09-18 02:33:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `electronics`
--

CREATE TABLE `electronics` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `product` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `electronics`
--

INSERT INTO `electronics` (`id`, `name`, `product`, `created_at`, `updated_at`) VALUES
(1, 'electronic1s', 2, '2023-09-16 16:29:05', NULL),
(2, 'electronic2s', 2, '2023-09-16 16:29:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `perfumes`
--

CREATE TABLE `perfumes` (
  `id` varchar(255) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` double NOT NULL,
  `brand` varchar(200) DEFAULT NULL,
  `ingredient` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `product` bigint(20) UNSIGNED NOT NULL,
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `perfumes`
--

INSERT INTO `perfumes` (`id`, `name`, `price`, `brand`, `ingredient`, `weight`, `product`, `img`, `created_at`, `updated_at`) VALUES
('p1', 'Calvin Klein Beauty Eau de Parfum for Women, 100ml', 39.99, 'Calvin Klein', 'Alcohol Denat, Water, Parfum', '1 Pounds', 3, 'https://www.urbangabru.in/cdn/shop/products/Urbangabru_alpha_perfume.jpg', '2023-09-16 17:29:11', NULL),
('p13', 'Jimmy Choo Eau de Toilette, 100ml', 71.94, 'JIMMY CHOO', 'Water, alcohol denatured, limonene, and linalool.', '0.37 Kilograms', 3, 'https://www.urbangabru.in/cdn/shop/products/Urbangabru_alpha_perfume.jpg', '2023-09-16 17:29:11', NULL),
('p2', 'Burberry London Fabric Eau De Parfum, 100ml', 49.99, 'BURBERRY', 'Alcohol Denat, Water, Parfum.', '100 Grams', 3, 'https://www.urbangabru.in/cdn/shop/products/Urbangabru_alpha_perfume.jpg', '2023-09-16 17:29:11', NULL),
('p25', 'Lancome La Vie Est Belle L\'Eau de Parfum Spray 100ml', 139.99, 'Lancome', 'ALCOHOL - PARFUM / FRAGRANCE - AQUA / WATER - LINALOOL - BENZYL SALICYLATE - LIMONENE - METHYL ANTHRANILATE - TRIS (TETRAMETHYLHYDROXYPIPERIDINOL) CITRATE - ETHYLHEXYL METHOXYCINNAMATE - BUTYL METHOXYDIBENZOYLMETHANE - CI 147 / RED 4 - CI 172 / RED 33 - C', '1 Pounds', 3, 'https://www.urbangabru.in/cdn/shop/products/Urbangabru_alpha_perfume.jpg', '2023-09-16 17:29:11', NULL),
('p28', 'Roja Parfums Goodnight Kiss Parfum 3.4oz/100ml New In Box', 2500, NULL, NULL, NULL, 3, 'https://www.urbangabru.in/cdn/shop/products/Urbangabru_alpha_perfume.jpg', '2023-09-16 17:29:11', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category` varchar(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category`, `created_at`, `updated_at`) VALUES
(1, 'books', '2023-09-16 16:26:45', NULL),
(2, 'electronics', '2023-09-16 16:26:45', NULL),
(3, 'perfumes', '2023-09-16 16:27:48', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `websites`
--

CREATE TABLE `websites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `owner` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `publish year` int(11) NOT NULL,
  `author` bigint(20) UNSIGNED NOT NULL,
  `product` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `websites`
--

INSERT INTO `websites` (`id`, `owner`, `description`, `publish year`, `author`, `product`, `created_at`, `updated_at`) VALUES
(1, 'SISTC', 'website for SOF102', 2021, 1, 1, '2023-09-16 16:31:27', NULL),
(2, 'SISTC', 'website for SOF102', 2021, 2, 2, '2023-09-16 16:31:27', NULL),
(3, 'SISTC', 'website for SOF102', 2021, 3, 3, '2023-09-16 16:33:15', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `books_product_foreign` (`product`);

--
-- Indexes for table `electronic1s`
--
ALTER TABLE `electronic1s`
  ADD PRIMARY KEY (`id`),
  ADD KEY `electronic1s_electronic_foreign` (`electronic`);

--
-- Indexes for table `electronic2s`
--
ALTER TABLE `electronic2s`
  ADD PRIMARY KEY (`id`),
  ADD KEY `electronic2s_electronic_foreign` (`electronic`);

--
-- Indexes for table `electronics`
--
ALTER TABLE `electronics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `electronics_product_foreign` (`product`);

--
-- Indexes for table `perfumes`
--
ALTER TABLE `perfumes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `perfumes_product_foreign` (`product`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `websites`
--
ALTER TABLE `websites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `websites_author_foreign` (`author`),
  ADD KEY `websites_product_foreign` (`product`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `electronics`
--
ALTER TABLE `electronics`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `websites`
--
ALTER TABLE `websites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_product_foreign` FOREIGN KEY (`product`) REFERENCES `products` (`id`);

--
-- Constraints for table `electronic1s`
--
ALTER TABLE `electronic1s`
  ADD CONSTRAINT `electronic1s_electronic_foreign` FOREIGN KEY (`electronic`) REFERENCES `electronics` (`id`);

--
-- Constraints for table `electronic2s`
--
ALTER TABLE `electronic2s`
  ADD CONSTRAINT `electronic2s_electronic_foreign` FOREIGN KEY (`electronic`) REFERENCES `electronics` (`id`);

--
-- Constraints for table `electronics`
--
ALTER TABLE `electronics`
  ADD CONSTRAINT `electronics_product_foreign` FOREIGN KEY (`product`) REFERENCES `products` (`id`);

--
-- Constraints for table `perfumes`
--
ALTER TABLE `perfumes`
  ADD CONSTRAINT `perfumes_product_foreign` FOREIGN KEY (`product`) REFERENCES `products` (`id`);

--
-- Constraints for table `websites`
--
ALTER TABLE `websites`
  ADD CONSTRAINT `websites_author_foreign` FOREIGN KEY (`author`) REFERENCES `authors` (`id`),
  ADD CONSTRAINT `websites_product_foreign` FOREIGN KEY (`product`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
