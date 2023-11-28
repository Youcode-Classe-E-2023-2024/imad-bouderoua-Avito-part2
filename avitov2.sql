-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2023 at 11:43 PM
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
-- Database: `avitov2`
--

-- --------------------------------------------------------

--
-- Table structure for table `anonces`
--

CREATE TABLE `anonces` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `product_photo` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `productowner` varchar(200) NOT NULL,
  `premium` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `anonces`
--

INSERT INTO `anonces` (`id`, `product_name`, `product_price`, `description`, `product_photo`, `city`, `created_at`, `updated_at`, `productowner`, `premium`) VALUES
(8, 'RGFDG', 'DFGDF', 'GDFGDF', 'uploads/2JlFblXmxiWIu4M3jthZSvrGNjO2YsdTqHlmzg06.jpg', 'DFGFDG', '2023-11-26 14:44:01', '2023-11-26 14:44:01', '', ''),
(9, 'RGFDG', 'DFGDF', 'GDFGDF', 'uploads/CYl3muVNNHNMklDKpkNdY2gk8akgvqPmxwMYD7tT.avif', 'DFGFDG', '2023-11-26 14:44:17', '2023-11-26 14:44:17', '', ''),
(10, 'namkjipo', 'dfgdf', 'dfgdfg', 'uploads/VbZDbS5NR2bUGwnE568FBHI3HaVlYXrkYfO1vSNm.jpg', 'dfgdfg', '2023-11-26 15:00:29', '2023-11-26 15:00:29', '', ''),
(11, 'namkjipo', 'dfgdf', 'dfgdfg', 'uploads/Hy6LDKgzWK03mLoHZV21JLZczzOOVdzJaVe3TfZu.jpg', 'dfgdfg', '2023-11-26 15:01:41', '2023-11-26 15:01:41', '', ''),
(12, 'namkjipo', 'dfgdf', 'dfgdfg', 'uploads/53DVEeIrl4GoJ1lGGJfS2qKOGaMAgjdT6E3ZlO5t.jpg', 'dfgdfg', '2023-11-26 15:02:59', '2023-11-26 15:02:59', '', ''),
(13, 'dasds', 'sadas', 'asdas', 'uploads/T3aDrEIFPR81TWxMIQmoYao4JGffIJDHDIPOHgDd.jpg', 'asdasd', '2023-11-26 15:03:33', '2023-11-26 15:03:33', '', ''),
(14, 'dasds', 'sadas', 'asdas', 'uploads/G8Kk7UokXwnuWdD8wGsdV4KaS13jkVQcNUVqPbFF.jpg', 'asdasd', '2023-11-26 15:05:28', '2023-11-26 15:05:28', '', ''),
(15, 'dasds', 'sadas', 'asdas', 'uploads/lbK0a1Dc6Mi8SgZscTjykKAeLqJS71sjMn5AyUsP.jpg', 'asdasd', '2023-11-26 15:06:29', '2023-11-26 15:06:29', '', ''),
(16, 'dasds', 'sadas', 'asdas', 'uploads/LCUUXHLMONRFiWQrIlpiuD8Vw6aa0wCiGa0pzERh.jpg', 'asdasd', '2023-11-26 15:06:57', '2023-11-26 15:06:57', '', ''),
(17, 'dasds', 'sadas', 'asdas', 'uploads/nF30FUJxFNSAc7uuu6THPnJcN0QL6IWNngN4N3bn.jpg', 'asdasd', '2023-11-26 15:07:16', '2023-11-26 15:07:16', '', ''),
(18, 'dasds', 'sadas', 'asdas', 'uploads/cHNtO2504uizj9vWM3MXIeCYZJfcHXAYtI2TJxpz.jpg', 'asdasd', '2023-11-26 15:09:57', '2023-11-26 15:09:57', 'imad.lahrach@outlook.fr', ''),
(19, '4ger', 'wwrg', 'wgwrg', 'uploads/eqz13z2jxuluQfHz8trSY1pWZIDs6xGh8qbxvtoV.avif', 'regwregrw', '2023-11-26 18:35:41', '2023-11-26 18:35:41', 'imad.lahrach@outlook.fr', ''),
(20, '4ger', 'wwrg', 'wgwrg', 'uploads/3LSzetom2si6BbyIGPzfBvx29AzlCVCAr086UvNE.avif', 'regwregrw', '2023-11-26 18:35:48', '2023-11-26 18:35:48', 'imad.lahrach@outlook.fr', '');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2023_11_26_115440_create_users_table', 1),
(2, '2023_11_26_144623_create_anonces_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`, `role`) VALUES
(1, 'Imad Eddine', 'Bouderoua', 'imad.lahrach@outlook.fr', NULL, '2023-11-26 11:14:41', '2023-11-26 11:14:41', ''),
(3, 'Imad Eddine', 'Bouderoua', 'imad.lahach@outlook.fr', '$2y$12$qjVzfFlrkAUrG8KC6Xq1a.eWQreAc8uWPaWh4blyjMYo6uKYNMup2', '2023-11-26 11:19:06', '2023-11-26 11:19:06', ''),
(5, 'Imad Eddine', 'Bouderoua', 'imd.lahach@outlook.fr', '$2y$12$yJ9sTPH/kP/FPkhZzLAtNeGNUqgeGOZ4iGKTHA5G1GDEadO1K/OUK', '2023-11-26 11:24:52', '2023-11-26 11:24:52', ''),
(8, 'Imad Eddine', 'Bouderoua', 'imd.ahach@outlook.fr', '$2y$12$XUMAT523V7P3XTfo62hB1OFNQ7RR4TASicKh058hwJB117qI9MIMe', '2023-11-26 11:27:29', '2023-11-26 11:27:29', ''),
(9, 'Imad Eddine', 'Bouderoua', 'imd.ahah@outlook.fr', '$2y$12$j36uiFnwg.DdoO/NhMHNVe9mM8W/RmVAzMuza/dbPD.z8qBj/.pim', '2023-11-26 11:29:59', '2023-11-26 11:29:59', ''),
(13, 'Imad Eddine', 'Bouderoua', 'imd.ahh@outlook.fr', '$2y$12$.yVQXtrYvkx28iduo9/.lO/A40hsG.oHmgkRhZUkFtmJY3SyClk5K', '2023-11-26 11:31:05', '2023-11-26 11:31:05', ''),
(16, 'Imad Eddine', 'Bouderoua', 'imd.ah@outlook.fr', '$2y$12$LBYlZBQ/ghmtHx0DWnIMi.N/eiiusn5E9LhZuaMUuxVNjzKliTGnK', '2023-11-26 11:31:53', '2023-11-26 11:31:53', ''),
(17, 'Imad Eddine', 'Bouderoua', 'ibouderoua69@gmail.com', '$2y$12$Zmr6xtApvAeCVBSb3drrt.t7CTjAV/d.Q2I0bC0JXPIxZZbUU6baW', '2023-11-26 12:17:11', '2023-11-26 12:17:11', ''),
(19, 'ad Eddine', 'Bouderoua', 'imad.l@outlook.fr', '$2y$12$JqmUstewgnPepe/p0Khj1unuGiLPzpyou7MOYMb6J9AtJPmNCzeRa', '2023-11-26 13:13:31', '2023-11-26 13:13:31', ''),
(21, 'ad Eddine', 'Bouderoua', 'imad.hl@outlook.fr', '$2y$12$B8PDUkiTSCeuHJHwf957qexpLWJWZstbEEJ3AEk0SG/Ao0NTmkgby', '2023-11-26 13:13:46', '2023-11-26 13:13:46', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anonces`
--
ALTER TABLE `anonces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anonces`
--
ALTER TABLE `anonces`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
