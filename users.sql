-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 05, 2021 at 02:09 PM
-- Server version: 10.3.31-MariaDB-log-cll-lve
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `etertroi_eternity_rest`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Account` varchar(255) DEFAULT NULL,
  `UserName` varchar(55) DEFAULT NULL,
  `Email` varchar(55) DEFAULT NULL,
  `Biography` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `Account`, `UserName`, `Email`, `Biography`) VALUES
(1, '0x7C76e16c09EA163518a46450a13b81DBB774Eb78', 'Pavel', 'jahidulku120912@gmail.com', 'To do this, follow the directions in the Create a custom startup file section below. Add the application\'s configuration to the '),
(2, '0x75BeAa4bFb1DBc9Ee257D4E4E48D438BC76f8d57', 'wayne samiere', 'wayne.samiere@gmail.com', 'fresh every day'),
(3, '0xf6C5F18e305eE929BA373799a17D234854FA3d82', 'Jahidul islam ', 'jahidulislam@gmail.com', 'Currently, the blue verification checkmarks are for OpenSea Partners, major projects, or public figures. They are intended to verify the identify of the owner or collection similar to a verification checkmarks on Instagram or Twitter');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
