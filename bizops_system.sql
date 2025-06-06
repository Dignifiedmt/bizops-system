-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2025 at 01:55 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bizops_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_log`
--

CREATE TABLE `activity_log` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `log_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `action` varchar(255) NOT NULL,
  `details` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `category_id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `serial_no` int(11) NOT NULL,
  `customer_id` varchar(36) NOT NULL,
  `name` varchar(150) NOT NULL,
  `items_bought` text DEFAULT NULL,
  `total_amount` decimal(12,2) DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `inventory_id` varchar(36) NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `quantity_on_hand` int(11) NOT NULL DEFAULT 0,
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `notification_id` varchar(36) NOT NULL,
  `user_id` varchar(36) DEFAULT NULL,
  `message` text NOT NULL,
  `seen` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `name` varchar(150) NOT NULL,
  `category_id` varchar(36) NOT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report_cache`
--

CREATE TABLE `report_cache` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `cache_id` varchar(36) NOT NULL,
  `report_name` varchar(100) NOT NULL,
  `parameters` text DEFAULT NULL,
  `result` text DEFAULT NULL,
  `generated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `role_id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sales_base`
--

CREATE TABLE `sales_base` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `sale_id` varchar(36) NOT NULL,
  `sale_date` date NOT NULL,
  `customer_id` varchar(36) DEFAULT NULL,
  `user_id` varchar(36) DEFAULT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `notes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sale_items_base`
--

CREATE TABLE `sale_items_base` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `sale_item_id` varchar(36) NOT NULL,
  `sale_id` varchar(36) NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `setting_id` varchar(36) NOT NULL,
  `key_name` varchar(100) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `active` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `serial_no` bigint(20) UNSIGNED NOT NULL,
  `user_role_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `role_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_log`
--
ALTER TABLE `activity_log`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `log_id` (`log_id`),
  ADD UNIQUE KEY `serial_no` (`serial_no`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `category_id` (`category_id`),
  ADD UNIQUE KEY `serial_no` (`serial_no`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `customer_id` (`customer_id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `inventory_id` (`inventory_id`),
  ADD UNIQUE KEY `serial_no` (`serial_no`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `notification_id` (`notification_id`),
  ADD UNIQUE KEY `serial_no` (`serial_no`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `product_id` (`product_id`),
  ADD UNIQUE KEY `serial_no` (`serial_no`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `report_cache`
--
ALTER TABLE `report_cache`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `cache_id` (`cache_id`),
  ADD UNIQUE KEY `serial_no` (`serial_no`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `role_id` (`role_id`),
  ADD UNIQUE KEY `serial_no` (`serial_no`);

--
-- Indexes for table `sales_base`
--
ALTER TABLE `sales_base`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `sale_id` (`sale_id`),
  ADD UNIQUE KEY `serial_no` (`serial_no`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `sale_items_base`
--
ALTER TABLE `sale_items_base`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `sale_item_id` (`sale_item_id`),
  ADD UNIQUE KEY `serial_no` (`serial_no`),
  ADD KEY `sale_id` (`sale_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `setting_id` (`setting_id`),
  ADD UNIQUE KEY `key_name` (`key_name`),
  ADD UNIQUE KEY `serial_no` (`serial_no`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `serial_no` (`serial_no`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`serial_no`),
  ADD UNIQUE KEY `user_role_id` (`user_role_id`),
  ADD UNIQUE KEY `serial_no` (`serial_no`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_log`
--
ALTER TABLE `activity_log`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `report_cache`
--
ALTER TABLE `report_cache`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sales_base`
--
ALTER TABLE `sales_base`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sale_items_base`
--
ALTER TABLE `sale_items_base`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `serial_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity_log`
--
ALTER TABLE `activity_log`
  ADD CONSTRAINT `activity_log_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);

--
-- Constraints for table `sales_base`
--
ALTER TABLE `sales_base`
  ADD CONSTRAINT `sales_base_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `sales_base_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `sale_items_base`
--
ALTER TABLE `sale_items_base`
  ADD CONSTRAINT `sale_items_base_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sales_base` (`sale_id`),
  ADD CONSTRAINT `sale_items_base_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`);

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `create_monthly_sales_tables` ON SCHEDULE EVERY 1 MONTH STARTS '2025-07-04 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO BEGIN
    DECLARE ym VARCHAR(7);
    DECLARE sales_tbl VARCHAR(64);
    DECLARE items_tbl VARCHAR(64);
    DECLARE sql_text TEXT;

    SET ym = DATE_FORMAT(CURRENT_DATE, '%Y_%m');
    SET sales_tbl = CONCAT('sales_', ym);
    SET items_tbl = CONCAT('sale_items_', ym);

    SET sql_text = CONCAT('CREATE TABLE IF NOT EXISTS ', sales_tbl, ' LIKE sales_base');
    PREPARE stmt FROM sql_text; EXECUTE stmt; DEALLOCATE PREPARE stmt;

    SET sql_text = CONCAT('CREATE TABLE IF NOT EXISTS ', items_tbl, ' LIKE sale_items_base');
    PREPARE stmt FROM sql_text; EXECUTE stmt; DEALLOCATE PREPARE stmt;
END$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
