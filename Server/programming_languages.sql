-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 21. Feb 2023 um 13:20
-- Server-Version: 10.4.22-MariaDB
-- PHP-Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `restapitest`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `programming_languages`
--

CREATE TABLE `programming_languages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `released_year` int(11) NOT NULL,
  `githut_rank` int(11) DEFAULT NULL,
  `pypl_rank` int(11) DEFAULT NULL,
  `tiobe_rank` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `programming_languages`
--

INSERT INTO `programming_languages` (`id`, `name`, `released_year`, `githut_rank`, `pypl_rank`, `tiobe_rank`, `created_at`, `updated_at`) VALUES
(1, 'JavaScript', 1996, 1, 10, 7, '2023-02-21 12:57:40', '2023-02-21 13:16:42'),
(2, 'Python', 1991, 2, 1, 3, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(3, 'Java', 1995, 3, 2, 2, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(4, 'TypeScript', 2012, 7, 10, 42, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(5, 'C#', 2000, 9, 4, 5, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(6, 'PHP', 1995, 8, 6, 8, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(7, 'C++', 1985, 5, 5, 4, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(8, 'C', 1972, 10, 5, 1, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(9, 'Ruby', 1995, 6, 15, 15, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(11, 'Objective-C', 1984, 18, 8, 18, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(12, 'Swift', 2015, 16, 9, 13, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(13, 'Kotlin', 2011, 15, 12, 40, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(14, 'Go', 2009, 4, 13, 14, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(15, 'Rust', 2010, 14, 16, 26, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(16, 'Scala', 2004, 11, 17, 34, '2023-02-21 12:57:40', '2023-02-21 12:57:40'),
(17, 'JavaScript 2', 1995, 1, 10, 7, '2023-02-21 13:12:17', '2023-02-21 13:12:17'),
(18, 'JavaScript 3', 1995, 1, 10, 7, '2023-02-21 13:14:56', '2023-02-21 13:14:56');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `programming_languages`
--
ALTER TABLE `programming_languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_name_unique` (`name`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `programming_languages`
--
ALTER TABLE `programming_languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
