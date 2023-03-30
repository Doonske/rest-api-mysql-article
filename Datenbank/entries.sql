-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: wp-mysql
-- Erstellungszeit: 30. Mrz 2023 um 09:36
-- Server-Version: 8.0.12
-- PHP-Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `testdaten`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `entries`
--

CREATE TABLE `entries` (
  `id` int(11) NOT NULL,
  `createdOn` varchar(15) NOT NULL,
  `createdBy` varchar(255) NOT NULL,
  `softwareVersion` varchar(100) NOT NULL,
  `customer` varchar(255) NOT NULL,
  `entry_type` varchar(20) NOT NULL,
  `entry_address` varchar(255) NOT NULL,
  `entry_postal` int(100) NOT NULL,
  `entry_city` varchar(100) NOT NULL,
  `entry_size` int(11) NOT NULL,
  `entry_comment` text,
  `entry_shorthand` varchar(100) NOT NULL,
  `interest_count` int(10) DEFAULT '0',
  `image_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'public/images/standard.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Daten für Tabelle `entries`
--

INSERT INTO `entries` (`id`, `createdOn`, `createdBy`, `softwareVersion`, `customer`, `entry_type`, `entry_address`, `entry_postal`, `entry_city`, `entry_size`, `entry_comment`, `entry_shorthand`, `interest_count`, `image_path`) VALUES
(49, '1680165066455', 'Benutzer', '2022-1.3.2', 'Customer 1', 'apartment', 'Musterstraße 1', 12345, 'Musterstadt', 45, 'Schöne Wohnung in guter Lage', 'Musterstraße 1, 45qm', 5, 'public/images/wohnung.jpg'),
(50, '1680165066455', 'Benutzer', '2022-1.3.2', 'Customer 1', 'house', 'Hauptstraße 2', 67890, 'Musterdorf', 120, 'Großes Haus mit Garten', 'Hauptstraße 2, 120qm', 0, 'public/images/haus.jpg'),
(51, '1680165066455', 'Benutzer', '2022-1.3.2', 'Customer 1', 'construction-site', 'Baustelle 3', 99999, 'Musterstadt', 250, 'Großes Bauprojekt', 'Baustelle 3', 0, 'public/images/bauplatz.jpg'),
(54, '1680168012872', 'Benutzer', '2022-1.3.2', 'Frontend', 'house', 'Frontednstraße 1', 12345, 'React', 187, 'Dieser Eintrag wurde über das Frontend hinzugefügt.', 'Durch Frontend erstellt', 0, 'public/images/standard.jpg');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `entries`
--
ALTER TABLE `entries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `entries`
--
ALTER TABLE `entries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
